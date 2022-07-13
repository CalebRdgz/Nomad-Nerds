import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "user.settings")
django.setup()


def get_autos():
    # response = requests.get("http://business:8000/api/businesses/")
    # content = json.loads(response.content)
    # for automobile in content['automobiles']:
    #     AutoVO.objects.update_or_create(
    #         vin=automobile["vin"]
    #     )
    pass


def poll():
    while True:
        print("Service poller polling for data")
        try:
            get_autos()
            pass
        except Exception as e:
            print("except error", e, file=sys.stderr)

        time.sleep(5)


if __name__ == "__main__":
    poll()
