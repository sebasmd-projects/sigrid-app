# Third party imports
# Import io to convert the image to bytes
from io import BytesIO
# Import to use created and modified fields
from model_utils.models import TimeStampedModel
# Import CKEDITOR to use the richtext editor
from ckeditor.fields import RichTextField
# Import to translate the model fields

# Django imports
from django.utils.translation import gettext_lazy as _
# Import settings to get the path to the media folder
from django.conf import settings
# Import to use File
from django.core.files import File
# Import from Django to use the ORM
from django.db import models

# Local imports
# Import my custom functions
from .functions import generate_qr
# Import my custom signals
from .signals import (
    logo_directory_path, 
    qr_directory_path
)

class LogoForQRGeneratorModel(TimeStampedModel):
    """ Save the company Logo in DB """
    company_name = models.CharField(_('Company Name'), max_length=100)
    logo_img = models.ImageField(
        _("Logo"), upload_to=logo_directory_path
    )
    default_order = models.PositiveIntegerField(
        blank=False, null=False, default=0
    )

    class Meta:
        verbose_name = _('Company Logo')
        verbose_name_plural = _('Companys Logos')
        db_table = "external_app_company_logo_for_qr"
        ordering = ['default_order']

    def __str__(self) -> str:
        return f"{self.id} - {self.company_name}"


class URLQRGeneratorWithLogoModel(TimeStampedModel):
    """ Save a QR Code with a logo in DB """

    url_or_text = models.CharField(_("URL"), max_length=100)
    file_name = models.SlugField(_("File Name"), max_length=100, default="qr")
    description = RichTextField(_("Description"), blank=True)
    qr_color = models.CharField(_("QR Color"), max_length=7, default="black")
    back_color = models.CharField(
        _("Back Color"), max_length=7, default="white")
    qr_code = models.ImageField(
        _("QR Image"), blank=True, null=True, upload_to=qr_directory_path
    )
    logo = models.ForeignKey(
        LogoForQRGeneratorModel,
        on_delete=models.CASCADE
    )
    default_order = models.PositiveIntegerField(
        blank=False, null=False, default=0
    )

    def save(self, *args, **kwargs):
        """ Generate and save the QR """

        byte_io = BytesIO()
        generate_qr(
            settings.BASE_URL, self.logo.logo_img.url,
            self.url_or_text, self.qr_code,
            self.qr_color, self.back_color
        ).save(byte_io, 'png')

        self.qr_code.save(qr_directory_path, File(byte_io), save=False)

        super().save(*args, **kwargs)

    class Meta:
        db_table = "external_app_qr_with_logo"
        verbose_name = _("QR with Logo")
        verbose_name_plural = _("QRs with Logo")
        ordering = ['default_order']

    def __str__(self) -> str:
        return f" {self.id} - {self.file_name} - {self.url_or_text}"
