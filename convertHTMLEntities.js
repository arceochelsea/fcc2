// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let characters = {'&':'&amp;','<':'&lt;','>':'&gt;', '"':'&quot;', "'":'&apos;'};
    str = str.replace(/&|<|>|'|"/g, m => characters[m]);
    return str;
    }
  
  console.log(convertHTML("Dolce & Gabbana"));
  //should return "Dolce &amp; Gabbana".

  //If you want to replace multiple characters you can call the String.prototype.replace() with the replacement argument being a function that gets called for each match. All you need is an object representing the character mapping which you will use in that function.
