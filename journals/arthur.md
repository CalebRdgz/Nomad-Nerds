## July 19th, 2022

* Today the group and I all walked through the authorization feature of the app. After following Curtis's cookbook and hours of troubleshooting with the instructors and seirs, we have finally made some notable progress.

## July 14, 2022

* Today I worked on creating a search bar which auto completes with suggestions for city locations.

* In order to do this, I first had to find a database which stores city information. I found a free downloadable CSV file of 40k locations. I then converted this file to json and moved it into our GHI folder.

* Now that I have the data, I found a program which implements the auto-complete/suggest functionality for a search bar. This program requires React to be 17.x, whereas wwe are using 18.2.0, so I had to add a line to our run.sh folder to install this program without its peer-dependencies so that no errors are raised.


## July 13, 2022

* Today I worked on getting the required data from the Yelp API

* The team and I created the functionality for pulling data from the yelp api. I was screen sharing and coding with the rest of the team helping me determine what to do.

* Later in the evening I created the third method required to get the needed information from the yelp API. I still don't know the more efficient way to implement it, because currently each call takes about 30 seconds to load and makes ~200 calls to the API, eating into our 5000 daily limit. 

* Even later in the evening, I built another api-yelp method which, given text, will return a list of category suggestions. This will be implemented in our front-end search bar.




