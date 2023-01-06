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
    user_interaction_effort = serializers.SerializerMethodField()
    user_sessions_count = serializers.SerializerMethodField()
    class Meta:
        model = Version
        fields = ('id', 'version_name', 'token' , 'user_interaction_effort', 'user_sessions_count')
    
    def get_user_interaction_effort(self, version):
        return version.get_user_interaction_effort()
    
    def get_user_sessions_count(self, version):
        return version.get_user_sessions_count()
