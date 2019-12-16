const Likes = require("../models/likes");

exports.addColorToLikes = (req, res) => {
  let params = req.body;
  let newLike = Likes({
    colors: params.colors
  });

  newLike.save((err, like) => {
    err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar ek cikir" })
      : res.status(201).json({ message: `${like} fue agregado con exito!` });
  });
};

exports.addPalleteToLikes = (req, res) => {
    let params = req.body;
    let newLike = Likes({
      palletes: params.palletes
    });
  
    newLike.save((err, pallete) => {
      err
        ? console.log(err) &&
          res.status(400).json({ message: "error al guardar ek cikir" })
        : res.status(201).json({ message: `${pallete} fue agregado con exito!` });
    });
  };
