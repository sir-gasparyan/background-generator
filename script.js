let database = [

   {
	  username: "Andrei",
	  password: "supersecret"
   }
];

let newsFeed = [
    {
    	username: "Bobby",
    	timeline: "So tored of all that learning"
    },

    {
    	username: "Sally",
    	timeline: "JS is sooo coool!"
    }
];

let userNamePrompt = prompt("What's your username");
let passwordPrompt = prompt("What'syour password");

function signIn(user,pass) {
     if (user === database[0].username && 
        pass === database[0].password) {
        console.log (newsFeed);
     } else {
        alert ("Wrong username and password");
     }
};

signIn(userNamePrompt, passwordPrompt);