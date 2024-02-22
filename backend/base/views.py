from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .product import products
from .models import *
from .serializer import *
# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
        def validate(self, attrs: Dict[str, Any]) -> Dict[str, str]:
            data = super().validate(attrs)


            data['username'] = self.user.username
            data['email'] = self.user.email

            return data

@api_view(['GET'])
def get_products(response, **kwargs):
    if kwargs:
        product_id = kwargs.get('id')
        product = Product.objects.get(_id=product_id)
        if product:
            serializers = ProductSerializer(product, many=False)
            return Response(serializers.data)
        else:
            return Response({'message': 'Product not found'}, status=404)
    products = Product.objects.all()
    serializers = ProductSerializer(products, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def get_user_profile(request):
    user = request.user
    serializers = UserSerializer(user, many=False)
    return Response(serializers.data)
    
    