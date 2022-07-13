from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=100)


class Location(models.Model):
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=30)
    country = models.CharField(max_length=30)


class Business(models.Model):
    business_id = models.CharField(max_length=30, unique=True)
    name = models.CharField(max_length=100)
    location = models.ManyToManyField(Location)
    categories = models.ManyToManyField(Category)
    rating = models.FloatField(null=True)
    image_url = models.URLField(max_length=500)
    url = models.URLField(max_length=500)
    price = models.CharField(max_length=10)
