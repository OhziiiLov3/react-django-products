from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ProductSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from .models import Product
from .permissions import IsOwnerOrReadOnly


# Create your views here.
# ProductListCreate for list & create (GET /api/products/, POST /api/products/)
class ProductListCreate(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    # all users can read products
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Product.objects.all()
# Only logged in users can create products
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)

# ProductDetail view for detail - /api/products/<int:pk>/ (retrieve by ID, update, and delete endpoints)
class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
     serializer_class = ProductSerializer
    # Only allow access to products owned by the logged-in user
     permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

     queryset = Product.objects.all()

    #  def get_queryset(self):
    #     user = self.request.user
    #     return Product.objects.filter(owner=user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]