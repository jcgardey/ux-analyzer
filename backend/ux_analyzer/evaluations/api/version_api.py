from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from evaluations.models import Evaluation, Version, WidgetLog
from evaluations.serializers import VersionSerializer

import random
import string

class CreateVersionAPI(APIView):

    def generate_version_token(self):
        return ''.join(random.choices(string.ascii_lowercase + string.digits, k=16))

    def post(self, request, evaluation_id):
        version = Evaluation.objects.get(pk=evaluation_id).versions.create(version_name=request.data['name'], token=self.generate_version_token())
        return Response({'version_name': version.version_name, 'token': version.token}, status=status.HTTP_201_CREATED)

class ListVersionsAPI(APIView):

    def get(self, request, evaluation_id):
        return Response(VersionSerializer(Version.objects.filter(evaluation=evaluation_id), many=True).data)

class GetVersionAPI(APIView):

    def get(self, request, id):
        return Response(VersionSerializer(Version.objects.get(pk=id)).data)

class GetVersionWidgetsAPI(APIView):
    
    def get(self, request, id):
        return Response(Version.objects.get(pk=id).get_widgets())
