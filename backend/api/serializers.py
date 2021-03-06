from rest_framework import serializers
from api.models import Category, Clothes, Card, User


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
        fields = "__all__"


class CardSerializer(serializers.ModelSerializer):
    clothes = ClothesListSerializer(many=True)

    class Meta:
        model = Card
        fields = {'id', 'clothes'}


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField()
    password = serializers.CharField()

    def create(self, validated_data):
        user = User()
        user.username = validated_data.get('username')
        user.password = validated_data.get('password')
        user.save()
        return user