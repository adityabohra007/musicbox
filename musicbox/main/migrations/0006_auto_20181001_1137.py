# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-10-01 11:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20181001_1125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='filename',
            field=models.FileField(blank=True, null=True, upload_to=b''),
        ),
    ]
