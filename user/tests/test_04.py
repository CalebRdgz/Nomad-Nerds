from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
import json


class LoggedInTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        user = User.objects.create_user(username="testuser", password="hello12345")
        self.client.login(username="testuser", password="hello12345")


class UserFavoriteTests(LoggedInTestCase):
    def test_get_favorites(self):
        response = self.client.get("/user/favorites/")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertIn("favorites", content)

    def test_post_favorites(self):
        favorite = json.dumps({"name": "test"})
        response = self.client.post("/user/favorites/", favorite, "application/json")
        content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertIn("name", content)
