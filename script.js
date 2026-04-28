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
      name: 'jack',
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

function simpleRead() {
  console.log("Reading message");
  //Reading from '' then doing function displayRead
  firebase.database().ref('/users/02/name').once('value', displayRead);
  console.log("Leaving simpleRead");
}

function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val());
  HTML_OUTPUT.innerHTML = snapshot.val();
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
