## July 15, 2022
* We spent a significant portion of today trying to get the user authentication functionality working, with initially using "session" and then switching to "jwt" and we still haven't gotten it to fully work, which has been frustrating. We created the signup and login forms using the both "session" and then "jwt," which we can hopefully get to work on Monday. I added a footer and then played around with some formatting of the main page and forms to improve the appearance of the site, but it still needs a lot of work. We discussed using a carousel of 3 location photos as a wrapper/background image for the main page.


## July 14, 2022
* Our group decided to change from MongoDB to PostgreSQL for databases in order to have a more seamless transition from Django to React. This involved changing a significant amount of code in our docker-compose.yaml file and we then rebuilt. Prior to that, Emma, Caleb, and I were stuck on getting the user model to function with Emma sharing her screen. We ended up having to revert back to a previous git commit in order to reverse changes that were made. In the afternoon, we worked on once again trying to get the User info to function properly. I realized after class that we may have an issue with our user/favorites url path since the favorites are directly dependent on specific users and that a user is already logged in, so we'll have to address that tomorrow.


## July 13, 2022
* Our group worked together in the morning on finding an API to autocomplete when
we type in our main page's search bar - with Arthur sharing his screen
* In the afternoon, I worked on creating some front-end files (App.js, Nav.js, MainPage.js, and SignupForm.js). I ran into a little hiccup when I installed react-router to the root directory and realized (with the SEIR's help) that node_modules needed to be in ghi directory but also that our group needed to add node_modules to our .gitignore file in order to avoid pushing mass amounts of information to git after any changes are made to node_modules. After that, I was having trouble pulling information from our users' favorites, which resulted in a 500 error and I still need to figure that out. I ended the day by creating a basic sign-up form for us to work off of in the upcoming days.

## July 12, 2022 
* Our group worked together with Arthur screen sharing
* We realized that we didn't actually need any models besides Favorite and User and decided that we most likely won't need the Business microservice since we can pull all business, location, and category data from the Yelp API instead
* We worked on creating FastAPI routes and testing them out using the Yelp API
* We still need to figure out how to sort the data that we get back regarding categories and count since we're currently returning an unsorted list and we're hoping to rank the categories by count