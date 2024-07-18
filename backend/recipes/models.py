from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.JSONField()
    steps = models.TextField()
    main_ingredient = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    submitted_by = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
