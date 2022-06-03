const checkDataOfProduts = (req, res, next) => {
  const { club, description, img, price } = req.body;

  if ((!club, !description, !img, !price)) {
    return res.status(422).send('Incomplete data');
  }

  next();
};

export default checkDataOfProduts;
