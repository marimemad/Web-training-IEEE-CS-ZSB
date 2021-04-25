from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Tasks(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    task= models.CharField(max_length=400)
    complete= models.BooleanField(default=False)
    date= models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return(self.task)
