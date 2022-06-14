import UsersService from '../services/users.services.js';

const usersService = new UsersService();

class UsersControllers {
  async allUsers(req, res) {
    const users = await usersService.allUsers();

    res.send(users);
  }

  async listUsersById(req, res) {
    const id = req.params.id;

    const users = await usersService.listUsersById({ id });

    res.send(users);
  }

  async creatNewUsers(req, res) {
    const { email, name, password, adm } = req.body;

    try {
      const users = await usersService.creatNewUsers({
        email,
        name,
        password,
        adm,
      });

      res.status(201).send(users);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('E-mail already registered');
      }
    }
  }

  async updateUsers(req, res) {
    const id = req.params.id;
    const { email, name, password, adm } = req.body;

    try {
      const updatedUsers = await usersService.updateUsers({
        id,
        email,
        name,
        password,
        adm,
      });

      res.send(updatedUsers);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('E-mail already registered');
      }
    }
  }

  async deleteUsers(req, res) {
    const id = req.params.id;

    const users = await usersService.deleteUsers({ id });

    res.status(200).send(users);
  }
}
export default UsersControllers;
