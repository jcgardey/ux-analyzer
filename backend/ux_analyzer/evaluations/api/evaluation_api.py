from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from evaluations.serializers import EvaluationSerializer

from evaluations.models import Evaluation

class CreateEvaluationAPI(APIView):

    def post(self, request):
        evaluation = Evaluation.objects.create(evaluation_name=request.data['evaluation_name'])
        return Response(EvaluationSerializer(evaluation).data, status=status.HTTP_201_CREATED)

class ListEvaluationsApi(APIView):

    def get(self, request):
        return Response(EvaluationSerializer(Evaluation.objects.all(), many=True).data)