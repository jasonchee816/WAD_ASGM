export function passwordValidator(password, repassword) {
  if (!password || !repassword) {
    return "Password can't be empty.";
  }
  if (password.length < 5 || repassword.length < 5) {
    return 'Password must be at least 5 characters long.';
  }
  if (password !== repassword) {
    return 'Both password should be the same.';
  }
  return '';
}
