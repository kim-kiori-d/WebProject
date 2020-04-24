from django.contrib import admin
from django.urls import path
from api import views
from api.views import categories, clothes
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories', categories),
    path('clothes', clothes),
]