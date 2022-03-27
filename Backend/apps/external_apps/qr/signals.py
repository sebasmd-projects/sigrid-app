# Third party imports
# Import datetime
from datetime import date, datetime

TIME_FORMAT = f'{date.today().year}/{date.today().month}/{date.today().day}/{datetime.now().strftime("%H-%M-%S")}'


def logo_directory_path(instance, filename) -> str:
    """
    Directory path for the logo image
    """
    return f'filer_public/externalapps/logos/{TIME_FORMAT}-{filename}'


def qr_directory_path(instance, filename) -> str:
    """
    Directory path for the qr image
    """
    filename = instance.file_name
    return f'filer_public/externalapps/qrs/{TIME_FORMAT}-{filename}.png'
