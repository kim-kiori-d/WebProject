from rest_framework import serializers
from api.models import Category, Clothes

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

class ClothesListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        clothes = Clothes()
        clothes.name = validated_data.get('name', 'default name')
        clothes.imageLink = validated_data.get('imageLink', 'default imageLink')
        clothes.imageLink2 = validated_data.get('imageLink2', 'default imageLink2')
        clothes.imageLink3 = validated_data.get('imageLink3', 'default imageLink3')
        clothes.price = validated_data.get('price', 'default price')
        clothes.description = validated_data.get('description', 'default description')
        clothes.category = validated_data.get('category', 1)
        clothes.save()
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.imageLink = validated_data.get('imageLink')
        instance.imageLink2 = validated_data.get('imageLink2')
        instance.imageLink3 = validated_data.get('imageLink3')
        instance.price = validated_data.get('price')
        instance.description = validated_data.get('description')
        instance.category = validated_data.get('category')
        instance.save()
        return instance