from evaluations.api.user_session_api import CreateUserSessionAPI, GetUserSessionAPI
from django.urls import path


urlpatterns = [
    path('user_session/new', CreateUserSessionAPI.as_view()),
    path('user_session/<int:id>', GetUserSessionAPI.as_view()),
]