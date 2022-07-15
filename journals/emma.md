## July 14, 2022
Today we worked on:
* Setting up signup in the backend.  We tried to set up a custom user model using AbstractUser in Django.  However, we had a hard time making migrations.  We reverted back to the Django generic user model after realizing that it has all the functionalities that we need.  We created a signup.html template that can be accessed on localhost:8001 (Django port).  Mary created signup.js using React yesterday.  I'm still searching for ways to integrate Django and React authentication while keeping it secure.
* We decided to go with postgres for databases after talking with SEIR who advised that postgres integrates well with Django.  She showed me how to access pgadmin, so that I can see schema and tables of the models.      

## July 13, 2022
Today we worked on:
* Having autocomplete to work in the search bar to show list of cities while Arthur was sharing his screen.  
* I spent the afternoon researching on how to work with Django, React, and JWT for the authentication.  Although I haven't accomplished much on authentication, I learned that session and token can be used for authentication.  When client sends Http post to login with credential, server validates credentials.  If correct, it sends the http response with session cookie.  Then client authenticates HTTP request with session cookie to server, then server validates session ID from the cookie against session in memory.  Then HTTP response with 200 status is sent to client from server.  



