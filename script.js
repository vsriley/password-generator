 //make sure to enter meta tag above for mobile responsiveness?
    //prompt user for length of password
    //prompt user for special characters, numeric characters, lowercase characters, and/or uppercase characters
    //make sure user choses at least one character option

    //based on what they chose generate a password and write it to the page
    var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
    var passwordCharacters = [];
    var numCharacters;
    var password = "";

    var pageTitle = document.querySelector("h1");
    var infoBox = document.querySelector("#infoBox");
    var secondTitle = document.querySelector("h2");
    var passwordBox = document.querySelector("p");
    var buttonBox = document.querySelector("#buttonRow");
    var copyButton = document.querySelector(".btn-secondary");
    var passwordButton = document.querySelector(".btn-danger");

    pageTitle.setAttribute("style", "text-align: center; padding-bottom: 20px");
    infoBox.setAttribute("style", "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
    secondTitle.setAttribute("style", "border-bottom: 2px solid lightgray; padding-bottom: 15px; padding-top: 15px; margin-bottom: 15px");
    passwordBox.setAttribute("style", "border: 2px dashed lightgray; padding-bottom: 100px; text-align: center");
    buttonBox.setAttribute("style", "border-top: 2px solid lightgray; padding-bottom: 15px; padding-top: 15px; margin-top: 10px; margin-right: 1px; margin-left: 1px");


    function generateCharacters(){
        //prompts user for length of password
        numCharacters = prompt("Enter the length you would like your password to be (between 8 and 128 characters): ");
        console.log("numCharacters: ", numCharacters);
        //converts word version of number to integer
        var numWords = ["eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "one hundred", "one hundred one", "one hundred two", "one hundred three", "one hundred four", "one hundred five", "one hundred six", "one hundred seven", "one hundred eight", "one hundred nine", "one hundred ten", "one hundred eleven", "one hundred twelve", "one hundred thirteen", "one hundred fourteen", "one hundred fifteen", "one hundred sixteen", "one hundred seventeen", "one hundred eighteen", "one hundred nineteen", "one hundred twenty", "one hundred twenty-one", "one hundred twenty-two", "one hundred twenty-three", "one hundred twenty-four", "one hundred twenty-five", "one hundred twenty-six", "one hundred twenty-seven", "one hundred twenty-eight"];
        if(numWords.includes(numCharacters)){
            numCharacters = numWords.indexOf(numCharacters) + 8;
            console.log("Changing word of number to number characters: ", numCharacters);
        }
        //ensures the user chooses a valid password length
        while(numCharacters < 8 || numCharacters > 128){
            numCharacters = prompt("Please enter a password length between 8 and 128 characters");
            console.log("numCharacters: ", numCharacters);
        }
        //gets user imput for the types of characters they would like in their password
        var useNumeric = confirm("Would you like numeric characters in your password?");
        console.log("useNumeric: ", useNumeric);
        var useLowercase = confirm("Would you like lowercase letters in your password?");
        console.log("useLowercase: ", useLowercase);
        var useUppercase = confirm("Would you like uppercase letters in your password");
        console.log("useUppercase: ", useUppercase);
        var useSpecial = confirm("Would you like to use special characters in your password?");
        console.log("useSpecial: ", useSpecial);
        //if they do not choose any type of character reprompt user to choose at least one type of character for their password
        while(useNumeric === false && useLowercase === false && useUppercase === false && useSpecial === false){
            useNumeric = confirm("Please choose at least one type of character you would like in your password. Would you like numeric characters in your password?");
            console.log("useNumeric: ", useNumeric);
            useLowercase = confirm("Would you like lowercase letters in your password?");
            console.log("useLowercase: ", useLowercase);
            useUppercase = confirm("Would you like uppercase letters in your password");
            console.log("useUppercase: ", useUppercase);
            useSpecial = confirm("Would you like to use special characters in your password?");
            console.log("useSpecial: ", useSpecial);
        }
        //if user would like numeric characters
        if(useNumeric === true){
            passwordCharacters = passwordCharacters.concat(numericCharacters);
            console.log("passwordCharacters: ", passwordCharacters);
        }
        //if user would like lowercase characters
        if(useLowercase === true){
            passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
            console.log("passwordCharacters: ", passwordCharacters);
        }
        //if user would like uppercase characters
        if(useUppercase === true){
            passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
            console.log("passwordCharacters: ", passwordCharacters);
        }
        //if user would like special characters
        if(useSpecial === true){
            passwordCharacters = passwordCharacters.concat(specialCharacters);
            console.log("passwordCharacters: ", passwordCharacters);
        } 
    }

    function generatePassword(numCharacters, passwordCharacters){
        for(i = 0; i < numCharacters; i++){
            //generates random character from the array
            var character = passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
            console.log("character: ", character)
            //adds the randomly generated character to the password
            password = password + character;
            console.log("password: ", password);
        }
        return password;
    }

    generateCharacters();
    generatePassword(numCharacters, passwordCharacters);
    passwordBox.textContent = password;
    
    //generates new password 
    passwordButton.addEventListener("click", function(){
        //reset password and password character options
        password = "";
        passwordCharacters = [];
        generateCharacters();
        generatePassword(numCharacters, passwordCharacters);
        passwordBox.textContent = password;
    })
    
    //create an option for them to copy password to clipboard
    copyButton.addEventListener("click", function(){
        var copyPassword = document.createElement("textarea");
        copyPassword.value = password;
        document.body.appendChild(copyPassword);
        copyPassword.select();
        document.execCommand('copy');
        document.body.removeChild(copyPassword);  
        alert("Your password has been copied to your clipboard");
    })