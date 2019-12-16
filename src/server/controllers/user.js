const User = require("../models/user");

exports.createColor = (req, res) => {
  let params = req.body;
  let newUser = User({
    name: params.name,
    email: params.email,
    password: params.password
  });

  newColor.save((err, color) => {
    err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar ek cikir" })
      : res.status(201).json({ message: `${color} fue agregado con exito!` });
  });
};
