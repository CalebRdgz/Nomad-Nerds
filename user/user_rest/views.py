from common.json import ModelEncoder
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required
from .models import Favorite
import json
from .forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import login


class FavoriteEncoder(ModelEncoder):
    model = Favorite
    properties = [
        "id",
        "user",
        "business",
    ]


def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            username = request.POST.get("username")
            password = request.POST.get("password")
            email = request.POST.get("email")
            user = User.objects.create_user(
                username=username, password=password, email=email
            )
            user.save()
            login(request, user)
            return redirect("home")
    else:
        form = UserCreationForm(request.POST)
    context = {
        "form": form,
    }
    return render(request, "registration/signup.html", context)


@login_required
@require_http_methods(["GET", "POST"])
def user_favorites(request, pk):
    user = request.user
    if request.method == "GET" and request.user.is_authenticated:
        favorites = Favorite.objects.filter(pk=user)
        return JsonResponse(
            {"favorites": favorites},
            encoder=FavoriteEncoder,
            safe=False,
        )
    elif request.method == "POST":
        try:
            content = json.loads(request.body)
            favorite = Favorite.objects.create(**content)
            content["user"] = content["username"]

            # refer to scrumptious-recipes-views for user
            return JsonResponse(
                favorite,
                encoder=FavoriteEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Could not create this favorite"})
            response.status_code = 404
            return response


@require_http_methods(["DELETE"])
def user_delete_favorite(request, pk):
    user = request.user
    try:
        Favorite.objects.filter(user=user, id=pk).delete()
        return JsonResponse({"message": "You have successfully deleted a favorite"})
    except Favorite.DoesNotExist:
        return JsonResponse({"message": "Could not delete this favorite"})
