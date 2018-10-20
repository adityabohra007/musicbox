# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import get_tag

from django.db.models.signals import pre_save,post_save
class content(models.Model):
	files	=models.FileField(null=True,blank=True,max_length=500)
	#genre   =models.CharField(max_length=100,blank=True)#create list of genre to select from(provide more than one selection for this field)
	art     =models.ImageField(default="",blank=True)
	album   =models.CharField(max_length=100,default="Unknown",blank=True)#same as movie field
	artist  =models.CharField(max_length=200,default="Unknown",blank=True)
	#year    =models.DateField()
	title   =models.CharField(max_length=150,default="Unknown",blank=True)
	#add here category podcast,story,song 
	#write a script to find all mp3 files in a specific folder and its subfolder 
	
	def __str__(self):
		return self.title
def  ps_pre_save_receiver(sender,instance,*args,**kwargs):
	print('saving..')
	print('but first lets do this ')
	print(instance.files,"Hey is it here")
	tags=get_tag.get_file_tags(instance.files)
	instance.genre="hr"
	print("Date is here",tags)
	instance.title=tags[0]
	instance.artist=tags[1]
def  ps_post_save_receiver(sender,instance,created,*args,**kwargs):
	print("Date is here")
	print('saved')
pre_save.connect(ps_pre_save_receiver,sender=content)
post_save.connect(ps_post_save_receiver,sender=content)

