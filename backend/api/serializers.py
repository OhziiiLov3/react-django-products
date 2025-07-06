from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product

# create User serializer to covert python objects to json format
# serializer for accepting a new user and returning user object 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

# Method called to create new user 
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","owner_id","name","description","price", "category","created_at"]
        extra_kwargs = {"owner": {"read_only": True}}