import bCrypt from 'bcrypt'

/**
 * 
 * @param {object} user 
 * @param {string} password 
 * @returns {boolean}
 */
const isValidPassword = (user, password) => {
  return bCrypt.compareSync(password, user.password);
}

export default isValidPassword;
 