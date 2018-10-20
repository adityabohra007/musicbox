# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import content
from django.shortcuts import render
import get_tag
# Create your views here.
def index(request):
	songs=content.objects.all()
	return render(request,"main/index.html",{'songs':songs})
