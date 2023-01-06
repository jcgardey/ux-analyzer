from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from evaluations.models import Version
from evaluations.serializers import VersionSerializer

import random
import string

class CreateVersionAPI(APIView):

    def generate_version_token(self):
        return ''.join(random.choices(string.ascii_lowercase + string.digits, k=16))

    def post(self, request):
        version = Version.objects.create(version_name=request.data['name'], token=self.generate_version_token())
        return Response({'version_name': version.version_name, 'token': version.token}, status=status.HTTP_201_CREATED)

class ListVersionsAPI(APIView):

    def get(self, request):
        return Response(VersionSerializer(Version.objects.all(), many=True).data)