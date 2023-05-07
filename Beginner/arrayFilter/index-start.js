// Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below




            //An Imperative approach (fastest)
function arrayFilter(arr, func) {
    for (let elem of arr) {
      if (func(elem)) {
        return elem
      }
    }
    return undefined
  }

//   Using an if-statement, we perform the test by passing the current element elem into the received function func. Remember that this will return either true when it passes or false when it fails. When it returns true, it causes the if-block to execute, thus returning the current element as the result. In a case where none of the elements pass, the function returns undefined


// Using .filter() 
function arrayFilter(arr, func) {
    let filteredArray = arr.filter(func);
    return filteredArray[0] ? filteredArray[0] : undefined;
  }
//   Using a ternary operator, we check if filteredArray contains any element in its first index filteredArray[0]. If it does, we return it as the result. When it doesn’t, we return undefined



// Using .find()
function arrayFilter(arr, func) {
    return arr.find(func)
  }
//   Notice that we return the result from calling the .find() method on the array while passing in the test function as an argument. Correspondingly, it will return the first value that passes the test and when no element passes, it’d return undefined  