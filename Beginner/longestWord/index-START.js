/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


            //for loop (tied for fastest)
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

// In this approach we first separate the sentence into an array of words using the .split() method. We use the variable maxLength to hold the maximum length encountered at each point of iteration using the for-loop. It is initially set to 0.
// Notice that the for loop is set up to execute for as long as the iterator is less than the length of the array. Since array indices are zero-based, if we had an array containing 5 words, that enables us loop through positions 0-4.

// Within the for-loop, we check if the length of the current word under evaluation wordArray[i] is greater than our maxLength. If it is, we replace the maxLength with the newly found maximum and store the word in a variable result.

// At the end of the iteration, result now holds the longest word in the sentence, hence it is returned as such.




                //.reduce() (tied for fastest)
function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

// Within the reducer function, we compare the length of the current word under evaluation with the length of our accumulator variable maxLengthWord which is set to an empty string at the start. Whenever the length of the current word is greater, we return the current word as the new accumulator value otherwise the accumulator retains it's original value into the next comparison.

// At the end of the reduction, result now holds the longest word in the sentence and is returned accordingly



            //.sort() (slowest 83% slower)
function longestWord(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

// Notice that within our compare function, we subtract the length of the second word from that to the first. This gives us a positive, negative or 0 value that determines which word is longer and by extension which should come before the other.

// On completion of the sorting process, we now have a sortedArray with the words arranged in descending order according to their length. We return the word(element) occupying the first position in this array as this is the longest word.














module.exports = longestWord