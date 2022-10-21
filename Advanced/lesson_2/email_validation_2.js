// For this practice problem, use the following criteria to determine whether an email address is valid:

// There must be one @ sign.
// The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.

/*
Input: string representing email
Output: boolean 

Explicits:  - returns true if email is valid
            - valid emails have: 1 @ sign, local part with 1+ letters or digits (no non-alpha or non-digits), domain must have 2+ componenets separated by dots. each componeent can only contain letters.
Implicits:  

DS: strings

Algorithm:
- Check if 1 @ symbol --> regex
- If above is true
- Check if local part is valid
    - check if first match contains only alphanumerics with regex 
- Check if domain part is valid
    - check if second match contains only periods and alphas and separated by periods
*/

// function isValidEmail(emailString) {
//     if (emailString.match(/\@{1}/g)) {
//         let splitString = emailString.split('@');
//         if (splitString[0].split('').every(char => /[A-Za-z0-9]/g.test(char))) {
//             let domainParts = splitString[1].split('.');
//             return domainParts.every(word => word.match(/^[A-Za-z]+$/g));
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

function isValidEmail(emailString) {
    return (emailString.match(/^[A-Z0-9]+\@{1}([A-Z]+\.[A-Z]+){1,}$/gi)) ? true : false;
}


  
  console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
  console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
  console.log(isValidEmail('foo@baz.com'));             // returns true
  console.log(isValidEmail('foo@baz.ph'));              // returns true
  console.log(isValidEmail('HELLO123@baz'));            // returns false
  console.log(isValidEmail('foo.bar@baz.to'));          // returns false
  console.log(isValidEmail('foo@baz.'));                // returns false
  console.log(isValidEmail('foo_bat@baz'));             // returns false
  console.log(isValidEmail('foo@bar.a12'));             // returns false
  console.log(isValidEmail('foo_bar@baz.com'));         // returns false
  console.log(isValidEmail('foo@bar.....com'));         // returns false