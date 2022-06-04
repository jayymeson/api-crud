import mongoose from 'mongoose';

const {Schema, model} = mongoose

const UsersSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    password: { type: String, require: true },
    adm: { type: Boolean, require: true },
  },
  { versionKey: false },
);

const Users = model('users', UsersSchema);

export default Users;
