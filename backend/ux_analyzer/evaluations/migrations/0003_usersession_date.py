# Generated by Django 4.1.5 on 2023-01-12 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluations', '0002_usersession_session_id_usersession_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='usersession',
            name='date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
