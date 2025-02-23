const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const User = require("../models/user");

exports.postRegisterUser = async (req, res, next) => {
  const { name, email, password, surname } = req.body;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: "Email, name and password are required" });

  const existingUser = await User.findOne({ where: { email: email } });

  if (existingUser)
    return res.status(409).json({ message: "User already exists" });

  try {
    const hashedPW = await bcrypt.hash(password, 12);

    const user = new User({
      name: name,
      email: email,
      password: hashedPW,
      surname: surname,
    });

    await user.save();

    return res
      .status(201)
      .json({ message: "User registered successfully", email });
  } catch (err) {
    return res.status(500).json({ message: "NE MOZE KRALJU SEJVAT" });
  }
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ message: "Invalid email or password" });

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "Couldnt find user" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { email: user.email, userId: user.id, name: user.name },
      "tajnarole",
      { expiresIn: "1h" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60,
        path: "/",
      })
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "some error occured" });
  }
};

exports.getUserSettings = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!req.userId) {
      return res.status(400).json({ message: "Not authenticated!" });
    }

    if (!userId) {
      return res.status(400).json({ message: "User ID is required!" });
    }

    if (req.userId !== Number(userId)) {
      return res.status(403).json({ message: "Unathorized accesss!" });
    }

    const existingUser = await User.findOne({ where: { id: userId } });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (existingUser.id !== req.userId) {
      return res.status(403).json({ message: "Unauthorized access!" });
    }

    return res.status(200).json(existingUser);
  } catch (err) {
    console.error("Error fetching user settings:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.postLogout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successfull!" });
};

exports.updateUser = async (req, res) => {
  if (!req.userId) {
    return res.status(403).json({ message: "Unathorized accesss!" });
  }

  const { userId } = req.params;

  console.log(userId);

  if (req.userId !== Number(userId)) {
    return res.status(403).json({ message: "Unathorized accesss!" });
  }

  const { name, surname, email } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required!" });
  }

  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "User not found!" });
  }

  user.name = name;
  user.surname = surname;
  user.email = email;

  await user.save();

  res.status(200).json({ message: "User updated successfully!" });
};
