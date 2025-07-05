from django.contrib.auth.models import User
from rest_framework import serializers


# create User serializer to covert python objects to json format
# serializer for accepting a new user and returning user object 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

# Method called to create new user 
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user