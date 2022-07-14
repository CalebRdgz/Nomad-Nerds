from django.urls import path
from .views import user_favorites, user_delete_favorite
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("favorites/", user_favorites, name="user_favorites"),
    path("favorites/<int:pk>/", user_delete_favorite, name="user_delete_favorite"),
    path("login/", auth_views.LoginView.as_view(), name="login"),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    # path("signup/", signup, name="signup"),
]
