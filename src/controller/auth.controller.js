import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { craeteAccsesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new user({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await craeteAccsesToken({ id: userSaved._id });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await user.findOne({ email });
    console.log(
      "🚀 ~ file: auth.controller.js:38 ~ login ~ userFound:",
      userFound
    );
    if (!userFound) res.status(400).json({ mesasge: "user not found" });

    const isMatch = bcrypt.compare(password, userFound.password);
    if (!isMatch) res.status(400).json({ message: "incorect password" });

    const token = await craeteAccsesToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export function logout(req, res) {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
}

export const profile = async (req, res) => {
  const userFound = await user.findById(req.user.id);
  if (!userFound) return res.status(404).json({ message: "User not found" });

  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
  });
};
