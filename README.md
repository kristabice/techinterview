# Instructions
1. Download the [git repo](https://github.com/kristabice/techinterview)
2. Once downloaded open the file in the terminal or your favorite IDE and run `yarn install`
3. After you have completed a yarn install then you can go ahead and run `nom run start`  this should start up the application on [localhost:3000](http://localhost:3000/)

## User View:
To see the user view for this application go ahead and select the user icon in the top left corner of the page. This should open a “login” modal.  Since we were not worrying about validation here I didn’t make this super fancy. So I have just set up a few default users to view. If you want to view other users you just need to add a test username and password to them.  For the users:
```
User 1:
  "username": "testUser1",
  "password": "test123"

User 2:
  "username": "testUser2",
  "password": "test123"

User 3:
  "username": "testUser3",
  "password": "test123"

```

And for the admin login you would login with 
```
  "username": "testAdmin",
  "password": "test123"

```

Once logged in you should be automatically redirected to the proper page. Now this is where I am unsure I did things right. I mostly visually built this page. However, I was not sure if you wanted all the functionality of this page as well. The search works for the product titles if you are a user. If you are an admin you can search by status, first name or last name. 

If you want more functionality on this page I am more than happy to add it. Again, I was just not fully sure if it was needed since it wasn’t outlined in the interview email.

My design resources and sketches can be found in the 'tech-interview/design' folder. Please let me know if there are any additional questions you have or anything else I can add to this. 

### Time Totals:

2 hours - Research and Design
* this involved going to other e-commerce websites and looking at how their order pages. 
	* As a result I noticed most of them had the following information - a way to contact either the seller or the user, order date and status, order number, order description (truncated if too long) , order title (this seemed to be truncated at about 50-60 characters on display screens), an image of the product, and a way to search the page

6 hours - Code 
* This includes the time it took me to setup a new react app, and environment.