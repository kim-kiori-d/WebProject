from django.contrib import admin
from django.urls import path
from api import views
from api.views import clothesByCategory, category, ClothesListAPIView, CategoriesListAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories', CategoriesListAPIView.as_view()),
    path('clothes', ClothesListAPIView.as_view()),
    path('clothes/<int:id>', clothesByCategory),
    path('categories/<int:id>', category),
]