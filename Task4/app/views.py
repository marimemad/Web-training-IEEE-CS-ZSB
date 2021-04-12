from django.shortcuts import render,redirect
from .models import *
from .form import *
# Create your views here.
def home(request):
    form=TasksForm
    if request.method=='POST':
        form=TasksForm(request.POST)
        if form.is_valid():
            form.save()
        return( redirect('/') )

    tasks=Tasks.objects.all()
    context={'form':form,'tasks':tasks}
    return(render(request,'todo',context))

def update(request,pk):
    task=Tasks.objects.get(id=pk)
    form=TasksForm(instance=task)

    if request.method=='POST':
        form = TasksForm(request.POST,instance=task)
        if form.is_valid():
            form.save()
            return(redirect('/'))

    context={'form':form}
    return(render(request,'update',context))


def delet(request,pk):
    task=Tasks.objects.get(id=pk)
    task.delete()
    return(redirect('/'))
