from rest_framework import serializers
from ..models import LogoForQRGeneratorModel, URLQRGeneratorWithLogoModel


class LogoForQRGeneratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogoForQRGeneratorModel
        fields = (
            'id',
            'company_name',
            'logo_img',
            'created',
            'modified',
            
        )


class URLQRGeneratorWithLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = URLQRGeneratorWithLogoModel
        fields = (
            'id',
            'url_or_text',
            'file_name',
            'description',
            'qr_color',
            'back_color',
            'qr_code',
            'logo'
        )