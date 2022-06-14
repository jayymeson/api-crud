import LoginServices from '../services/login.services.js';

const loginServices = new LoginServices();

class LoginControllers {
  async login(req, res) {
    const { email, password } = req.body;

    const login = await loginServices.login({ email, password });

    res.status(login.status).send({ token: login.token });
  }
}

export default LoginControllers;
