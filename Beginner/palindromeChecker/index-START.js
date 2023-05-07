/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



            //my solution
function palindromeChecker(text) {
    text = text.toLowerCase()
    return text === text.split("").reverse().join("")
}


            //The Intuitive Approach (87% slower)
function palindromeChecker(text) {

    var reversedText = text.toLowerCase()
        .split('').reverse().join('')

    return text === reversedText
}

            //Looping through and Comparing Characters (47% slower)
function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    })

    return result
}

        ///The Fix (Looping through and Comparing Characters -optimized) (fastest)
function palindromeChecker(text) {
    var textLen = text.length;
    for (var i = 0; i < textLen/2; i++) {
      if (text[i] !== text[textLen - 1 - i]) {
          return false;
      }
    }
    return true;
   }



module.exports = palindromeChecker;