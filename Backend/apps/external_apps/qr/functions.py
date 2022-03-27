# Third party imports
# Import to use the QR code generator from python
import qrcode
# Import request to get the image from the URL
import requests
# Import to use and generate images
from PIL import Image
# Import io to convert the image to bytes
from io import BytesIO


def generate_qr(current_url, logo_url, url, qr_code, qr_color, qr_backcolor) -> Image:
    """
    1. Get current logo url
    2. Adjust logo size
    3. Set the higest integrity
    4. Add the url to the QR code
    5. Generate the QR code
    6. Change the QR color and back color
    7. Generate the QR code with the logo
    8. Return the QR code with the logo
    """
    basewidth = 100
    

    # Get LOGO url
    response = requests.get(f'{current_url}{logo_url}')
    # Convert to BytesIO
    logo_img = Image.open(BytesIO(response.content))
    #logo_img.show()

    # Adjust img size
    width_percent = (basewidth/float(logo_img.size[0]))
    hight_size = int((float(logo_img.size[1])*float(width_percent)))
    logo_img = logo_img.resize((basewidth, hight_size), Image.ANTIALIAS)

    # Set the highest integrity or redundancy
    qr_code = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H
    )

    # Add data to QR code
    qr_code.add_data(url)

    # Generate QR code
    qr_code.make(fit=True)

    # Make QR with colors
    qr_img = qr_code.make_image(
        fill_color=qr_color, back_color=qr_backcolor
    ).convert('RGB')

    # Set size and position for logo and qr
    pos = (
        (qr_img.size[0] - logo_img.size[0]) // 2,
        (qr_img.size[1] - logo_img.size[1]) // 2,
    )

    #qr_img.show()
    qr_img.paste(logo_img, pos)
        
    return qr_img