// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

//not working yet 

function translatePigLatin(str) {
    let vowelAddition = 'way';
    let consonantAddition = 'ay';
    //let numOfConsonants = 0;
    let consonants = ''
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== vowels) {
            consonants = consonants + str[i];
            console.log(consonants);
            console.log(consonants.length);
        } 
    }
    if (str.match(/^a|e|i|o|u/gi)) {
        console.log(str.concat(vowelAddition))
    } else if (str.match(/[^^aeiou][^^aeiou]/gi)) {
        str.slice(-1, consonants.length);
        console.log(str.concat(consonantAddition));
    }
    return str;
  }
  
  console.log(translatePigLatin("animal"));

      //if statement
    //if (str begins with aeiou then str + "way" to end)
        //else if (str begins with !aeiou || cluster then - it and + 'ay' to end)
    // /[^aeiou]/gi not a vowel 