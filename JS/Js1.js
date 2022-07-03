/* Call Example. 
1. "this" always refers to an object
2. Call invokes the function and allows you to pass in arguments one by one.
3. Also Call method allows us to borrow the functions and print them (as shown)
4. It basiclly calls that particulr function to print it.

Apply method takes an Array as an for fn clling
*/

let name1 = {
  firstname: "Ramesh",
  lastname: "pandey",
};
let printfullname = function (hometown, state) {
  console.log( this.firstname + " " + this.lastname + " " + hometown + " " + state );
};

let name2 = {
  firstname: "Suresh",
  lastname: "desai",
};

// printfullname.call(name1, "Mumbai", "Maharashtra" );
printfullname.call(name2, "Pune", "Maharashtra" );      //**Call method */

printfullname.apply(name2, ["Mumbai", "Maharashtra"]) //**apply method */

let fullName = printfullname.bind(name2, "Bangalore", "Karnataka")
// console.log(fullName)
fullName()
// console.log(fullName)

//** What is the difference between readFile and readFileSync? **/
/* readFileSync() is synchronous and blocks execution until finished. These return their 
   results as return values. readFile() are asynchronous and return immediately while they function in the background

    fs.readFile takes a call back which calls response.send as you have shown - good. If you simply 
    replace that with fs.readFileSync, you need to be aware it does not take a callback so your callback 
    which calls response.send will never get called and therefore the response will never end and it will timeout.*/


//** 3. What does process in node.js mean? */
/*  The process object in Node.js is a global object that can be accessed inside any module without requiring it. 
    There are very few global objects or properties provided in Node.js and process is one of them. 
    It is an essential component in the Node.js ecosystem as it provides various information sets 
    about the runtime of a program.  */


//** 4. Explain what node.js is? */
/* 1. Node.js (Node) is an open source development platform for executing JavaScript code server-side. 
   2. Node is useful for developing applications that require a persistent connection from the browser to the server and
     is often used for real-time applications such as chat, news feeds and web push notifications.
   3. Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time.
   4. Node.js applications are event-based and run asynchronously. Code built on the Node platform does not follow 
     the traditional model of receive, process, send, wait, receive. Instead, Node processes incoming requests 
     in a constant event stack and sends small requests one after the other without waiting for responses. */


//** 5. What is the difference of JS from browser to JS on node.js   */
/* 1. Unlike the browser where Javascript is sandboxed for your safety, node. js has full access to the system like 
     any other native application. This means you can read and write directly to/from the file system, 
     have unrestricted access to the network, can execute software and more.    */


//** 8. What is shallow equal? */
/*  A function for performing a shallow comparison between two objects or arrays. 
    Two values have shallow equality when all of their members are strictly equal to the corresponding member 
    of the other.   
    During shallow equality check of objects you get the list of properties (using Object.keys()) of both objects, 
    then check the properties' values for equality.*/
    function shallowEqual(object1, object2) {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let key of keys1) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
      return true;
    }

//** 7. Write a program to check two objects are equal ( deep equal )  */
function checkObjEqual(obj1,obj2){
    for(let key in obj1){
      if(!(key in obj2 )) return false;
      if(obj1[key]!==obj2[key]) return false;
    }
    return true;
}

console.log(checkObjEqual({maroon:'red',purple :'white'},{purple :'white',maroon:'red'}))  // -> shld return true

  
