from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Establishment


@api_view(['get', 'post'])
def add_data(request):
    data = request.data
    if data["city"] and data["department"] and data["employee"] and data["brigade"]:
        try:
            Establishment.objects.create(city=data["city"], department=data["department"],
                                         employee=data["employee"], brigade=data["brigade"])
        except Exception as err:
            return Response("Ошибка внесения данных", err)
    else:
        return Response("Ошибка внесения данных")

    return Response("Успешное внесения данных")
