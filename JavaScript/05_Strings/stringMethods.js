


/*


String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
See Also:
String Search Methods
String Templates
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()




*/

let Name = "Ravindra singh";

// console.log(Name.length);
// console.log(Name.charAt(6));
// console.log(Name.charCodeAt(6));
// console.log(Name.at(6));

/*
The at() method is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

Now you can use myString.at(-2) instead of charAt(myString.length-2)

*/

// console.log(Name.at(-3));
// console.log(Name.charAt(-9));

// console.log(Name.slice(3,10));
console.log(Name.substring(3,6));



