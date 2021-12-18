import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;