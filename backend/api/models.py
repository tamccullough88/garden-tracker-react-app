from django.db import models

# Create your models here.
from djongo import models

class Plant(models.Model):
    name = models.CharField(max_length=100)
    date_planted = models.DateField()
    comments = models.TextField(blank=True)
    # x_location = models.IntegerField()
    # y_location = models.IntegerField()

    def __str__(self):
        return self.name

class Garden(models.Model):
    name = models.CharField(max_length=100)
    plants = models.ArrayField(model_container=Plant)

    def __str__(self):
        return self.name
