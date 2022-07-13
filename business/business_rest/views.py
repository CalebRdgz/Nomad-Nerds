from django.shortcuts import render
from .acls import businesses_request
from common.json import ModelEncoder
from models import Business
from acls import businesses_request
from django.views.decorators.http import require_http_methods

# Create your views here.


class BusinessListEncoder(ModelEncoder):
    model = Business
    properties = [
        "business_id",
        "city",
        "state",
        "country",
        "categories",
        "rating",
    ]


@require_http_methods(
    [
        "GET",
    ]
)
def api_businesses(request):
    raw_data = businesses_request()
    print(raw_data)
    # Data manipulation for desired info
    # Create instances of Business
    # Return list of businesses
    return raw_data
