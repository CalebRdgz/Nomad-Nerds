from django.urls import reverse
from django.test import TestCase, Client
from user_rest.models import Favorite
from django.contrib.auth.models import User
import json
from user_rest.views import users, user_token


class TestViews(TestCase):
    def user_token(self):
        response = self.client.get(
            "/user/me/token/", {"username": "test", "password": "Test123"}
        )
        self.assertEqual(
            response.status_code, 200, "The token should be successfully returned."
        )

        response_content = json.loads(response.content.decode("utf-8"))
        token = response_content["token"]

        # The following request fails
        response = self.client.get("/user/me/token/", {}, Authorization="JWT " + token)
        response_content = json.loads(response.content.decode("utf-8"))

        self.assertEqual(
            response_content["authenticated"],
            "mooh",
            "The user should be able to access this endpoint.",
        )
        response = self.client.get(
            "/user/me/token/", {}, HTTP_AUTHORIZATION="JWT {}".format(token)
        )
