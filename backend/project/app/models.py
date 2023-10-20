from django.db import models


class Establishment(models.Model):
    city = models.CharField(max_length=128, verbose_name="Город",)
    department = models.CharField(max_length=256, verbose_name="Цех")
    employee = models.CharField(max_length=128, verbose_name="Сотрудник")
    brigade = models.PositiveSmallIntegerField(verbose_name="Бригада")

    def __str__(self):
        return f"Сотрудник {self.employee} из цеха {self.department} города {self.city}"

    class Meta:
        verbose_name = "Учреждение"
        verbose_name_plural = "Учреждения"
