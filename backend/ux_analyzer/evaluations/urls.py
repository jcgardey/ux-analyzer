from evaluations.api.user_session_api import CreateUserSessionAPI, GetUserSessionAPI
from evaluations.api.version_api import CreateVersionAPI
from django.urls import path


urlpatterns = [
    path('user_session/new', CreateUserSessionAPI.as_view()),
    path('user_session/<int:id>', GetUserSessionAPI.as_view()),
    path('version/new', CreateVersionAPI.as_view()),
]