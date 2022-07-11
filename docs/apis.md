# APIS

## Get business Information

* **Method**: 'GET'
* **Path**: /api/business

Input:

```json
{
    "business_id": int,
    "categories": list,
    "location": str
}
```


Output

```json
{
    "business_id": int,
    "categories": list,
    "rating": int,
    "location": str,
    "image_url": str
}
```

Input for a business can be any of the three shown above, depending on the need. For example, if you are looking for all businesses in city which match certain categories, you would need 'categories' and 'location'. However, if you were just trying to find the review/rating for a business, you would only need its business_id. The Output will be all information pertinent to our application from the API, which is listed above.

## Create a Rating

* **Method**: 'POST'
* **Path**: /api/business/rating

Input:

```json
{
    "business_id": int,
    "rating": int,
    "user_id": int
}
```


Output

```json
{
    "business_id": int,
    "rating": int,
    "user_id": int
}
```

Creating a rating for a business would require the. business ID and the new rating. This rating would be averaged with the other internal ratings for specific business and returned along with the business ID.

## Create a User

* **Method**: 'POST'
* **Path**: /api/user

Input:

```json
{
    "username": str,
    "password": str,
    "email": str
}
```


Output

```json
{ 
    "message": "You have successfully created your account"
}
```

Creating a new user will require a username, password, and email. This information will be stored in the database and a success message will be returned.

## Add a favorite business

* **Method**: 'POST'
* **Path**: /api/user/user_id

Input:

```json
{
    "business_id": int
}
```


Output

```json
{ 
    "message": "You have added {buisness name} to you favorites"
}
```

Adding a business to a users list of favorites will requires the user's id and the business_id. Will return a 'success' message.
