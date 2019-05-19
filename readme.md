Hello and welcome to my Chat wall app!

This app allows you to sign up via local authentication and make posts to a wall

Click [here](https://forrestlonganecker-chat-wall.herokuapp.com/) if you would like to jump ahead and check out the deployed version

This is a Node.js app built with the Express framework. Tests are written with Jasmine.

---

1. make sure you have [npm](https://www.npmjs.com/get-npm) and [node](https://nodejs.org/en/download/) installed

2. To start this app navigate into the root directory:  
"$ cd path/to/chat-wall-app"  

and run:  
"$ npm start"  

The app should now be running at http://localhost:3000/

3. To run tests you will first need to install jasmine as a dev dependency, navigate to the root directory of the app:  
"$ cd path/to/chat-wall-app"  

and run:  
"$ npm install --save-dev jasmine" 

To run the tests stay in navigate to the same directory as above and run:  
"$ npm test"  

---

If I had more time to spend on this project I would like to make the validation errors pop up and have the ability to close them.

I would also implement more of the CRUD functionality for the posts and also put authorization for posts.

I would change the format of the styling and adjust the color scheme to make it more interesting to look at.

I have spent the bulk of the time laying out the groundwork so the major structure of the app is created. Now it will just be adding more functionality to make it feature rich.