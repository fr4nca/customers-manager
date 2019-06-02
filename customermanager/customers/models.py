from django.db import models

# Create your models here.
class Customer(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  phone = models.CharField(max_length=20)
  address = models.CharField(max_length=100)
  city = models.CharField(max_length=20)
  state = models.CharField(max_length=20)
  created_at = models.DateTimeField(auto_now_add=True)
