from keys import YELP_API_KEY
import requests


def businesses_request(categories=[], location="NYC", quantity=1):
    print("categories: ", categories, "location: ", location, "quantity: ", quantity)
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": "Bearer {}".format(YELP_API_KEY)}
    data = []
    print(quantity)
    for offset in range(0, quantity * 50, 50):
        params = {
            "location": location,
            "limit": 50,
            "offset": offset,
            "sort_by": "rating",
            "categories": ",".join(categories),
        }
        res = requests.get(url, headers=headers, params=params)
        data += res.json()["businesses"]
    return data
