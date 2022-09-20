import jwt from "jsonwebtoken";
import users from "../models/auth.js";

export const login = async (req, res) => {
  const { email } = req.body;
  console.log(req.body)
    try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      try {
        const newUser = await users.create({ email });
        const token = jwt.sign(
          { email: newUser.email, id: newUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({ result: newUser, token });
      } catch (err) {
        res.status(500).json({ mess: "something wents wrong . . ." });
      }
    } else {
      const token = jwt.sign(
        { email: existinguser.email, id: existinguser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ result: existinguser, token });
    }
  } catch (err) {
    res.status(500).json("something wents wrong . . .");
  }
};
