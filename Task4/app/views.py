from django.shortcuts import render,redirect
from .models import *
from .form import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
# Create your views here.


def signup(request):
    form=UserCreationForm()
    context={'form':form}

    if request.method=='POST':
        form=UserCreationForm(request.POST)
        if form.is_valid():
            user=form.save()
            login(request, user)
            return(redirect('home'))

    return(render(request,'signup.html',context))

@login_required
def home(request):
    form=TasksForm()
    user=request.user
    if request.method=='POST':
        form=TasksForm(request.POST)
        print(form.errors)
        if form.is_valid():
            form.save(user=request.user, commit=False)
            return( redirect('home') )

    tasks=Tasks.objects.filter(user=user)
    context={'form':form,'tasks':tasks,'user':request.user}
    return(render(request,'todo',context))

@login_required
def update(request,pk):
    task=Tasks.objects.get(id=pk)
    form=TasksForm(instance=task)

    if request.method=='POST':
        form = TasksForm(request.POST,instance=task)
        if form.is_valid():
            form.save(user=request.user, commit=False)
            return(redirect('home'))

    context={'form':form}
    return(render(request,'update',context))

@login_required
def delet(request,pk):
    task=Tasks.objects.get(id=pk)
    task.delete()
    return(redirect('home'))
