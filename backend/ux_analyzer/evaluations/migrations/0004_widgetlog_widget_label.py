# Generated by Django 4.1.5 on 2023-01-18 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluations', '0003_usersession_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='widgetlog',
            name='widget_label',
            field=models.CharField(default='no-label', max_length=255),
            preserve_default=False,
        ),
    ]
