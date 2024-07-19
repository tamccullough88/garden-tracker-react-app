from rest_framework import serializers
from .models import Garden, Plant, Comment



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class PlantSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Plant
        fields = '__all__'

class GardenSerializer(serializers.ModelSerializer):
    plants = PlantSerializer(many=True, read_only=True)
    class Meta:
        model = Garden
        fields = '__all__'

