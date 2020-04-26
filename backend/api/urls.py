from django.contrib import admin
from django.urls import path
from api import views
from api.views import clothes, clothes_of_category, ClothDetails, clothes_of_card, ClothInCard
from api.views import clothesByCategory, category, ClothesListAPIView, CategoriesListAPIView, newClothesList, newUsers
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('clothes', clothes),
    path('categories/<int:id>/clothes', clothes_of_category),
    path('clothes/<int:pk>', ClothDetails.as_view()),
    path('card/clothes', clothes_of_card),
    path('card/clothes/<int:pk>', ClothInCard.as_view()),
    path('categories', CategoriesListAPIView.as_view()),
    path('clothes/<int:id>', clothesByCategory),
    path('categories/<int:id>', category),
    path('clothes/new', newClothesList.as_view()),
    path('newusers/', newUsers.as_view())
]