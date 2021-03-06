const checkDataOfUsers = (req, res, next) => {
  const { email, name, password } = req.body;

  if ((!email, !name, !password)) {
    return res.status(422).send('Incomplete data');
  }

  next();
};

export default checkDataOfUsers;
