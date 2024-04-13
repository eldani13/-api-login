import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

      res.json({ token });
    } else {
      res.status(401).json({ error: "Correo electronico o contraseña incorrectos" });
    }
  } catch (error) {
    console.error("Error al iniciar sesion", error);
    res.status(500).json({ error: "Error al iniciar sesion" });
  }
};

export default login;
