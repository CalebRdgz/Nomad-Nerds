from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Favorite
import json
from django.contrib.auth.models import User
from django.db import IntegrityError
import djwto.authentication as auth


class FavoriteEncoder(ModelEncoder):
    model = Favorite
    properties = [
        "id",
        "user",
        "business",
    ]

class UserEncoder(ModelEncoder):
    model = User
    properties = [
        "username",
    ]


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

@auth.jwt_login_required
@require_http_methods(["DELETE"])
def user_delete_favorite(request, pk):
    user = request.user
    try:
        Favorite.objects.filter(user=user, id=pk).delete()
        return JsonResponse({"message": "You have successfully deleted a favorite"})
    except Favorite.DoesNotExist:
        return JsonResponse({"message": "Could not delete this favorite"})



@require_http_methods(["GET", "POST"])
def users(request):
    if request.method == "POST":
        try:
            content = json.loads(request.body)
            user = User.objects.create_user(
                username=content["username"],
                password=content["password"],
                email=content["email"],
                first_name=content["first_name"],
                last_name=content["last_name"],
            )
            print('user',type(user.username))
            return JsonResponse(
                {"username": user},
                safe = False,
                encoder=UserEncoder,
            )
        except IntegrityError:
            response = JsonResponse(
                {"detail": "Please enter a different username and email"}
            )
            response.status_code = 409
            return response
    else:
        users = User.objects.all()
        return JsonResponse(
            {"users": users},
            encoder=UserEncoder,
            safe=False
        )


@require_http_methods(["GET"])
def get_specific_user(request, pk):
    if request.method == "GET":
        user = User.objects.get(id=pk)
        return JsonResponse(
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            }
        )

@require_http_methods(["GET"])
def user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response


@require_http_methods(["GET"])
@auth.jwt_login_required
def get_current_user(request):

    return JsonResponse(
        {
            "id": request.payload["user"]["id"],
            "username": request.payload["user"]["username"],
        }
    )




# @require_POST
# def login_view(request):
#     data = json.loads(request.body)
#     username = data.get('username')
#     password = data.get('password')

#     if username is None or password is None:
#         return JsonResponse({'detail': 'Please provide username and password.'}, status=400)

#     user = authenticate(username=username, password=password)

#     if user is None:
#         return JsonResponse({'detail': 'Invalid credentials.'}, status=400)

#     login(request, user)
#     return JsonResponse({'detail': 'Successfully logged in.'})


# def logout_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({'detail': 'You\'re not logged in.'}, status=400)

#     logout(request)
#     return JsonResponse({'detail': 'Successfully logged out.'})


# @ensure_csrf_cookie
# def session_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({'isAuthenticated': False})

#     return JsonResponse({'isAuthenticated': True})


# def whoami_view(request):
#     if not request.user.is_authenticated:
#         return JsonResponse({'isAuthenticated': False})

#     return JsonResponse({'username': request.user.username})