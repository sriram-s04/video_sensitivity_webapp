import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/jwt.js";

// Register new user
export const register = async (req, res, next) => {
  try {
    const { email, password, role, organizationId } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      organizationId,
    });

    res.status(201).json({ message: "User registered", userId: user._id });
  } catch (error) {
    next(error);
  }
};

// Login user
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken({
      id: user._id,
      role: user.role,
      organizationId: user.organizationId,
    });

    res.json({ token, role: user.role, userId: user._id });
  } catch (error) {
    next(error);
  }
};
