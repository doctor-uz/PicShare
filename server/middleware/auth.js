import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      //if it is our token
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      //if it is GOOGLE token
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next(); //click the LIKE button => auth middleware(NEXT) => like controller
  } catch (error) {
    console.log(error);
  }
};

export default auth;
