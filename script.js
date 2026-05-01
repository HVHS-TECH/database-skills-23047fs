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
    a: {
      name: 'ben',
      score: 102
    },
    b: {
      name: 'james',
      score: 4
    },
    c: {
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
  firebase.database().ref('/users/b/score').once('value', displayRead, fb_readError);
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
    console.log("Running displayRead(), the score of b is: " + snapshot.val());
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
  firebase.database().ref('/users/b/score').set(1000);
  console.log("Leaving simpleChange()");
}

/**************************************************************/
// simpleAdd()
// Demonstrate a minimal add to firebase
// This function adds user 4
/**************************************************************/
function simpleAdd() {
  console.log("Running simpleChange()");
  firebase.database().ref('/users/d').set( 
    {
      name: 'jkae',
      score: 12
    }
  );  
  //Add one to the total of users
  numberOfUsers = numberOfUsers + 1;
  console.log("Leaving simpleChange()");
}

/**************************************************************/
// readListener()
// Demonstrate a listener to firebase
// This function triggers when your database changes
/**************************************************************/
function readListener() {
  console.log("Reading readListener()");
  firebase.database().ref('/users/b/score').on('value', displayRead, fb_readError);
  console.log("Leaving Listener()");
}

/**************************************************************/
// readScores()
// Demonstrate a complex read to firebase
// This function reads the scores of users
/**************************************************************/
function readScores() {
  console.log("Reading readScores()");
  firebase.database().ref('/users').once('value', displayScoreRead, fb_readError);
  console.log("Leaving readScores()");
}
/**************************************************************/
// displayScoreRead()
// Demonstrate a read to firebase
// This function reads the scores of users then tells user in console
/**************************************************************/
  var dbData
  function displayScoreRead(snapshot) {
 dbData= snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  } else {
    console.log(dbData)
    let names = Object.keys(dbData);
    for (i = 0; i < names.length; i++) {
      let key = names[i];
      let score = dbData[key].score;
      console.log(i + " " + key + " " + score);
    };
    HTML_OUTPUT.innerHTML = dbData;
  };
}