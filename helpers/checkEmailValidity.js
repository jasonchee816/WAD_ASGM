export function checkEmailValidity(email) {
  // check if email contain @
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return "Email can't be empty.";
  }
  if (!re.test(email)) {
    return 'Ooops! We need a valid email address.';
  }
  return '';
}
