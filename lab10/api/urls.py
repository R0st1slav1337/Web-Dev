from django.urls import path
from .views import (ProductListAPIViiew, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, CategoryProductAPIView)

urlpatterns = [
    path('products/', ProductListAPIViiew.as_view(), name='products_list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product_detail'),

    path('categories/', CategoryListAPIView.as_view(), name='categories_list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category_detail'),
    path('categories/<int:category_id>/products/', CategoryProductAPIView.as_view(), name='category_products'),
]