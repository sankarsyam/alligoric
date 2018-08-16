// import User from '../data/user.json';
// export function userLogin(email, password) {
//   if (email === password) {
//     return User;
//   } else {
//     const error = new Error();
//     // Add the list of error messages, if any, from the API response to the error being thrown
//     // error.messages = data.errors;
//     error.messages = ['Invalid username or password'];
//     // error.status = response.status;

//     throw error;
//   }
// }

import { checkStatus } from '../utils/requests';

class Login {
  async userLogin(email, password) {
    const loginUrl = 'http://localhost:3001/login';
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return await checkStatus(response);
  }
}

export default new Login();
