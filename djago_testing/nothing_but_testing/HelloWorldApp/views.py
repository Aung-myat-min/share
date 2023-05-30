from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def sayHello(request):
    return HttpResponse('<h1>Hello World!</h1>', status=200)

def Books(request):
    return HttpResponse("This is a books webpage", status=200)

def BookID(request,bookid):
    return HttpResponse(f"The book Id is:{bookid}", status=200)

def index(request):
    return render(request, 'HTMLS/index.html')