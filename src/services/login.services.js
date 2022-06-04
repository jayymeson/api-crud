import Users from '../models/users.model';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

class LoginServices {
  async login({ email, password }) {
    const users = await Users.findOne({ email: email });

    if (!users) {
      return { status: 400, message: 'Invalid email! ' };
    }

    const passwordInvalid = await bcryptjs.compare(password, users.password);

    if (passwordInvalid === false) {
      return { status: 400, message: 'Invalid password! ' };
    }

    const token = jwt.sign({ email: email }, 'secret', { expiresIn: '24h' });

    return { status: 200, token: token };
  }
}

export default LoginServices;
