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
// Adds Ben and his data
/**************************************************************/
function userData(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      users: '01'
    }
  )
  firebase.database().ref('users/01').set(
    {
      name: 'ben',
      age: '102',
      hair: 'yellow'
    }
  )
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
