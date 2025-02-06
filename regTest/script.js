let userName = document.getElementById("name");
// let surname = document.getElementById("surname").value;

const submitForm = (event) => {
    console.log("Hello World")
  event.preventDefault();
//   var regex = /^[a-zA-Z0-9!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\|,.<>\/?`~]*$/;
var regex = /^(?=.*?[?*=.@#$%!^":,:;<'>+-_])/
// var test = regex.test(userName.value)

      // Define a regex pattern to match special SQL characters
      var Strpattern = /@"['""\\%_]"/;
    var name = "O'Neil %test"
if(regex.test(name)){
    console.log("Hello")
    var sanitizedInput = name.replace(regex, " ");
    console.log('sanitizedInput', sanitizedInput)
    console.log('sanitizedInput', sanitizedInput.trim())
    return sanitizedInput.trim();
}else{
    console.log("invalid input")
}

   
}