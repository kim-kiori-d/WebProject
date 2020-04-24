from rest_framework import serializers
from api.models import Category, Clothes, Card


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
    imageLink = serializers.CharField()
    imageLink2 = serializers.CharField()
    imageLink3 = serializers.CharField()
    price = serializers.CharField()
    description = serializers.CharField()

    def create(self, validated_data):
        clothes = Clothes(name=validated_data['name'], imageLink=validated_data['imageLink'],
                          imageLink2=validated_data['imageLink2'], imageLink3=validated_data['imageLink3'],
                          price=validated_data['price'], description=validated_data['description'],
                          category=validated_data['category'])
        clothes.save()
        return clothes

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

class CardSerializer(serializers.ModelSerializer):
    clothes = ClothesListSerializer(many=True)

    class Meta:
        model = Card
        fields = {'id', 'clothes'}
