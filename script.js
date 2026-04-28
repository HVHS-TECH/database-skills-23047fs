/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
let specialName = someone;

function simpleWrite(){
  console.log("Running simpleWrite()");
  //Creating data from '/' (roots) then in 'users: 01...' adding data
  firebase.database().ref('/users/01').set(
    {
      name: 'ben',
      age: 102,
      hair: 'yellow'
    }
  );
  firebase.database().ref('/users/02').set(
    {
      name: specialName,
      age: 4,
      hair: 'null'
    }
  );
  firebase.database().ref('/users/03').set(
    {
      name: 'jo',
      age: 52,
      hair: 'black'
    }
  );
}

/**************************************************************/
// simpleRead()
// Demonstrate a minimal read to firebase
// This function reads a message
/**************************************************************/
function simpleRead() {
  console.log("Reading message");
  //Reading from '' then doing function displayRead
  firebase.database().ref('/users/02/name').once('value', displayRead, fb_readError);
  console.log("Leaving simpleRead");
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
    console.log("Running displayRead(), the name of 02 is: " + snapshot.val());
    HTML_OUTPUT.innerHTML = snapshot.val();
  };
}

/**************************************************************/
// fb_readListener()
// Demonstrate a listener to firebase
// This function triggers when your database changes
/**************************************************************/
function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/users/02/name').on('value', fb_logDatabaseRead, fb_readError);
}


/**************************************************************/
// goodbyeWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Goodbye World"
/**************************************************************/
function goodbyeWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Goodbye World!'
    }
  )
}
