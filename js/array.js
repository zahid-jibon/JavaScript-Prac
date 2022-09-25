var age = [10, 12, 13, 15, 20]

console.log(age);

var zahid = age[4];

console.log("Zahid's age is:",zahid);

age[2] = 16;

console.log(age);

var find = age.indexOf(25);

console.log(find); 
// This value can not be find as it is not asssign so the ans is -1


console.log(age);

age.push(36);


age.push(69);

console.log(age);
console.log(age.length);

age.pop();
console.log(age);
console.log(age.length);

// Add & Remove items on Biggening


// Add on beg
age.unshift(7);

console.log(age);

age.unshift(3,5);

console.log(age);

// Remove from beg
age.shift();
console.log(age);

// Add & Remove items on Middle

// Add Middle
age.splice(3,0,11)
console.log(age);

// Remove Middle
age.splice(4,1)
console.log(age);
