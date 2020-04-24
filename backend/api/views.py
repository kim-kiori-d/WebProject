from django.shortcuts import render
from api.models import Category, Clothes, Card
from api.serializers import CategoriesListSerializer, ClothesListSerializer, CardSerializer
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def categories(request):
    if request.method == 'GET':
        categories_list = Category.objects.all()
        serializer = CategoriesListSerializer(categories_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategoriesListSerializer(data=request.data)
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
        serializer = ClothesListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def clothes_of_category(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        clothes = category.clothes_set.all()
        serializer = ClothesListSerializer(clothes, many=True)
        return Response(serializer.data)


class ClothDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Clothes.objects.all()
    serializer_class = ClothesListSerializer

@api_view(['GET', 'POST'])
def clothes_of_card(request):
    try:
        card = Card.objects.get(id=1)
    except Card.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        clothes = card.clothes.all()
        serializer = ClothesListSerializer(clothes, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ClothesListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
