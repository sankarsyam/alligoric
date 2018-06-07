import User from '../data/user.json';
export function userLogin(email, password) {
  if (email === password) {
    return User;
  } else {
    const error = new Error();
    // Add the list of error messages, if any, from the API response to the error being thrown
    // error.messages = data.errors;
    error.messages = ['Invalid username or password'];
    // error.status = response.status;

    throw error;
  }
}
