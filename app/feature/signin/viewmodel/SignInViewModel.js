export default SignInViewModel = () => {};

SignInViewModel.prototype.checkRightCredentials = (email, password) => {
  return email != '' && password != '';
};
