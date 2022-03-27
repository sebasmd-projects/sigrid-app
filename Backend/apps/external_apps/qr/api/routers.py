from rest_framework.routers import DefaultRouter
#
from .viewsets import LogoForQRGeneratorViewSet, URLQRGeneratorWithLogoViewSet

router = DefaultRouter()

router.register(r'company-logos', LogoForQRGeneratorViewSet, basename="company-logos")
router.register(r'qrs-generated', URLQRGeneratorWithLogoViewSet, basename="qrs")

urlpatterns = router.urls