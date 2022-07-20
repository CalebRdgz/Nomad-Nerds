import requests

import os

cities = ['Denver']
def businesses_request(categories=[], location="NYC", quantity=1):
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": "Bearer {}".format(os.environ['API_YELP_KEY'])}
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


def category_request(categories=[], quantity=2, cities=cities):
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": "Bearer {}".format(os.environ['API_YELP_KEY'])}
    data = []
    for city in cities:
        for offset in range(0, quantity * 50, 50):
            params = {
                "location": city,
                "limit": 50,
                "offset": offset,
                "sort_by": "rating",
                "categories": ",".join(categories),
            }
            res = requests.get(url, headers=headers, params=params)
            data += res.json()["businesses"]
    return data

def category_suggestions(text=''):
    url = 'https://api.yelp.com/v3/autocomplete'
    headers = {"Authorization": "Bearer {}".format(os.environ['API_YELP_KEY'])}
    params = {
        "text": text,
    }
    res =  requests.get(url, headers=headers, params=params)
    data = res.json()
    return data
