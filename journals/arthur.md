## July 13, 2022

Today I worked on:

* Getting the required data from the Yelp API

The team and I created the functionality for pulling data from the yelp api. I was screen sharing and coding with the rest of the team helping me determine what to do.

Later in the evening I created the third method required to get the needed information from the yelp API. I still don't know the more efficient way to implement it, because currently each call takes about 30 seconds to load and makes ~200 calls to the API, eating into our 5000 daily limit. 

Even later in the evening, I built another api-yelp method which, given text, will return a list of category suggestions. This will be implemented in our front-end search bar.