from django.contrib import admin
from django.urls import path, include
from . import views
from .views import *
 
urlpatterns = [
    path('', views.index, name='index' ),
    path('sayHello/', sayHello, name='sayHello'),
    path('Books/', Books,name='Books'),
    path('Books/<int:bookid>', BookID, name='BookID'),
]