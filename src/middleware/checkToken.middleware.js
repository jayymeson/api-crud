import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Token not sent ');
  }

  jwt.verify(token, 'secret', (error, decode) => {
    if (error) {
      return res.status(401).send('Invalid token');
    }

    next();
  });
};

export default checkToken;
