// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g

// searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"



            //.replace() ....fastest
function searchReplace(str, word, newWord){
    if ( word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
   }
   return str.replace(word, newWord)
}

// Recall that a major objective in solving this challenge is to ensure that the replacing word matches the casing(capitalization) of the word to be replaced.

// To achieve this, we use an if statement to check of the first letter of the word word[0] matches the uppercase equivalent word[0].toUpperCase() of the letter. If it does, we convert the first letter of the newWord(replacement) to uppercase and append the rest of the lowercase letters retrieved using the .slice() method.

// Once we now have the newWord in same case as the word to be replaced, we call the .replace() method on the sentence passing in the word to be replaced word and the replacement newWord.

// This returns a new sentence with the words swapped appropriately. Thus, we return it from our function as the final result.




            //Regular Expressions (regex) 72% slower
function searchReplace(str, word, newWord) {
    let regex = new RegExp(word, "gi");
    if (/[A-Z]/.test(word[0])) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    return str.replace(regex, newWord)
}

// Notice how we use the RegExp() constructor function to create a regular expression out of the word to be replaced. This we store as regex

// Note: **g** and **i** as specified in the second argument are regular expression flags with the following meanings. | g | - Global search(look in the whole string and return all matches) | | --- | --- | | i | - Case-insensitive search

// Next, using a regular expression /[A-Z]/ within the if statement, we test to see if the first letter in the word is capitalized. If it is, we adjust the replacement newWord accordingly.

// At the end, knowing that the .replace() method may accept a regular expression specifying the pattern to be searched for, we call the .replace() method on the sentence passing in regex and the newWord.






module.exports = searchReplace