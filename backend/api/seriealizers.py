from rest_framework import serializers
from .models import Garden, Plant

class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'

class GardenSerializer(serializers.ModelSerializer):
    plants = PlantSerializer(many=True)

    class Meta:
        model = Garden
        fields = '__all__'
