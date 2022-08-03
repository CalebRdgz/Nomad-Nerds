from django.test import TestCase, Client 
from django.contrib.auth.models import User
from django.urls import reverse

class LoginTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.response = self.client.get("localhost:3000/user/login")

    def test_login_works(self):
        User.objects.create_user("johndoe", password="hello12345")
        response = self.client.post(
            reverse('login'),
            {"username": "johndoe", "password": "hello1234"},
        )
        self.assertEqual(
            response.status_code,
            302,
            msg="Login does not seem to work"
        )
    
    def test_login_fails_for_unknown_user(self):
        response = self.client.post(
            reverse('login'),
            {"username": "johndoe", "password": "hello1234"},
        )
        self.assertEqual(
            response.status_code,
            200,
            msg="Login does not seem to work",
        )

        