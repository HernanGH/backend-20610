import mongoose from 'mongoose';
import UserModel from './models/users.js';

const main = async () => {
  try {
    const URL = 'mongodb://localhost:27017/ecommerce';
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB Connected');

    // console.log('CREATE');

    // const newUser = {
    //   name: 'pepe',
    //   lastName: 'grillo',
    //   email: 'pepe.grillo@mail.com',
    //   userName: 'pepe.grillo',
    //   password: 123456
    // };
    // const userSaved = new UserModel(newUser);
    // const response = await userSaved.save();
    // console.log({ response });

    console.log('READ');
    const usersList = await UserModel.find({});
    console.log({ usersList });

    // console.log('UPDATE');
    // const response = await UserModel.updateOne(
    //   { _id: "618c6c89995ead244c91caa4" },
    //   {
    //     $set: { userName: "pepe.grillo" }
    //   }
    // );

    // console.log({ response });

    // console.log('DELETE');
    // const response = await UserModel.deleteOne({ _id: '618c6c89995ead244c91caa4'});
    // console.log({ response });

  } catch (error) {
    console.error('DB Error: ', error);
  }
};

main();
