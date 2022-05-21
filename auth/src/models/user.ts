import mongoose from 'mongoose';
import { Password } from '../services/password';

// describe the properties that are required to create a new user
interface UserAttributes {
  email: string;
  password: string;
}

// describe the properties that a User model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttributes): UserDoc;
}

// describe the properties that a User document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// works when saving something in the database
userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashedPassword = await Password.toHash(this.get('password'));
    this.set('password', hashedPassword);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttributes) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
