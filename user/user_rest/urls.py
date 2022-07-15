from django.urls import path
from .views import user_favorites, user_delete_favorite, signup
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path("favorites/", user_favorites, name="user_favorites"),
    path("favorites/<int:pk>/", user_delete_favorite, name="user_delete_favorite"),
    # path("login/", auth_views.LoginView.as_view(), name="login"),
    # path("logout/", auth_views.LogoutView.as_view(), name="logout"),
    path("signup/", signup, name="signup"),
    path('csrf/', views.get_csrf, name='api-csrf'),
    path('login/', views.login_view, name='api-login'),
    path('logout/', views.logout_view, name='api-logout'),
    path('session/', views.session_view, name='api-session'),
    path('whoami/', views.whoami_view, name='api-whoami'),
]
