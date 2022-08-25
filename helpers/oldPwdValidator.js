export function oldPwdValidator(old_password, async_password) {
    if (!old_password) {
        return "Old Password can't be empty.";
      }
    if (old_password.length < 5 ) {
        return 'Old Password must be at least 5 characters long.';
    }
    if (old_password !== async_password) {
        return 'Old password is not match.';
    }
    return '';
  }
  