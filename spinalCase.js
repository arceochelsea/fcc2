// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

    return str.replace(/[\s_]/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));