from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('/user/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name='routes'),
    path('user/profile/', views.get_user_profile, name='user-profile'),
    path('products/', views.get_products, name='products'),
    path('products/<str:id>/', views.get_products, name='product')
]