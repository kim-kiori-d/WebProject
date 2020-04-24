from django.shortcuts import render
from api.models import Category, Clothes
from api.serializers import CategoriesListSerializer, ClothesListSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

# fbv
@api_view(['GET', 'PUT', 'DELETE'])
def category(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return Response({'error':str(e)})
    if request.method == 'GET':
            serializer = CategoriesListSerializer(category)
            return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategoriesListSerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    if request.method == 'DELETE':
            category.delete()
            return Response({'deleted': True})

# cbv
class ClothesListAPIView(APIView):
    def get(self, request):
        clothes_list = Clothes.objects.all()
        serializer = ClothesListSerializer(clothes_list, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ClothesListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# cbv

class CategoriesListAPIView(APIView):
    def get(self, request):
        categories_list = Category.objects.all()
        serializer = CategoriesListSerializer(categories_list, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = CategoriesListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# fbv
@api_view(['GET'])
def clothesByCategory(request, id):
    if request.method == 'GET':
        clothes_list = Clothes.objects.all()
        clothesByCategory = []
        for clothes in clothes_list:
            if clothes.category.id == id:
                serializer = ClothesListSerializer(clothes)
                clothesByCategory.append(serializer.data)
        return Response(clothesByCategory)
