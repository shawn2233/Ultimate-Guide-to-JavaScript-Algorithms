/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


/*
 An iterative approach to counting the number of vowels in a string of text.
 */

 const vowels = ["a", "e", "i", "o", "u"]

 function vowelsCounter(text) {
     // Initialize counter
     let counter = 0;
 
     // Loop through text to test if each character is a vowel
     for (let letter of text.toLowerCase()) {
         if (vowels.includes(letter)) {
             counter++
         }
     }
 
     // Return number of vowels
     return counter
 }


//  First, we declared a constant "Vowels" which contained an array of the five English vowels.
// Next, we make use of a for…of loop to iterate through each letter of the text. If you're not conversant with this, a for…of loop basically creates a loop iterating over iterable objects. Iterable objects could be strings, arrays, maps, sets etc.
// Notice how we convert all letters of the text to lowercase within the loop. This is because, we don't want to miss the instances of uppercase vowels within the passed text .
// Next within the loop, we use an if statement to check if the selected letter is included in the array of vowels we defined earlier. Fittingly, we call the includes() method on the array of vowels to determine whether the array includes the selected letter, returning true or false as appropriate.
// If the condition evaluates to true, we increment the counter.
// After looping through we return the counter which is equivalent to the number of vowels found.






/*
 Using Regular Expressions to count the number of vowels in a string of text. (88% faster)
 */

 function vowelsCounter(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {    
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}

// The first thing we did within the function was to call the .match() method on the text. It returns an array of the matches found after comparing the regular expression passed in as an argument with the text.
// The regular expression specifies the letters to be looked for within the brackets[]. For simple patterns, Regular expressions are usually defined within a pair of slashes. Notice the characters gi trailing the closing slash?
// g stands for a global search which means that after finding the first match, it will not start over from the beginning but continue searching from the end of the previous match.
// i stands for case insensitive search which makes the whole expression case-insensitive (for example /xyz/i would match XyZ).
// Next we use a conditional to check if any matching instances were found. The .match() method used above returns an array of the matched items if matches were found and "null" if they weren't. Hence in the conditional, if matchingInstances evaluates to a truthy value(that is an array of matches found), we return the number of matches found which is also the length of the array. On the other hand if it evaluates to a falsy value, we return 0 as it means no matches were found.




module.exports = vowelsCounter;
