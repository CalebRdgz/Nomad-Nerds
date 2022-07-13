from fastapi import APIRouter, Depends
from pydantic import BaseModel
import psycopg
import os
import bson
import pymongo
from acls import businesses_request

dbhost = os.environ["MONGOHOST"]
dbname = os.environ["MONGODATABASE"]
dbuser = os.environ["MONGOUSER"]
dbpass = os.environ["MONGOPASSWORD"]
mongo_str = f"mongodb://{dbuser}:{dbpass}@{dbhost}"

yelp_router = APIRouter()


class BusinessOut(BaseModel):
    business_id: int
    city: str
    state: str
    country: str
    categories: list
    rating: float


class BusinessesOut(BaseModel):
    businesses: list[BusinessOut]


@yelp_router.get("/api-yelp/businesses/")
def get_businesses(categories: list, quantity: int = 2):
    raw_data = businesses_request(categories, quantity=quantity)
    return {"count": len(raw_data), "businesses": raw_data}


@yelp_router.get("/api-yelp/businesses/categories/")
def get_categories(location: str, quantity: int = 10):
    raw_data = businesses_request(location=location, quantity=quantity)
    categories = {}
    cat_list = []
    for business in raw_data:
        for cat in business["categories"]:
            if cat["alias"] not in categories:
                categories[cat["alias"]] = 0
            categories[cat["alias"]] += 1
    for key, value in categories.items():
        cat_list.append((key, value))
    sorted(cat_list, key=lambda x: x[1], reverse=True)

    return {"count": len(categories), "categories": cat_list}
