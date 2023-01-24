from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from evaluations.serializers import EvaluationSerializer, FullEvaluationSerializer

from evaluations.models import Evaluation

class CreateEvaluationAPI(APIView):

    def post(self, request):
        evaluation = Evaluation.objects.create(evaluation_name=request.data['evaluation_name'])
        return Response(EvaluationSerializer(evaluation).data, status=status.HTTP_201_CREATED)

class DeleteEvaluationAPI(APIView):
    
    def delete(self, request, id):
        return Response(Evaluation.objects.get(pk=id).delete())


class ListEvaluationsApi(APIView):

    def get(self, request):
        return Response(EvaluationSerializer(Evaluation.objects.all(), many=True).data)

class GetEvaluationAPI(APIView):

    def get(self, request, id):
        return Response(FullEvaluationSerializer(Evaluation.objects.get(pk=id)).data)