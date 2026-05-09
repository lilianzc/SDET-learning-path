    //Instructions 
    //Node js required
    //In the terminal, write palindromeComplete.js followed by the word or phrase you want to evaluate. For example: node palindromeComplete.js taco cat
    //Notice that numbers and special characters are also evaluated. And empty values are not accepted.
    class Palindrome {
        #word;

        constructor(word) {
            this.#word = word;

            if (typeof this.#word !== "string") {
                throw new Error ("The word must be a string");
            }

            if (this.#word === "") {
                throw new Error ("Please write a word to evaluate")
            }
        }

        #wordLowerCase() {
           const lowerCased = this.#word.toLowerCase().replaceAll(" ", "");
           return lowerCased;
        }

        #wordLowerCaseAndReverted() {
            const reversed = this.#word.toLowerCase().replaceAll(" ", "").split("").reverse().join("");
            return reversed;
        }

        isPalindrome() {
            const wordLowerCase = this.#wordLowerCase();
            const wordLowerCaseAndReverted = this.#wordLowerCaseAndReverted();
            if (wordLowerCase === wordLowerCaseAndReverted) {
                return true;
            }
            else {                
                return false;
            }
    }
}
    //const wordToEvaluate = process.argv[2]; -- this only evaluates the first word after the file name. If you want to evaluate a phrase, you need to use slice and join to combine all the words into one string.
    const wordToEvaluate = process.argv.slice(2).join(" ");

    try { const palindromeResult = new Palindrome(wordToEvaluate);
            if (palindromeResult.isPalindrome()=== true) {
        console.log("The word/phrase '" + wordToEvaluate+ "' is a palindrome.");

    }

    else {
        console.log("The word/phase '" + wordToEvaluate + "' is not a palindrome.");
    }
        
    }
     catch (error) {
        console.log("Caught an error: ", error.message);
     }

