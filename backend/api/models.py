from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):

    CATEGORY_CHOICES = [
        ("ELECTRONICS", "Electronics"),
        ("FASHION", "Fashion"),
        ("BOOKS", "Books"),
        ("HOME", "Home & Kitchen"),
    ]

    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    created_at = models.DateField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="products")

    def __str__(self):
        return self.name