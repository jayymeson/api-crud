import Users from '../models/users.model';
import mongoose from 'mongoose';

const checkIdOfUsers = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID!' });
  }

  const users = await Users.findById(id);

  if (!users) {
    return res.status(404).send('Users not found!');
  }

  next();
};

export default checkIdOfUsers;
