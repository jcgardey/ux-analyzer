from django.db import models
from .micro_measures_grabbers import grabbers

from prediction_models.train_models import prediction_models
import numpy as np

class UserSession(models.Model):
    
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

