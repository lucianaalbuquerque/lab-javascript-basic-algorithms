// Iteration 1: Names and Input
let hacker1 = 'Victoria'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Luciana'
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver  ${hacker1.length} has the longest name, it has characters`);
  } else if ( hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
//3.1 
let driverName = ''
for (letter of hacker1) {
  driverName += letter.toUpperCase() + " "
}

//3.2
let navigatorName = ""
for (i = hacker2.length -1; i >= 0; i-- ) {
  navigatorName += hacker2[i];
}

//3.3
if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.");
    } else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker1.localeCompare(hacker2)=== -1) {
    console.log ("What?! You both have the same name?")
  };

//BONUS 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut congue tellus. Aliquam lectus turpis, malesuada vel consequat vitae, condimentum ut neque. Sed ultricies turpis nec ante vulputate bibendum. Mauris vehicula, metus id condimentum tristique, leo nulla feugiat lacus, nec bibendum tortor massa vel purus. Nullam bibendum nec ipsum pretium tincidunt. Nam et volutpat lacus, a luctus orci. Nam ornare volutpat nunc, sed pretium turpis rutrum eu. Mauris a lobortis mauris. Integer erat orci, commodo eget elit in, varius luctus lectus. Ut quis ullamcorper dui. Vivamus eget mi a quam suscipit dapibus vitae sed odio. Etiam fringilla, nisi at varius scelerisque, odio eros malesuada libero, maximus condimentum diam enim quis est. Sed dolor mi, volutpat vel est sed, maximus aliquam purus. Mauris nibh libero, fringilla sed auctor sit amet, pulvinar id elit. Donec interdum non arcu quis dictum. Praesent varius lacinia augue. In est mi, congue nec mi eu, congue auctor lacus. Maecenas viverra, augue eget blandit molestie, elit erat aliquam elit, id convallis tellus tellus et sem. Donec efficitur augue leo, sit amet maximus eros ultrices et. Integer vel velit a ipsum lobortis pharetra. Curabitur vel blandit eros. Curabitur vitae quam porttitor, pellentesque ex in, accumsan magna. In hac habitasse platea dictumst. Donec felis justo, tempus sed rhoncus et, fringilla nec turpis. Suspendisse vel vestibulum arcu, vitae maximus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis commodo, lacus eu imperdiet dictum, erat leo laoreet eros, quis finibus nisl mauris at enim. Morbi fringilla odio vitae erat ullamcorper posuere finibus eu ipsum. Vivamus accumsan elementum felis, a hendrerit lacus ultrices et. Donec aliquet ex ex, nec faucibus quam porta vitae. Praesent fermentum accumsan lobortis. Sed enim est, iaculis sit amet felis in, bibendum accumsan ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus malesuada enim at euismod."

function countWords(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    console.log('This text has ' + arrayOfStrings.length + ' words.');
  }
  function countEt(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    console.log('This text has ' + arrayOfStrings.length + ' times the word \"et\"');
  }
  var space = ' ';
  var wordEt = 'et '
  
  countWords(lorem, space);
  
  countEt(lorem, wordEt);

  //BONUS 2
/*
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
*/

let phraseToCheck = '';

console.log(phraseToCheck[3])

  let normalTxt = ''
  for (let i=0; i <= phraseToCheck.length; i++) {
    switch (phraseToCheck[i]) {
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
      case 'n':
      normalTxt += phraseToCheck[i];
      break
    }
  }

  

  let inverseTxt = ""
  for (i = phraseToCheck.length -1; i >= 0; i-- ) {
    inverseTxt += phraseToCheck[i];
  }

  console.log(inverseTxt.toUpperCase())
  console.log(phraseToCheck.toUpperCase())

if (phraseToCheck.toUpperCase() == inverseTxt.toUpperCase()) {
  console.log('Its a palindrome') 
} else {
  console.log('Its not a palindrome')
}