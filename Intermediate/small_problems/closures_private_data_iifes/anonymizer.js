// Using OLOO create an Account prototype object that anonymizes user objects on init. The created object should not have access to the 
// function that anonymizes a user other than through the init and reanonymize methods. The function that anonymizes creates a 16 character 
// sequence composed of letters and numbers. The following are the properties and methods on the Account object:

// init: The init method sets the email, password, firstName, lastName, and displayName of user. The displayName is a 
// 16 character sequence generated for the user. It's used as the display name of a user.
// reanonymize: This method generates a new 16 character sequence and reassigns it to the displayName property if the password 
// provided is valid. Returns true if successfully re-anonymized. Returns 'Invalid Password' if the password provided is not valid.
// resetPassword: This method asks the user for a new password and reassigns it to the password property. To reset the password, 
// the user must provide the current password. Returns 'Invalid Password' if the password provided is not valid. Returns true if the password
// is successfully reset.
// firstName: This method returns the first name of the user if the password provided is valid. Returns 'Invalid Password' if 
// the password provided is not valid.
// lastName: This method returns the last name of the user if the password provided is valid. Returns 'Invalid Password' if 
// the password provided is not valid.
// email: This method returns the email name of the user if the password provided is valid. Returns 'Invalid Password' if 
// the password provided is not valid.
// displayName: This property returns the displayName — the 16 character sequence.
// Other than the above properties, methods, and properties inherited from Object.prototype, no other method or property should 
// exist on the object returned by the Account prototype object.

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function anonymize() {
  let numbersLetters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let name = '';
  for (let i = 1; i <= 16; i += 1) {
    name += numbersLetters[getRandomIntInclusive(0, 61)];
  }
  return name;
}

let Account = (function() {
  let userPassword;
  let userEmail;
  let userFirstName;
  let userLastName;
  
  return {
  init(email, password, firstName, lastName) {
    userEmail = email;
    userPassword = password;
    userFirstName = firstName;
    userLastName = lastName;
    this.displayName = anonymize();
    return this;
  },
  
  
  reanonymize(password) {
    if (password === userPassword) {
      this.displayName = anonymize();
      return 'true';
    } else {
      return 'Invalid Password';
    }
  },
  
  resetPassword(currentPassword, newPassword) {
    if (currentPassword === userPassword) {
      userPassword = newPassword;
      return true;
    } else {
      return 'Invalid Password';
    }
  },
  
  firstName(password) {
    if (password === userPassword) {
      return userFirstName;
    } else {
      return 'Invalid Password';
    }
  },
  
  lastName(password) {
    if (password === userPassword) {
      return userLastName;
    } else {
      return 'Invalid Password';
    }
  },
  
  email(password) {
    if (password === userPassword) {
      return userEmail;
    } else {
      return 'Invalid password';
    }
  }
};
  
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar);
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'