let userName = document.getElementById("name").value;

const sanitizeInput = (input) => {
    const pattern = /['"\\%_]/g;

    console.log(input.replace(pattern, ' ').trim())

}

const userInput = "O'Neil %test";
const sanitizedInput = sanitizeInput(userInput);

console.log("Original input:", userInput);        // Original input: O'Neil %test
console.log("Sanitized input:", sanitizedInput);


const submitForm = (event) => {
    console.log("Clicked!!")
    event.preventDefault()
console.log('sent')
    return sanitizeInput()
}

// Sanitize user input
// string sanitizedInput = SqlSanitizer.SanitizeInput(name);
