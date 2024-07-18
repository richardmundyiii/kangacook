from rest_framework import serializers
from .models import Recipe

class IngredientSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    quantity = serializers.CharField(max_length=100)

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)  

    class Meta:
        model = Recipe
        fields = '__all__'
