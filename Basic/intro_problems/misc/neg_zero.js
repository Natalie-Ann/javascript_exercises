function IsNegZero (value) {
  if ((String(value).length === 2) && (value === 0)) {
    console.log('This is negative zero.');
    return true;
  } else {
    console.log('Did not work.');
    return false;
  }
}


IsNegZero(0);
