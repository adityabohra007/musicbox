# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-28 10:16
from __future__ import unicode_literals

import audiofield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='audio_files',
            name='audio_file',
            field=audiofield.fields.AudioField(blank=True, help_text='Allowed type - .mp3, .wav, .ogg', max_length=200, upload_to='your/upload/dir'),
        ),
    ]
