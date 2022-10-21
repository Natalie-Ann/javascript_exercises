function isValidEmail(email) {
    if (!(email.includes('@'))) return false;
    let emailArray = email.replace('@', ' ').split(' ');
    if (emailArray.length > 2) return false;
    
    let local = emailArray[0];
    let domain = emailArray[1];

    return /^[a-z0-9]+$/i.test(local) && /^([a-z]+\.)+[a-z]+$/i.test(domain);
  }
  
  console.log(isValidEmail('foo.com'));     //false
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