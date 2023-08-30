from django.urls import path
from youtube_vid_download_0 import views

urlpatterns = [
    path('', views.index, name='index'),
    path('form/', views.url_form_gui, name='get_url'),
]
