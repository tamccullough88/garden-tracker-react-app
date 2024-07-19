from datetime import date
from django.db import models

class Garden(models.Model):
    name = models.CharField(max_length=100)


    def __str__(self):
        return self.name

class Plant(models.Model):
    name = models.CharField(max_length=100)
    date_planted = models.DateField()  # Date field for date planted
    garden = models.ForeignKey(Garden, related_name='plants', on_delete=models.CASCADE)  # ForeignKey to Garden
    
    def __str__(self):
        return self.name

class Comment(models.Model):
    plant = models.ForeignKey(Plant, related_name='comments', on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateField()

    def __str__(self):
        return self.text[:50]