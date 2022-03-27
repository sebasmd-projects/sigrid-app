import json
from django.core.exceptions import ImproperlyConfigured

from unipath import Path

BASE_DIR = Path(__file__).ancestor(3)

with open("sensitive_data.json") as f: 
    value = json.loads(f.read())
     
def get_value(value_title, values=value): 
    try: 
        return values[value_title] 
    except: 
        msg = f"The name of {value_title} doesn't exists"
        raise ImproperlyConfigured(msg)
    
def gettext(s):
    return s

SECRET_KEY = get_value('SECRET_KEY') 
ROOT_URLCONF = get_value('ROOT_URLCONF')
WSGI_APPLICATION = get_value('WSGI_APPLICATION') 
LANGUAGE_CODE = get_value('LANGUAGE_CODE') 
TIME_ZONE = get_value('TIME_ZONE') 
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
DJANGO_APPS = ( 
    'django.contrib.admin', 
    'django.contrib.auth', 
    'django.contrib.contenttypes', 
    'django.contrib.sessions', 
    'django.contrib.messages', 
    'django.contrib.staticfiles', 
) 
LOCAL_APPS = (
    # ADMIN APPS
    'apps.admin_page.charts',
    'apps.admin_page.dashboard',
    'apps.admin_page.reports',
    'apps.admin_page.system',
    
    # ECOMMERCE APPS
    'apps.ecommerce_page.cart',
    'apps.ecommerce_page.customers',
    'apps.ecommerce_page.discounts',
    'apps.ecommerce_page.orders',
    'apps.ecommerce_page.pricing',
    'apps.ecommerce_page.products',
    
    # LANDING PAGE APPS
    'apps.landing_page.about_project',
    'apps.landing_page.about_team',
    'apps.landing_page.contact',
    'apps.landing_page.documentation',
    'apps.landing_page.faq',
    'apps.landing_page.features',
    'apps.landing_page.home',
    'apps.landing_page.login',
    'apps.landing_page.support',
    
    # MACHINE LEARNING APPS
    'apps.ml_page.chat_bot',
    'apps.ml_page.machine_learning',
    'apps.ml_page.nlp',
    
    # EXTERNAL TESTS APPS
    'apps.external_apps.qr',
    'apps.external_apps.djReactUdemyEcommerce',
) 
THIRD_PARTY_APPS = (
    'rest_framework',
    'corsheaders',
    'adminsortable2',
    'ckeditor',
    'ckeditor_uploader',
    'filer',
    'django_filters',
    'mptt',
    'polymorphic',
    'easy_thumbnails',
    'import_export',
) 
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware', 
    'django.contrib.sessions.middleware.SessionMiddleware',   
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware', 
    'django.middleware.locale.LocaleMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware', 
    'django.contrib.messages.middleware.MessageMiddleware', 
    'django.middleware.clickjacking.XFrameOptionsMiddleware',  
]

CORS_ALLOWED_ORIGINS = get_value('CORS_ALLOWED_ORIGINS')
TEMPLATES = [ 
    { 
        'BACKEND': 'django.template.backends.django.DjangoTemplates', 
        'DIRS': [BASE_DIR.child('templates')], 
        'APP_DIRS': True, 
        'OPTIONS': { 
            'context_processors': [ 
                'django.contrib.auth.context_processors.auth',  
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.debug', 
                'django.template.context_processors.request', 
                'django.template.context_processors.i18n',
                'django.template.context_processors.csrf',
                'django.template.context_processors.media',
                
            ], 
        }, 
    }, 
] 
AUTH_PASSWORD_VALIDATORS = [ 
    { 
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', 
    }, 
    { 
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', 
    }, 
    { 
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', 
    }, 
    { 
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', 
    }, 
]
TIME_ZONE = 'America/Bogota'
DEFAULT_CHARSET = 'utf-8'
LANGUAGES = ( 
    ('es-co', gettext('Español Colombia')), 
    ('en', gettext('English')), 
)
LOCALE_PATHS = [
    BASE_DIR.child('locale'),
]
USE_I18N = True 
USE_L10N = True
USE_TZ = True
CKEDITOR_CONFIGS = { 
    # Configuración para el CKEDITOR 
    'default': { 
        'removePlugins': 'stylesheetparser', 
        'skin': 'moono', 
        'toolbar': 'full', 
        'toolbarCanCollapse': True, 
    }, 
} 
CKEDITOR_UPLOAD_PATH = 'media/filer_public/ckeditor/uploads' 
CKEDITOR_IMAGE_BACKEND = 'pillow'
GEOIP_PATH = BASE_DIR.child('geoip')