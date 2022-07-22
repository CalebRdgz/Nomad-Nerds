## July 21, 2022
* Today, before lunch we had very limited time so we decided on a logo. After lunch, the team worked together on adding fastapi functions (get_business_list and get_business_info) and determining what each function that was previously written was doing. We then tried to determine how we would map through filtered categories and list relevant businesses, but are still struggling with figuring out how to do this. Later this evening, I worked on created business cards by just mapping through unfiltered business data provided by searching for a specific city, state just to get an idea of what that would look like. I decided to add more information than our group initially decided on because sometimes having more information about a business (like address and price range) can be nice. We'll have to re-address the listing of top categories and businesses based on those categories in the upcoming days.

## July 20, 2022
* This morning, I worked on getting the navbar to show only relevant links based on whether a user is logged in or not. I spent the rest of the morning and early afternoon initially trying to figure out how our user favorites page would work but realized I cannot do that until after we've created the activity categories and locations pages. When I realized this, I started to pair-program with Emma to work on functionality of the "city" search and list pages.


## July 19, 2022
* Our whole team worked together today on getting the user authorization to function. We went step-by-step through the cookbook and even then, spent the entire day debugging. We finally got the login and logout functionality to work and our sign up page is partially working (not getting errors at least). We realized a few things along the way. One main realization was that when using djwto, the login and logout pages are somewhat predefined, so it isn't necessary to create specific URL paths within the user app for login and logout. We also realized that we weren't consistent with what we were using as "User" model, which led to errors with user sign up. Hopefully now that we have authentication mostly debugged, we can solely focus on the functionality and appearance of the application.

## July 18, 2022
* This morning, I was at a doctor's appointment throughout our entire project time, so I unfortunately did not get to contribute to any work. 
* In the afternoon, I implemented a carousel of multiple images for our main page and styled it so the images fade and are sized accordingly. I also went back to the back-end user functionality and believe the login form is now functioning after rebuilding the docker containers and making migrations. Our sign up form is not currently functioning, however, so I'm trying to debug that.


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