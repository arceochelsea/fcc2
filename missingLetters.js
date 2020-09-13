// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let strSplit = str.split('');
    let alphabetSplit = alphabet.split('');
    let firstLetter = alphabet.indexOf(str[0]);
    let lastLetter = str.length + 1;
    
    if (alphabet == str) {
        return undefined;
    } else {
        let word = alphabetSplit.splice(firstLetter, lastLetter);
        console.log(word);
        let missingLetter = word.filter(letter => !strSplit.includes(letter)).join();
        return missingLetter;
    }
}
console.log(fearNotLetter("abce"));


// alternative

function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (alphabet.includes(str)) {
      return undefined
    } else {
      for (let i = 0; i < str.length; i++) {
    console.log(alphabet.indexOf(str[i])) 
  if (alphabet.indexOf(str[i]) - alphabet.indexOf(str[i - 1]) == 2 && alphabet.indexOf(str[i - 1]) !== -1) {
console.log(alphabet.indexOf(str[i])-1)  
let missingLetter = alphabet.indexOf(str[i])-1;
missingLetter = alphabet[missingLetter];
console.log(missingLetter)
return missingLetter
        } 
      }
    }
  return str;
}

fearNotLetter("abce");