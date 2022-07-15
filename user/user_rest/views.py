from common.json import ModelEncoder
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Favorite
import json
from .forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
# from django.views.decorators.http import required_http_methods


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
            first_name = request.POST.get("first_name")
            last_name = request.POST.get("last_name")
            user = User.objects.create_user(
                username=username, password=password, email=email, first_name=first_name, last_name=last_name
            )
            user.save()
            login(request, user)
            return redirect("signup")
    else:
        form = UserCreationForm(request.POST)
    context = {
        "form": form,
    }
    return render(request, "registration/signup.html", context)


@require_http_methods(["GET", "POST"])
def user_favorites(request):
    user = request.user
    if request.method == "GET":
        favorites = Favorite.objects.filter(user=user)
        return JsonResponse(
            {"favorites": favorites},
            encoder=FavoriteEncoder,
            safe=False,
        )
    else:
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

def get_csrf(request):
    response = JsonResponse({'detail': 'CSRF cookie set'})
    response['X-CSRFToken'] = get_token(request)
    return response


@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')

    if username is None or password is None:
        return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

    user = authenticate(username=username, password=password)

    if user is None:
        return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

    login(request, user)
    return JsonResponse({'detail': 'Successfully logged in.'})


def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'detail': 'You\'re not logged in.'}, status=400)

    logout(request)
    return JsonResponse({'detail': 'Successfully logged out.'})


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'isAuthenticated': True})


def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': False})

    return JsonResponse({'username': request.user.username})