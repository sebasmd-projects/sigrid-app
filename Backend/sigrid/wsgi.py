import os
from django.core.wsgi import get_wsgi_application
import json

from django.core.exceptions import ImproperlyConfigured
with open("sensitive_data.json") as f: 
    value = json.loads(f.read())
     
def get_value(value_title, values=value): 
    try: 
        return values[value_title] 
    except: 
        msg = f"The name of {value_title} doesn't exists"
        raise ImproperlyConfigured(msg)
    
    
if get_value("ENVIRONMENT") == "local":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sigrid.settings.local')
    print('=====================================')
    print('     ____________   _____________')
    print('   //         666\ /          667\\\ ')
    print(' /|    SIGRID     |  ENVIRONMENT: |\ ')
    print('|||      ==       |     LOCAL     |||')
    print('|||   <^\()/^>    |     JUAN      |||')
    print('|||    \/  \/     |   SEBASTIAN   |||')
    print('|||     /  \      |    MORALES    |||')
    print('|||     `\'\'`      |               |||')
    print('|||_____________  |  _____________|||')
    print(' /_____/--------\\\_//--------\_____\ ')
    print('Si puedes imaginarlo, puedes programarlo')
    print('=====================================')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sigrid.settings.production')
    print('=====================================')
    print('     ____________   _____________')
    print('   //         666\ /          667\\\ ')
    print(' /|    SIGRID     |  ENVIRONMENT: |\ ')
    print('|||      ==       |   PRODUCTION  |||')
    print('|||   <^\()/^>    |     JUAN      |||')
    print('|||    \/  \/     |   SEBASTIAN   |||')
    print('|||     /  \      |    MORALES    |||')
    print('|||     `\'\'`      |               |||')
    print('|||_____________  |  _____________|||')
    print(' /_____/--------\\\_//--------\_____\ ')
    print('Si puedes imaginarlo, puedes programarlo')
    print('=====================================')
application = get_wsgi_application()