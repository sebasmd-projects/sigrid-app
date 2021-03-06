import os
import sys
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

    
def main():
    """Run administrative tasks."""
    if get_value("ENVIRONMENT") == "local":
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sigrid.settings.local')
    else:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sigrid.settings.production')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
    
if __name__ == '__main__':
    main()