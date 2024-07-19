from rest_framework import viewsets
from .models import Garden, Plant, Comment
from .serializers import GardenSerializer, PlantSerializer, CommentSerializer

class GardenViewSet(viewsets.ModelViewSet):
    queryset = Garden.objects.all()
    serializer_class = GardenSerializer

class PlantViewSet(viewsets.ModelViewSet):
    queryset = Plant.objects.all()
    serializer_class = PlantSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer