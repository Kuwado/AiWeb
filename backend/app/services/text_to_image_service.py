from runware import Runware, IImageInference
from PIL import Image
import requests
from io import BytesIO

RUNWARE_API_KEY = "uPOtjYVHM0iUD1AqWXClk6qBAszDUb4D"


async def text_to_image(text, width=512, height=512):
    try:
        # Khởi tạo Runware với API Key
        runware = Runware(api_key=RUNWARE_API_KEY)
        await runware.connect()

        # Tạo yêu cầu inference hình ảnh
        request_image = IImageInference(
            positivePrompt=text,
            model="civitai:36520@76907",
            numberResults=1,
            height=height,
            width=width,
        )

        images = await runware.imageInference(requestImage=request_image)

        if not images:
            print("Không có hình ảnh nào được tạo.")
            return None

        image = images[0]
        print(f"Image URL: {image.imageURL}")
        return image.imageURL

    except requests.RequestException as e:
        print(f"Lỗi khi tải ảnh từ URL: {e}")
        return None
    except Exception as e:
        print(f"Có lỗi xảy ra: {e}")
        return None
