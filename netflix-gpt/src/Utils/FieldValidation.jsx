export const checkValidatedField = (email, password) => {
  const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!emailRegex) {
    return "Please enter a valid email address.";
  }
  if (!passwordRegex) {
    return "Password must be at least 8 characters long and contain at least one letter and one number.";
  }
  return null;
};
