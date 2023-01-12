from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from evaluations.models import UserSession, Version
from evaluations.micro_measures_grabbers import TextInputGrabber, SelectInputGrabber, RadiosetGrabber, AnchorGrabber, DatepickerGrabber
from evaluations.serializers import UserSessionSerializer

from datetime import timedelta

class CreateUserSessionAPI(APIView):
    grabbers = {
        'TextInput': TextInputGrabber(),
        'SelectInput': SelectInputGrabber(),
        'RadioSet': RadiosetGrabber(),
        'Anchor': AnchorGrabber(),
        'Datepicker': DatepickerGrabber(),
        'DateSelect': SelectInputGrabber()
    }

    def post(self, request, token):
        user_session = Version.objects.get(token=token).user_sessions.create(session_id=request.data['id'], time=timedelta(milliseconds=request.data['time']))
        valid_widget_logs = [ widget_log for widget_log in request.data['widget_logs'] if self.grabbers[widget_log['widgetType']].is_log_valid(widget_log) ]
        for widget_log in valid_widget_logs:
            user_session.widget_logs.create(
                widget_type=widget_log['widgetType'], 
                widget_xpath=widget_log['xpath'], 
                widget_url=widget_log['url'],
                micro_measures= self.get_micro_measures_from_log(widget_log)
            )
        return Response(UserSessionSerializer(user_session).data, status=status.HTTP_201_CREATED)


    def get_micro_measures_from_log(self, widget_log):
        return { micro_measure_name: widget_log[micro_measure_name] for micro_measure_name in self.grabbers[widget_log['widgetType']].measures_to_capture() }


class GetUserSessionAPI(APIView):

    def get(self, request, id):
        return Response(UserSessionSerializer(UserSession.objects.get(pk=id)).data)
        
    
    

