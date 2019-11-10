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

    pageTitle.setAttribute("style", "text-align: center; padding-bottom: 20px");
    infoBox.setAttribute("style", "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
    secondTitle.setAttribute("style", "border-bottom: 2px solid lightgray; padding-bottom: 15px; padding-top: 15px; margin-bottom: 15px");
    passwordBox.setAttribute("style", "border: 2px dashed lightgray; padding-bottom: 100px; text-align: center");
    buttonBox.setAttribute("style", "border-top: 2px solid lightgray; padding-bottom: 15px; padding-top: 15px; margin-top: 10px; margin-right: 1px; margin-left: 1px");


    function generateCharacters(){
        //prompts user for length of password
        numCharacters = prompt("Enter the length you would like your password to be (between 8 and 128 characters): ");
        console.log("numCharacters: ", numCharacters);
        //create way to ensure number and word version of number convert to integer?
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
    //create an option for them to copy password to clipboard
