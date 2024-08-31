// import User from '../models/user.model.js'
const User = require('../models/user.model')

const create = async (req, res) => {
  try {
    await User.create(req.body)
    return res.status(200).json({
      message: "Created new user!"
    })
  } catch (err) {
    console.error(err)
    return { error: err }
  }
}

const list = async (req, res) => {
  try {
    let users = await User.findAll()
    res.json(users)
  } catch (err) {
    console.error(err)
    return { error: err }
  }
}

const update = async (req, res) => {
  try {
    let user = await User.findByPk(req.params.ref)
    user.set(req.body)
    await user.save()
    res.json(user)
  } catch (err) {
    console.error(err)
    return { error: err }
  }
}

const remove = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.ref)
    await user.destroy()
    res.json(user)
  } catch (err) {
    console.error(err)
    return { error: err }
  }
}

module.exports = { create, list, remove, update }

// const User = require('../models/user.model');
// const jwt = require('jsonwebtoken');
// // const jwt_key = require('../config/config')

// const login = async (req, res) => {
//   console.log(req.body)
//   // let user = await User.findOne(req.body).select('-password');
//   if (req.body.name && req.body.password) {
//     let user = await User.findOne({
//       where: req.body,
//       attributes: { exclude: ['password'] },
//     });
//     if (user) {
//       jwt.sign({ user }, "MLqjN80VjuRKQpqVFxdCJrgH4mvdgWmp", { expiresIn: "300s" }, (err, token) => {
//         if (err) {
//           res.send({ result: "somthig went wrong" })
//         }
//         res.send({ user, auth: token })
//       });

//     } else {
//       res.send({ result: "No User Found" })
//     }
//   } else {
//     res.send({ result: "No User Found" })
//   }
// }

// const logout = (req, res) => {
//   res.clearCookie('token');
//   res.json({ Status: "Success" });
// };

// module.exports = { login, logout };