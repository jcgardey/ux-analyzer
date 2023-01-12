from django.db import models
from .micro_measures_grabbers import grabbers

from prediction_models.train_models import prediction_models
import numpy as np

class Version(models.Model):

    version_name = models.CharField(max_length=255)
    token = models.CharField(max_length=16)

    def get_user_interaction_effort(self):
        return np.mean( np.array([session.get_user_interaction_effort() for session in self.user_sessions.all()]) ) if self.get_user_sessions_count() > 0 else None
    
    def get_user_sessions_count(self):
        return self.user_sessions.all().count()

class UserSession(models.Model):

    version = models.ForeignKey(Version, on_delete=models.CASCADE, related_name='user_sessions')
    date = models.DateTimeField(auto_now=True)
    time = models.DurationField(null=True)
    session_id = models.CharField(max_length=50)
    
    def get_user_interaction_effort(self):
        predictions = np.array([ widget_log.get_user_interaction_effort() for widget_log in self.widget_logs.all() ])
        print(predictions)
        return np.mean(predictions)

class WidgetLog(models.Model):
    WIDGET_TYPES = [
        ('TextInput', 'TextInput'), 
        ('SelectInput', 'SelectInput'),
        ('Anchor', 'Anchor'), 
        ('Datepicker', 'Datepicker'), 
        ('DateSelect', 'DateSelect'), 
        ('RadioSet', 'RadioSet'), 
    ]
    widget_xpath = models.CharField(max_length=255)
    widget_type = models.CharField(max_length=255, choices=WIDGET_TYPES)
    widget_url = models.URLField(max_length=255)
    user_session = models.ForeignKey(UserSession, on_delete=models.CASCADE, related_name='widget_logs')
    micro_measures = models.JSONField()

    def get_user_interaction_effort(self):
        micro_measures_normalized = prediction_models[self.widget_type].scaler.transform(  np.array(grabbers[self.widget_type].get_measures_for_prediction(self.micro_measures)).reshape(1,-1) )
        return prediction_models[self.widget_type].predict( micro_measures_normalized ) 




