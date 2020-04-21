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
