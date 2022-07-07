# Data Models

## Users
| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| email | string | yes | no |

The `user` entity contains the data about the user.

## Locations
| Name | Type | Unique | Optional |
|-|-|-|-|
| id | string | yes | no |
| city | string | no | no |
| state | string | no | no |
| activities | string | no | no |

The `locations` entity contains the data about the specified location.

## Activities
| Name | Type | Unique | Optional |
|-|-|-|-|

The `activities` entity contains the data about the activities available
in each specific location.