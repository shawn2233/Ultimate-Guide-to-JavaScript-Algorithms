/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


            //string methods (slowest, 59% slower)
function reverseString(text) {
    return text.split("").reverse().join("")
}
                //or
function reverseString(text) {
    return [...text].reverse().join("")
}







                //For loop (second fastest only 6% lower)
function reverseString(text) {
    let result = ""

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }

    return result
}
// Notice how we initialize the iterating variable i to the length of the string -1 . Since the index begins from zero, this gives us the index of the last character in the string. We simply append this last character to our result variable which is an empty string and continue the cycle until we are past the first character of the string i.e i is no longer greater than or equal to 0.






                //For of
function reverseString(text){
    let result = "";

    for(let char of text){
        result = char + result
    }

    return result;
}




            //Recursive way
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}

// we make use of the .substr() method in JavaScript to return a portion of the text received. It expects two parameters, one specifying the starting index and the other specifying the number of characters afterwards(optional)
// When the text is empty, we return an empty string and the function terminates. When it’s not, we call the reverseString() function and a new string created by removing the first character of the text is passed in



                    ///reduce (fastest solution)
function reverseString(text) {
    return text.split("").reduce((acc, char) => char + acc, '')
}

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// In the solution above, we split the text received into an array of characters and then we call the .reduce() method on the array which begins with an empty string as the initial value and accumulates each character in reverse until it has gone through all characters in the array. At this point, it returns the completely reversed string






module.exports = reverseString