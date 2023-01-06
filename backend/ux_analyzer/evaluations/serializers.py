from rest_framework import serializers
from .models import WidgetLog, UserSession, Version


class WidgetLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = WidgetLog
        fields = ('widget_url', 'widget_xpath','widget_type', 'micro_measures')

class UserSessionSerializer(serializers.ModelSerializer):
    widget_logs = WidgetLogSerializer(many=True)
    user_interaction_effort = serializers.SerializerMethodField()

    class Meta:
        model = UserSession
        fields = ('user_interaction_effort','widget_logs',)
    
    def get_user_interaction_effort(self, user_session):
        return user_session.get_user_interaction_effort()


class VersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Version
        fields = ('version_name', 'token')
