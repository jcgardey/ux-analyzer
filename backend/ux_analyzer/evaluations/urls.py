from evaluations.api.user_session_api import CreateUserSessionAPI, GetUserSessionAPI, GetAllUserSessionsOfVersionApi
from evaluations.api.version_api import CreateVersionAPI, ListVersionsAPI, GetVersionAPI, GetVersionWidgetsAPI
from evaluations.api.evaluation_api import CreateEvaluationAPI, ListEvaluationsApi, DeleteEvaluationAPI
from django.urls import path


urlpatterns = [
    path('version/<str:token>/user_session/new', CreateUserSessionAPI.as_view()),
    path('user_session/<int:id>', GetUserSessionAPI.as_view()),
    path('version/new', CreateVersionAPI.as_view()),
    path('version', ListVersionsAPI.as_view()),
    path('version/<int:id>', GetVersionAPI.as_view()),
    path('version/<int:id>/user_sessions', GetAllUserSessionsOfVersionApi.as_view()),
    path('version/<int:id>/widgets', GetVersionWidgetsAPI.as_view()),

    path('evaluation/new', CreateEvaluationAPI.as_view()),
    path('evaluation', ListEvaluationsApi.as_view()),
    path('evaluation/<int:id>', DeleteEvaluationAPI.as_view()),
]