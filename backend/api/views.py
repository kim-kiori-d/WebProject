from django.shortcuts import render
from api.models import Category, Clothes
from api.serializers import CategoriesListSerializer, ClothesListSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def categories(request):
    if request.method == 'GET':
        categories_list = Category.objects.all()
        serializer = CategoriesListSerializer(categories_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategoriesListSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def clothes(request):
    if request.method == 'GET':
        clothes_list = Clothes.objects.all()
        serializer = ClothesListSerializer(clothes_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ClothesListSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)