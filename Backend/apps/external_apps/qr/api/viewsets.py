from rest_framework.viewsets import ModelViewSet
#
from ..models import LogoForQRGeneratorModel, URLQRGeneratorWithLogoModel
#
from .serializers import LogoForQRGeneratorSerializer, URLQRGeneratorWithLogoSerializer


class LogoForQRGeneratorViewSet(ModelViewSet):
    queryset = LogoForQRGeneratorModel.objects.all()
    serializer_class = LogoForQRGeneratorSerializer
    
class URLQRGeneratorWithLogoViewSet(ModelViewSet):
    serializer_class = URLQRGeneratorWithLogoSerializer
    queryset = URLQRGeneratorWithLogoModel.objects.all()
    