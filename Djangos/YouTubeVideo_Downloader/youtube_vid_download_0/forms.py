from django import forms

class get_url(forms.Form):
    url = forms.CharField(label='video_url')
    
