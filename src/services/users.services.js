import Users from '../models/users.model';
import bcryptjs from 'bcryptjs';

class UsersService {
  async allUsers() {
    const users = await Users.find();

    return users;
  }

  async listUsersById({ id }) {
    const users = await Users.findById(id);

    return users;
  }

  async creatNewUsers({ email, name, password, adm = false }) {
    const passwordCript = await bcryptjs.hash(password, 8);

    const newUsers = {
      email,
      name,
      password: passwordCript,
      adm,
    };

    try {
      const users = await Users.create(newUsers);

      return users;
    } catch (error) {
      throw error;
    }
  }

  async updateUsers({ id, email, name, password, adm }) {
    const updatedUsers = {
      email,
      name,
      password,
      adm,
    };

    try {
      await Users.updateOne({ _id: id }, updatedUsers);

      const users = await Users.findById(id);

      return users;
    } catch (error) {
      throw error;
    }
  }

  async deleteUsers({ id }) {
    await Users.findByIdAndDelete(id);
  }
}

export default UsersService;
