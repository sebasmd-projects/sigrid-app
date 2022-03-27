from .base import *

DEBUG = True

ALLOWED_HOSTS = get_value('ALLOWED_HOSTS')['production']

DATABASES = { 
   'default': {
       'CONN_MAX_AGE': get_value('DB_CONN_MAX_AGE'),
       'ENGINE': '', 
       'NAME': '', 
       'USER': '', 
       'PASSWORD': '', 
       'HOST': '', 
       'PORT': '',
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