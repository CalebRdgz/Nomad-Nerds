from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

sample_data = {
    "id": "WavvLdfdP6g8aZTtbBQHTw",
    "alias": "gary-danko-san-francisco",
    "name": "Gary Danko",
    "image_url":
        "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
    "is_claimed": True,
    "is_closed": False,
    "url":
        "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative="
        "wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_"
        "business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
    "phone": "+14157492060",
    "display_phone": "(415) 749-2060",
    "review_count": 5296,
    "categories": [
        {"alias": "newamerican", "title": "American (New)"},
        {"alias": "french", "title": "French"},
        {"alias": "wine_bars", "title": "Wine Bars"},
    ],
    "rating": 4.5,
    "location": {
        "address1": "800 N Point St",
        "address2": "",
        "address3": "",
        "city": "San Francisco",
        "zip_code": "94109",
        "country": "US",
        "state": "CA",
        "display_address": ["800 N Point St", "San Francisco, CA 94109"],
        "cross_streets": "",
    },
    "coordinates": {"latitude": 37.80587, "longitude": -122.42058},
    "photos": [
        "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg",
    ],
    "price": "$$$$",
    "hours": [
        {
            "open": [
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 0
                },
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 1
                },
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 2
                },
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 3
                },
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 4
                },
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 5
                },
                {
                    "is_overnight": False,
                    "start": "1730",
                    "end": "2200",
                    "day": 6
                },
            ],
            "hours_type": "REGULAR",
            "is_open_now": False,
        }
    ],
    "transactions": [],
    "special_hours": [
        {
            "date": "2019-02-07",
            "is_closed": None,
            "start": "1600",
            "end": "2000",
            "is_overnight": False,
        }
    ],
}


def test_get_business_info(mocker):
    # ARRANGE
    mocker.patch("businesses.get_business", return_value=sample_data)
    # ACT
    response = client.get(
        "api-yelp/businesses/details?id=WavvLdfdP6g8aZTtbBQHTw"
    )
    d = response.json()

    # ASSERT
    expected = {
        "name": "Gary Danko",
        "id": "WavvLdfdP6g8aZTtbBQHTw",
        "image_url":
            "https://s3-media2.fl.yelpcdn.com/bphoto/"
            "CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "rating": 4.5,
        "price": "$$$$",
        "display_address": ["800 N Point St", "San Francisco, CA 94109"],
        "city": "San Francisco",
        "country": "US",
        "state": "CA",
    }
    assert response.status_code == 200
    assert d == expected

    # CLEAN UP
