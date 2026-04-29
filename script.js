/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
//Variables
/**************************************************************/
//Users: names and scores
let userTable = {
  users: {
    1: {
      name: 'ben',
      score: 102
    },
    2: {
      name: 'james',
      score: 4
    },
    3: {
      name: 'jo',
      score: 52
    }
  }
};

/**************************************************************/
// simpleWrite()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the userTable
// 
// The ref('/') part tells the operation to write to the base level of the database "/"
/**************************************************************/
function simpleWrite(){
  console.log("Running simpleWrite()");
  firebase.database().ref('/').set(userTable);
  console.log("Leaving simpleWrite()");
}

/**************************************************************/
// simpleSafeRead()
// Demonstrate a minimal read to firebase
// This function reads a message
/**************************************************************/
function simpleSafeRead() {
  console.log("Reading simpleSafeRead()");
  //Reading from '/users/2/score' then doing function displayRead
  firebase.database().ref('/users/2/score').once('value', displayRead, fb_readError);
  console.log("Leaving simpleSafeRead()");
}

/**************************************************************/
// displayRead()
// Demonstrate a minimal read to firebase
// This function reads a message then tells user in console
/**************************************************************/
function displayRead(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  } else {
    console.log("Running displayRead(), the score of 2 is: " + snapshot.val());
    HTML_OUTPUT.innerHTML = snapshot.val();
  };
}

/**************************************************************/
// simpleChange()
// Demonstrate a minimal change to firebase
// This function changes the name of user 2
/**************************************************************/
function simpleChange() {
  console.log("Running simpleChange()");
  firebase.database().ref('/users/2/score').set(1000);
  console.log("Leaving simpleChange()");
}

/**************************************************************/
// simpleAdd()
// Demonstrate a minimal add to firebase
// This function adds user 4
/**************************************************************/
function simpleAdd() {
  console.log("Running simpleChange()");
  firebase.database().ref('/users/4').set( 
    {
      name: 'jkae',
      score: 12
    }
  );  
  console.log("Leaving simpleChange()");
}

/**************************************************************/
// readListener()
// Demonstrate a listener to firebase
// This function triggers when your database changes
/**************************************************************/
function readListener() {
  console.log("Reading readListener()");
  firebase.database().ref('/users/2/score').on('value', displayRead);
  console.log("Leaving Listener()");
}

/**************************************************************/
// readScores()
// Demonstrate a complex read to firebase
// This function reads the scores of users
/**************************************************************/
function readScores() {
  console.log("Reading readScores()");
  firebase.database().ref('/users').once('value', displayRead, fb_readError);
  console.log("Leaving readScores()");
}