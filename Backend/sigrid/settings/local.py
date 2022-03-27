from .base import *

DEBUG = True

BASE_URL = get_value('BASE_URL')

ALLOWED_HOSTS = get_value('ALLOWED_HOSTS')['local']

DATABASES = { 
   'default': {
       'CONN_MAX_AGE': get_value('DB_CONN_MAX_AGE'),
       'ENGINE': 'django.db.backends.postgresql_psycopg2', 
       'NAME': 'sigrid_db', 
       'USER': 'sigrid_db_user', 
       'PASSWORD': 'sigrid_db_password', 
       'HOST': 'localhost',
       'PORT': '5432',
   }
}

STATIC_URL = '/static/' 
STATICFILES_DIRS = [BASE_DIR.child('static')]
MEDIA_URL = '/media/' 
MEDIA_ROOT = BASE_DIR.child('media')


EMAIL_USE_SSL = True
EMAIL_BACKEND = 'django_smtp_ssl.SSLEmailBackend' 
EMAIL_HOST = 'mail.sebasmd.com' 
EMAIL_PORT = 465 
EMAIL_HOST_USER = 'info@sebasmd.com' 
EMAIL_HOST_PASSWORD = '+Lq5Jzm&gl' 
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER