// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

    function translatePigLatin(str) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newStr = "";
        if (vowels.indexOf(str[0]) > -1) {  //if first letter is a vowel 
            newStr = str + "way";
            return newStr;
        } else {
            let firstMatch = str.match(/[aeiou]/g) || 0; //if no vowel then firstMatch is assigned 0
            let vowelIndex = str.indexOf(firstMatch[0]); //getting the index of the first vowel
            newStr = str.substring(vowelIndex) + str.substring(0, vowelIndex) + "ay"; //str.substring(vowel) represents the section of the string without the consonant beginning. str.substring(0, vowel) represents the consonant/consonant cluster.
            return newStr;
        }
    }
    
    console.log(translatePigLatin("consonant"));

    //if no vowel in str, str.substring(vowel) will return OG string. str.substring(0,vowel) will then return nothing because 0,0 and then will just add 'ay' to the end of it. 