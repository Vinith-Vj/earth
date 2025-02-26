from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')

def who(request):
    return render(request, 'who_we_are.html')

def projects(request):
    return render(request, 'projects.html')

def project_details(request):
    return render(request, 'projects_details.html')

def what(request):
    return render(request, 'what_we_offer.html')

def contact(request):
    return render(request, 'contact_us.html')