/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



         // Using a For-loop to find the immediate larger value's position (90% slower)
function whereIBelong(arr, num) {
   arr.sort((a, b) => {
       return a - b
   })
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] >= num) {            
         return i
       }
   }
   return arr.length
}

// Above, we start by using the .sort() method to arrange the array values in ascending order. Next, use a for-loop to iterate through the sorted array while comparing each value with the specified number num. If the value is greater than num, we return the value of the iterator i, which is also the index at which the first larger value was found.

// In a situation where none of the values are larger, it means that the specified value will come at the end. So we return the length of the array which is also the index of the next position to be filled






         // Using a For-loop to determine the number of smaller values (fastest)
function whereIBelong(arr, num) {
   var counter = 0;
   for (var i = 0; i < arr.length; i++) {
       if (num > arr[i]) {
           counter++;
       }
   } 
   return counter;
}
// In the code snippet above, we use a for-loop to iterate through each value while counting the number of values that are less than the specified number.

// At the start, we initialize a counter variable which is used to keep count of the number of smaller values. For each iteration, we check if the specified value num is greater than the current value under evaluation arr[i]. If it is, we increment counter by 1.

// At the end, we return counter which holds the number of smaller values i.e the position at which the number is to be inserted


      //Using a while loop to count the smaller values (same thought process as above but with while loop) (90% slower)
function whereIBelong(arr, num) {
   arr.sort((a, b) => {
       return a - b
   })
   let counter = 0;
   while (num > arr[counter]) {
       counter++
   }
   return counter
}

         // Finding the index of the value directly (90% slower)
function whereIBelong(arr, num) {
   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}

// First, we push the specified number into the array. Next, we sort the elements of the array in ascending order once again.

// Finally, we call the .indexOf() method on the array while passing in the specified value in order to determine the position of the specified value within the array




module.exports = whereIBelong