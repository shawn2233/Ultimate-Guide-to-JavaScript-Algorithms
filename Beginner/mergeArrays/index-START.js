/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/



//step 1 and step 2 Accessing the Arguments and Combining the Arrays
// function mergeArrays(...arrays) {
//     let jointArray = []
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });
    //Some more code here
// }

// Using the … syntax above, we are able to combine all the arguments passed(irrespective of the number) into one array which we name arrays. Our console.log of arrays in both cases above will give the array below when tested with the challenge sample.

// For each array, we use the spread operator to spread its elements as well as the elements in the jointArray which is initially empty into a new array. We then reassign this array to jointArray. On complete execution of this statement, jointArray now contains all the elements from all the arrays received(still with duplicates)





                    //using Sets (33% slower)
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return [...new Set([...jointArray])]
}
// Notice that we use the JavaScript spread operator once again to spread out all the elements of the jointArray into the new set. This eliminates all duplicates as sets are designed to only hold unique values

//or Array.from() method
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    return Array.from(new Set([...jointArray]))
}

// Array.from() method to convert the set which is an iterable object to an array





                        //.filter() method (fastest)
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    return uniqueArray
}
// In this approach, we use the .filter() method to loop through the jointArray while testing to see if the index of the current item matches the index of the current iteration

// In the code snippet above, we use this method to retrieve the first index at which the current item can be found within the array and compare it with the current index for that iteration. If these values match, then this is the first time the element occurs within the array. Hence, it passes the test and is added to the uniqueArray. If the values do not match however, it means the value has been encountered before, hence it is filtered out.

// At the end, we return the uniqueArray which now holds the result of our operation i.e an array without duplicates

//.reduce() method

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

// In this solution, we use the .reduce() method to continuously execute a function that checks if the current item is already in the accumulator array (newArray). Take note that the accumulator is initialized to an empty array at the beginning of the iteration.

// If the element is within the array already, we return the array as it is, to be used in the next iteration. If it isn’t, we return a new array which we create from the elements in the accumulator(newArray) and the current item. This new array is used as the accumulator in the next iteration

// At the end of the reduction process we are left with an array that contains all elements of the merged arrays without duplicates. We store this in uniqueArray which we return at the end



module.exports = mergeArrays