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

class Clothes(models.Model):
    name =  models.CharField(max_length=100, default = "default")
    imageLink = models.CharField(max_length=100, default = "default")
    imageLink2 = models.CharField(max_length=100, default = "default")
    imageLink3 = models.CharField(max_length=100, default = "default")
    price = models.CharField(max_length=100, default = "default")
    description = models.CharField(max_length=100, default = "description")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def to_json(self):
            return {
                'id': self.id,
                'imageLink': self.imageLink,
                'imageLink2': self.imageLink2,
                'imageLink3': self.imageLink3,
                'price': self.price,
                'description': self.description,
                'category': self.category.id,
        }