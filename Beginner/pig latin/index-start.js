        //imperative approach (fastest)

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

//   This is a somewhat manual approach where we specify how things are done until we arrive at the final result. We make use of the for…of loop in iterating through the string in order to determine where the first vowel in the word occurs

//   In the code snippet above, we start by converting the received string str to lowercase. This is to prevent any casing related errors during comparison(“a” does not equal “A”).

// Next, we initialize two variables:

// vowels - containing the five English vowels
// vowelIndex - for storing the index at which the first vowel in the word is found. It is initialized to 0.
// We use an if…else statement to check if the first letter of the word can be found within our vowels array by calling the .includes() method on the array while passing it the first letter of the string str[0]. If it is found, this returns true, which implies that the first letter is a vowel. Hence, we simply add "``way``" to the end of the string and return the result as the Pig Latin equivalent.

// If the statement evaluates to false, it signifies that the starting character is a consonant. Hence, we use a for…of loop to iterate through the string to identify the position of the first vowel. When we locate the first vowel, we use the .indexOf() method to retrieve it’s position in the string and store it into the variable vowelIndex. After this step we terminate the loop using the break statement.

// At the last line, we use the .slice() method to manipulate the string to generate the Pig Latin equivalent.

// str.slice(vowelIndex) extracts a portion of the string starting from the first vowel(i.e the vowelIndex up till the end.
//     str.slice(0, vowelIndex) extracts the portion of the string starting at index 0(i.e the beginning) up until the first vowel at position vowelIndex. The extracted portion here is the consonant or consonant cluster as the case may be. Note that the .slice() method returns the portion from the starting index to but not including the end index.
//     We combine these extracted portions and affix "``ay``" to the end to form the final result which is returned from the function as such


    //declarative approach (88% slower)
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

// .replace(/^([aeiouy])(.*``*)/, '$1$2way')* -_ This statement specifies a replacement to be carried out if the word begins with a vowel. This is specified in the first bracket within the_ *.replace()* method call i.e *([aeiou])*. The second bracket *(.*)* refers to every other character after the vowel. Thus, the expression specifies a pattern for words beginning with a vowel and followed by anything else. When this case is matched, a new string in the format of '``$1$2way``' is generated and used to replace the original srtring. $1 here refers to the first bracket and $2, the second bracket. This means that we simply take the word as it was and affix "``way``" to the end.
// .replace(/^([^aeiouy]+)(.*)/, '$2$1ay') - This statement specifies that if the word does not start with a vowel i.e ^([aeiouy]+), and is followed by anything else (``*.*)*, it should be replaced with a string formatted in the order '$2$1ay``'. The plus sign in ^([aeiouy]+) caters for a situation where there is a consonant cluster. Thus it represents every non-vowel character at the start of the word. '$2$1ay' generates the new string in the order of remaining characters + consonant cluster + '``ay``'. This gives the Pig Latin equivalent.
// Note that we chain both .replace() methods in succession such that both cases are tested and only the one that matches will be evaluated further