export default SignUpViewModel = () => {};

SignUpViewModel.prototype.checkRightCredentials = (
  email,
  firstName,
  lastName,
  password,
  passConfirm,
) => {
  return (
    email != '' &&
    firstName != '' &&
    lastName != '' &&
    password != '' &&
    passConfirm != '' &&
    password == passConfirm
  );
};
