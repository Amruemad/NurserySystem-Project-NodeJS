const jwt = require("jsonwebtoken");
const TeacherSchema = require("../Model/TeacherModel");

exports.login = (request, response, next) => {
  //   if (user == "Yasser" && pass == "123456") {
  //     var token = jwt.sign({ id: "0" }, process.env.SECRET_KEY, {
  //       expiresIn: "7d",
  //     });
  //     //   var teacher = new TeacherSchema({
  //     //     name: "Yasser",
  //     //     email: "yasser@gmail.com",
  //     //     password: "123456",
  //     //   });
  //   }

  TeacherSchema.findOne({
    username: request.body.fullname,
    password: request.body.password,
  })
    .then((object) => {
      if (!object) {
        throw new Error("User Not Found!");
      }
      let token = jwt.sign(
        {
          id: object._id,
          role: "teacher",
        },
        "secretKey",
        { expiresIn: "1h" }
      );
      response.status(200).json({ data: "Authenticated", token: token });
    })
    .catch((error) => next(error));
};
