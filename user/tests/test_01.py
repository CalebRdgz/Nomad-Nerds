from django.test import TestCase


class FeatureTests(TestCase):
    def test_django_installed(self):
        pass

    def test_black_installed(self):
        try:
            import black
        except ModuleNotFoundError:
            self.fail("Could not find 'black' installed in the environment")
