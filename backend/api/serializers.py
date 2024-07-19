from rest_framework import serializers
from .models import Garden, Plant, Comment

class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = '__all__'

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'