const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  try {
    let token = request.get("authorization").split(" ")[1];
    let decodedToken = jwt.verify(token, "secretKey");
    request.token = decodedToken;
    next();
  } catch (error) {
    // console.log(error);
    let errorObject = new Error("Not authenticated");
    errorObject.statusCode = 401;
    next(errorObject);
  }
};

module.exports.isAdmin = (request, response, next) => {
  if (request.token.role == "teacher") next();
  else {
    let errorObject = new Error("You are not authorized!");
    errorObject.statusCode = 403;
    next(errorObject);
  }
};
