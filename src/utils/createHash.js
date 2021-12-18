import bCrypt from 'bcrypt'

/**
 * 
 * @param {string} password - The password to be hashed
 * @returns {string} password hashed
 */
const createHash = (password) => bCrypt.hashSync(
  password,
  bCrypt.genSaltSync(10),
  null);

export default createHash;
