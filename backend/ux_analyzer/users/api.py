from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from knox.models import AuthToken
from rest_framework import status
from rest_framework.response import Response
from .serializers import LoginUserSerializer


class LoginAPI(APIView):
    
    def post(self, request):
        serializer = LoginUserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        user = authenticate(email=request.data['email'], password=request.data['password'])
        if user is None:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        login(request, user)
        _, token = AuthToken.objects.create(user=user)
        return Response({ 'token': token })

        
        