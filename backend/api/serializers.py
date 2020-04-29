from rest_framework import serializers
from api.models import Category, Clothes, Card
from django.contrib.auth.models import User


class CategoriesListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category()
        category.name = validated_data.get('name', 'default name')
        category.save()
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class ClothesListSerializer(serializers.ModelSerializer):
    category = serializers.ReadOnlyField(source='category.id')

    class Meta:
        model = Clothes
        fields = ('id', 'name', 'imageLink', 'imageLink2', 'imageLink3', 'price', 'description', 'category')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)


class CardSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    clothes = ClothesListSerializer(many=True)
    created_by = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Card
        fields = ('id', 'clothes', 'created_by')
