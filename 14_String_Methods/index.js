

let name ="           HarrH      ";
console.log(name);

// name="Harry\'"; // --> \' escape sequance charter is treat as single charater
console.log(name.length);

// UpperCase
console.log(name.toUpperCase());

// LowerCase
console.log(name.toLowerCase());

// Slice -->cut string
console.log(name.slice(3,2));
// console.log(name.slice(3));

// replace method
console.log(name.replace('H','v').toUpperCase());

// concatination
console.log(name.concat("HELLO"));

//trim string
console.log(name.trim())