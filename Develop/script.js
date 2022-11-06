//Global variables
let lower_case_choice = "false";
let upper_case_choice = "false";
let numeric_choice = "false";
let special_char_choice = "false";
let total_options = 0;
let random_array_choice = 0;
let random_char_choice = 0;

const lower_case_options = ["a", "b", "c", "d", "e", "f", "g","h","i","j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upper_case_options = lower_case_options.map(letter => letter.toUpperCase());
const numeric_options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special_char_options = ["!", "#", "$", "%", "&", "+", "<", ">","?", "@"];


// Assignment code here
function generatePassword(){
  //Prompt for password length and confirm is between 8-128 characters needed
  let password_length = prompt("Insert number of characters needed. Minimum: 8 and Maximum: 128", "12");
  while(password_length < 8 || password_length > 128)
  {
    if(password_length < 8)
    {
      password_length = prompt("Chosen characters need is to low. Minimum: 8 and Maximum: 128", "12");
    }
    else if(password_length > 128)
    {
      password_length = prompt("Chosen characters need is to high. Minimum: 8 and Maximum: 128", "12");
    }
  }
  //Set all character types to false in case of multiple button pushes
  lower_case_choice = "false";
  upper_case_choice = "false";
  numeric_choice = "false";
  special_char_choice = "false";
  total_options = 0;

  //Keep Prompting until at least one character type is chosen
  while(lower_case_choice === "false" && upper_case_choice === "false" && numeric_choice === "false" && special_char_choice === "false")
  {
    lower_case_choice = special_char_function("lower_case");
    upper_case_choice = special_char_function("upper_case");
    numeric_choice = special_char_function("numeric");
    special_char_choice = special_char_function("special");

    if(lower_case_choice === "false" && upper_case_choice === "false" && numeric_choice === "false" && special_char_choice === "false")
    {
      alert("At least one character choice must be selected. Please try again.")
    }

  }

  console.log(lower_case_options.length);
  console.log(upper_case_options.length);
  console.log(numeric_options.length);
  console.log(special_char_options.length);
  console.log("Next is selecting characters")
  console.log("total options: " + total_options);
  console.log("password length needed: " + password_length);

  //Generate password
  let new_password = "";

  for(let index = 0; index < password_length; index++)
  {
    random_array_choice = random_number_from_interval(1, total_options);
    console.log("Random Array Choice num: " + random_array_choice);
    if(lower_case_choice === "true")
    {
      if(random_array_choice === 1)
      {
        random_char_choice = random_number_from_interval(0, lower_case_options.length-1);
        console.log("Random char num: " + random_char_choice);
        console.log("Char chosen from above array: " + lower_case_options[random_char_choice]);
        new_password = new_password + lower_case_options[random_char_choice];
        continue;
      }
      else
      {
        random_array_choice--;
        
      }

    }

    if (upper_case_choice === "true")
    {
      if(random_array_choice === 1)
      {
        random_char_choice = random_number_from_interval(0, upper_case_options.length-1);
        console.log("Random char numer:" + random_char_choice);
        console.log(upper_case_options[random_char_choice]);
        new_password = new_password + upper_case_options[random_char_choice];
        continue;
      }
      else
      {
        random_array_choice--;
      }

    }

    if(numeric_choice === "true")
    {
      if(random_array_choice === 1)
      {
        random_char_choice = random_number_from_interval(0, numeric_options.length-1);
        console.log("Random char numer:" + random_char_choice);
        console.log(numeric_options[random_char_choice]);
        new_password = new_password + numeric_options[random_char_choice];
        continue;
      }
      else
      {
        random_array_choice--;
      }

    }

    if(special_char_choice === "true")
    {
      if(random_array_choice === 1)
      {
        random_char_choice = random_number_from_interval(0, special_char_options.length-1);
        console.log("Random char numer:" + random_char_choice);
        console.log(special_char_options[random_char_choice]);
        new_password = new_password + special_char_options[random_char_choice];
        continue;
      }
      else
      {
        random_array_choice--;
      }

    }
  }


 return new_password;

}

//function to prompt user for answers on character choice
function special_char_function(choice)
{
  //set to know user submitted plausible answer
  let user_choice = "unknown";

  while(user_choice != "yes" && user_choice != "y" && user_choice != "no" && user_choice != "n")
  {
    if(choice === "lower_case")
    {
      user_choice = prompt("Would you like to use lowercase characters? Yes/No", "Yes");
      user_choice = user_choice.toLowerCase();
      if(user_choice === "yes" || user_choice === "y")
      {
        total_options++;
        return "true";
      }
      else if(user_choice === "no" || user_choice === "n")
      {
        return "false";

      }
      else
      {
        //Do nothing to run again
      }
    } 
    else if(choice === "upper_case")
    {
      user_choice = prompt("Would you like to use uppercase characters? Yes/No", "Yes");
      user_choice = user_choice.toLowerCase();
      if(user_choice === "yes" || user_choice === "y")
      {
        total_options++;
        return "true";
      }
      else if(user_choice === "no" || user_choice === "n")
      {
        return "false";

      }
      else
      {
        //Do nothing to run again
      }

    }
    else if(choice === "numeric")
    {
      user_choice = prompt("Would you like to use numeric characters? Yes/No", "Yes");
      user_choice = user_choice.toLowerCase();
      if(user_choice === "yes" || user_choice === "y")
      {
        total_options++;
        return "true";
      }
      else if(user_choice === "no" || user_choice === "n")
      {
        return "false";

      }
      else
      {
        //Do nothing to run again
      }

    }
    else
    {
      user_choice = prompt("Would you like to use special characters? Yes/No", "Yes");
      user_choice = user_choice.toLowerCase();
      if(user_choice === "yes" || user_choice === "y")
      {
        total_options++;
        return "true";
      }
      else if(user_choice === "no" || user_choice === "n")
      {
        return "false";

      }
      else
      {
        //Do nothing to run again
      }

    }
  }
}

//Get a random number between two given intervals
function random_number_from_interval(min, max)
{
  return Math.floor(Math.random() * (max-min +1) + min);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
