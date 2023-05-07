/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



// Using a for-loop In this approach, we use a for-loop as shown below to loop through every character of stringA while comparing each character with the character in their corresponding position for stringB

            //for loop
function hammingDistance(stringA, stringB) {
    let result = 0;

    if (stringA.length === stringB.length) {
        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                result++;
            }
        }
        return result;
    } else {
        throw new Error('Strings do not have equal length');
    }
}



module.exports = hammingDistance