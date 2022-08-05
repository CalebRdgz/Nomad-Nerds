# APIS

## Get list of categories based on a location

* **Method**: 'GET'
* **Path**: /api-yelp/businesses/categories/

Input:

```json
{
    "location": string representing location,
    "quantity": integer representing quantity of API fetches
}
```


Output:

```json
{
    "categories": [
        [
            string representing category alias,
            string representing category title,
            integer representing category count
        ]
    ]
}
```


## Get list of cities based on category and list of cities

* **Method**: 'GET'
* **Path**: /api-yelp/businesses/categories/search/

Input:

```json
{
    "categories": string representing category,
    "quantity": integer representing quantity of API fetches,
    "cities": string representing location
}
```


Output

```json
{
    "cities": [
        [
            string representing city,
            integer representing count of businesses related to searched category
        ]
    ]
}
```

## Get a list of businesses based on a category and location

* **Method**: 'GET'
* **Path**: /api-yelp/businesses/list

Input:

```json
{
    "category": string representing category,
    "location": string representing location,
    "quantity": integer representing quantity of API fetches
}
```


Output

```json
[
    { 
    "id": str ,
    "alias": str,
    "name": str,
    "image_url": str,
    "is_closed": bool,
    "url": str,
    "review_count": int,
    "categories": [
      {
        "alias": str,
        "title": str
      }
    ],
    "rating": float,
    "coordinates": {
      "latitude": float,
      "longitude": float
    },
    "transactions": list,
    "price": str,
    "location": {
      "address1": str,
      "address2": str,
      "address3": str,
      "city": str,
      "zip_code": str,
      "country": str,
      "state": str,
      "display_address": [
        str,
        str,
        str
      ]
    },
    "phone": str,
    "display_phone": str,
    "distance": float
  },    
]
```

## Get Business info based on a business ID

* **Method**: 'GET'
* **Path**: /api-yelp/businesses/details

Input:

```json
{
    "business_id": str
}
```


Output

```json
{
  "name": str,
  "id": str,
  "image_url": str,
  "rating": float,
  "price": str,
  "display_address": [
    str,
    str,
    str
  ],
  "state": str,
  "city": str,
  "country": str
}
```

## GET a list of user favorite 

* **Method**: 'GET'
* **Path**: /user/favorites/
* **Authorization**: required 
  
Output:

```json
{
    [strings representing business ids]
}
```

## Post user favorite

* **Method**: 'POST'
* **Path**: /user/favorites/
* **Authorization**: required 
  
Input:

```json
{
    string representing business id
}
```
Output:

```json
{
    "message": str
}
```

## Delete user favorite

* **Method**: 'DELETE'
* **Path**: /user/favorites/
* **Authorization**: required 
  
Input:

```json
{
    string representing business id
}
```
Output:

```json
{
    "message": str
}
```

## Create a user 

* **Method**: 'POST'
* **Path**: /user/signup/
  
Input:
```json
{
    "username": str,
    "password": str,
    "email": email,
    "first_name": str,
    "last_name": str
}
```

Output:
```json
{
    "username": user instance
}
```


