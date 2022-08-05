# Data Models

## Users
| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| password | string | no  | no |
| email | string | yes | no |
| first name | string | no | no |
| last name | string | no  | no |

The `user` entity contains the data about the user.

## Favorite
| Name | Type | Unique | Optional |
|-|-|-|-|
| user | string | no | no |
| business_id | string | no | no |


The `favorite` entity contains the data about users' favorite businesses.  Although user and business_id are not unique individually, they are unique together.


