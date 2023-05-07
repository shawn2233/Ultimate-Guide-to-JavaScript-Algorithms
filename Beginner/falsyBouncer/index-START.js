/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.
Examples of falsy values are: false, null, undefined, 0, NaN, and "".

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

                //for of loop (fastest)
function falsyBouncer(array) {
    let result =[]
    //loop through with each array value
    for (value of array){
    // push into result if truthy
        if(value){
            result.push(value)
        }
    }
    return result
}

// Remember that the condition in an if statement evaluates to true or false. Thus, using an if statement, we check if the value evaluates to true or false. If it evaluates to true, we push it into our final result array which is initially empty. If it evaluates to false however, the block of code doesn't get executed and we move on to the next value.

// At the end of the iteration, result now contains all the truthy(non-falsy) values, and it is returned as such


            //filter (5% slower)
function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)     })
}

// We convert the values(elements) to their corresponding Boolean equivalent using the Boolean() function.

// Recall that only the elements that pass the test(i.e evaluate to true) are returned by .filter() in the new array.

// Thus, in the end we have an array containing only the truthy values from the received array and that is why we return it from the function as such



module.exports = falsyBouncer