from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }


class Manager(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password
        }

class Category(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class clothesByCategory(models.Manager):
    def get_queryset(self, id):
        return super(clothesByCategory, self).get_queryset().filter(name="Платье The one by Lichi")

class Clothes(models.Model):
    name =  models.CharField(max_length=500, default="Платье The one by Lichi")
    imageLink = models.CharField(max_length=500, default="https://lichi-a.akamaihd.net/product/38348/thumbs/ff2c89c5a1f0a18fae140da8e2f31c8b_768_1024.jpg?v=0_3842912")
    imageLink2 = models.CharField(max_length=500, default="https://lichi-a.akamaihd.net/product/38348/thumbs/d37653b27d106c02e1177fa12c1339da_768_1024.jpg?v=1_3842913")
    imageLink3 = models.CharField(max_length=500, default="https://lichi-a.akamaihd.net/product/38348/thumbs/6c22e46babf91e34f540df33efa59661_768_1024.jpg?v=2_3842914")
    price = models.CharField(max_length=500, default="30 950")
    description = models.CharField(max_length=500, default="Материал: Полиэстер.........100%")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def to_json(self):
            return {
                'id': self.id,
                'name': self.name,
                'imageLink': self.imageLink,
                'imageLink2': self.imageLink2,
                'imageLink3': self.imageLink3,
                'price': self.price,
                'description': self.description,
                'category': self.category.id,
        }

