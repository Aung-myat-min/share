from django.shortcuts import render
from .forms import get_url
from .download import download

# Create your views here.
def index(request):
    return render(request, "index.html", {})


def url_form_gui(request):
    if request.method == "POST":
        form = get_url(request.POST)
        if form.is_valid():
            url = form.cleaned_data["url"]
            download(url)
            # Process the URL or perform actions with it
        else:
            # If the form is not valid, we need to provide a form instance for rendering
            form = get_url()
    else:
        form = get_url()

    return render(request, "form_template.html", {"form": form})

