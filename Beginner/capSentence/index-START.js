/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



          //for each method (second fastest 15% slower)
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
      capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ')
}

// Notice how we call the .toLowerCase() method on the string of text received to convert the entire sentence to lowercase. We also chain the .split() method in sequence to divide the lowercase sentence into an array of words as shown below. This array is stored as wordsArray
// Next, using the .foreach() method, we iterate through every word(element) in the array and execute a function on it. The function takes the first letter of the word and turns it to uppercase using the .toUpperCase() method. To retrieve the remaining part of the word in lowercase, we use the .slice() method to slice the string starting from position 1 till the end
// We combine the transformed first letter and the sliced section together to form the capitalized word which we push into our array of capitalized words capsArray.

// After this process has being carried out for every word, capsArray now holds the capitalized version of every word in the sentence.

// Finally, we combine each word(element) using the .join() method. We pass in an empty space as the separator. This gives us the capitalized sentence which we return in conclusion.




              //.map() and .slice() (fastest)
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word=>{
      return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}  

// We use the same technique as before to create wordsArray, an array of all words in the lowercase sentence.

// This time we use the .map() function to loop through every word in the array and execute the same function as before in order to create capsArray, which is an array of the capitalized words.

// In the end we return a capitalized sentence created by joining the words in the capsArray with blank space as the separator.



            //.map() and .replace() (slowest 29%)
function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')

  let capsArray = wordsArray.map( word=>{
      return  word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(' ')
  }

  // Notice that we replace the first letter of each word(word[0]) with an uppercase version of this same letter. Then we add the capitalized word using the .push() method to the capsArray.

  // Conclusively, we return the capitalized sentence formed as in the previous cases. 



module.exports = capSentence