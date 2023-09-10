import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
//  In middleware one more argument next object
// Middleware if req get then next validate then res send
// no next then execution pause and dont show next code not process
// more details follow documentation

//Middle ware :- a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

// validate for authenticate users
export const requireSignIn = async (req, res, next) => {
  try {
    // verify token , token in headers
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // decode
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// Protect any route

//admin acceess, compare field in database 0 is user and 1 is admin
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
