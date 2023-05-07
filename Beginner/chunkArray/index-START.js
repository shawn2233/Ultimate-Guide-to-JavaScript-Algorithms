/* 
Given an array and a chunk size, divide the array into many sub-arrays 
where each sub-array has the specified length
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
From the challenge statement above, our function will receive two parameters, namely; the array to be split and the size of each chunk
*/




                            // Looping through the array
function chunkArray(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length -1 ]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
}

// We initialize an empty array result with which we use to store every smaller group(chunk) that is created. Our intention here is to add each element to a group(sub-array) within our result array until all elements have been assigned.

// Within the for…of loop, we use an if statement to check if our result array is currently empty or if the last group(sub-array) created is complete i.e already of the specified size .

// If it is, we create a new group(sub-array) with the current value as an element and push it into the result array. If it isn't, we retrieve the last array from result and push the current value into it until the group is complete(i.e the required size is reached).

// At the end, we return result which is an array of all the groups(sub-arrays) created throughout the iteration



                    // Iterating with the number of chunks
function chunkArray(array, size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

// Because .splice() element manipulates the array in place (i.e it changes the received array directly), we use the spread operator … to create a copy which we call arrayCopy so that our operations do not affect the data that is received.

// It is from this copy that we continuously extract elements of the specified size using a while loop that will continue to execute for as long as the length of the arrayCopy is greater than 0.

// Each sub-array created is then added to the result by calling the .push() method.

// At the end, we return the result which is an array of all the groups(sub-arrays) that were created



                // Using .slice() ......fastest
function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result
}
// In the code snippet below, we use a for-loop to iterate through the array while repeatedly slicing off groups(chunks) of the specified size using the .slice() method. We increment the iterator by the specified size on each iteration in order to start each new group from where the previous one ended.



                    // Recursion (46% slower)

function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

//  In this approach, we consistently reduce the problem set(i.e the size of the array) by slicing off chunks of the required size until all elements within the array have been grouped. To this effect, we add a conditional at the beginning to serve as the terminating condition such that when the number of remaining elements is less than or equal to the specified size, we simply return all the remaining elements as one group



module.exports = chunkArray