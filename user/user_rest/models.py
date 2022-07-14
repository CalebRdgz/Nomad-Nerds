from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

USER_MODEL = settings.AUTH_USER_MODEL


class Favorite(models.Model):
    user = models.ForeignKey(
        USER_MODEL,
        related_name="favorite",
        on_delete=models.CASCADE,
        null=True,
    )
    business_id = models.CharField(max_length=30)

    class Meta:
        unique_together = ("business_id", "user")
