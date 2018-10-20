from django.forms import ModelForm
from django import forms
from .models import *

class ContentForm(ModelForm):
    class Meta:
        model=content
        exclude=['title']
class SearchForm(forms.Form):
    search=forms.CharField()
