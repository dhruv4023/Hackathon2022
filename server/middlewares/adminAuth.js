import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decodeData.email)
    if (
      decodeData.email !== process.env.ADMINID &&
      decodeData.email !== process.env.ADMINID2
    )
      res.status(200).json(false);
    else {
      req.userId = decodeData?.id;
      next();
    }
  } catch (error) {
    res.status(200).json(false);
  }
};

export default adminAuth;
