from django.forms import ModelForm
from .models import *

class TasksForm(ModelForm):
    class Meta:
        model =Tasks
        fields=['task','complete']

    def save(self, **kwargs):
        user = kwargs.pop('user')
        instance = super(TasksForm, self).save(**kwargs)
        instance.user = user
        instance.save()
        return instance
