from rest_framework import serializers

from .models import Establishment


class EstablishmentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["city", "department", "employee", "brigade"]
        model = Establishment
