import User from '../data/user.json';
export function userLogin(email, password) {
  console.log(User);
  console.log(email + '..........' + password);
  return email === password ? User : null;
}
