# Data Models

## Users
| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| password | string | no  | no |
| email | string | yes | no |
| fav_businesses | list | no | yes |

The `user` entity contains the data about the user.

## Businesses
| Name | Type | Unique | Optional |
|-|-|-|-|
| business_id | string | yes | no |
| city | string | no | no |
| state | string | no | no |
| country | string | no | no |
| categories | list | no | no |
| rating | int | no | no |

The `businesses` entity contains the data about the specified businesses.

## Ratings
| Name | Type | Unique | Optional |
|-|-|-|-|
| business_id | yes | no | no |
| rating | int | no | no |
| user_id | int | no | yes |
The `ratings` entity contains the data about the ratings provided by the users on specific businesses
