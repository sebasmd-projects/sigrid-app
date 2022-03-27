from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from import_export import resources
from import_export.admin import ImportExportActionModelAdmin
from . import models


class QRs_Generated(resources.ModelResource):
    
    class Meta:
        model = models.URLQRGeneratorWithLogoModel
        fields = ('id', 'file_name', 'url_or_text', 'qr_code', 'created', 'modified')
        export_order = fields
        
class Company_Logos(resources.ModelResource):
    class Meta:
        model = models.LogoForQRGeneratorModel
        fields = ('id', 'company_name', 'logo_img', 'created', 'modified')
        export_order = fields

@admin.register(models.URLQRGeneratorWithLogoModel)
class URLQRGeneratorModelAdmin(SortableAdminMixin, ImportExportActionModelAdmin):
    resource_class = QRs_Generated
    list_display = ('id', 'file_name', 'url_or_text', 'created', 'modified')
    list_display_links = ('id', 'file_name', 'url_or_text')
    search_fields = ('id', 'file_name', 'url_or_text')
    list_filter = ('file_name', 'url_or_text')
    readonly_fields = ('created', 'modified', 'qr_code')
    
@admin.register(models.LogoForQRGeneratorModel)
class LogoForQRGeneratorModelAdmin(SortableAdminMixin, ImportExportActionModelAdmin):
    resource_class = Company_Logos
    list_display = ('id', 'company_name')
    list_display_links = ('id', 'company_name')
    search_fields = ('id', 'company_name')
    list_filter = ('company_name',)
    readonly_fields = ('created', 'modified')