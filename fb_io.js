/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/


/**************************************************************/
// fb_readError()
// Demonstrate a error in firebase
// This function is called if error in reading data
/**************************************************************/
function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
}

/**************************************************************/
// fb_readError()
// Demonstrate a listener read in firebase
// This function is called if listener called and does a console.log
/**************************************************************/
function fb_logDatabaseRead() {
    console.log("There was a change");
}

