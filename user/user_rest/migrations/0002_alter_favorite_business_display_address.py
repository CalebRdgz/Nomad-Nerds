# Generated by Django 4.0.3 on 2022-08-08 23:39

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorite',
            name='business_display_address',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=50), default=list, size=3),
        ),
    ]