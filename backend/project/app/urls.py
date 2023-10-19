from django.urls import path
from .views import add_data

urlpatterns = [
    path('add-employee/', add_data),
]