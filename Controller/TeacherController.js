const TeacherSchema = require("../Model/TeacherModel");
const ClassSchema = require("../Model/ClassModel");

exports.getAllTeachers = (request, response, next) => {
  TeacherSchema.find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getOneTeacher = (request, response, next) => {
  TeacherSchema.findOne({ _id: request.params.id })
    .then((object) => {
      response.status(200).json({ object });
    })
    .catch((error) => {
      next(error);
    });
};

exports.addTeacher = (request, response, next) => {
  const object = new TeacherSchema(request.body);
  object
    .save()
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateTeacher = (request, response, next) => {
  let teacherId = request.body._id;
  TeacherSchema.findByIdAndUpdate({ _id: teacherId }, request.body)
    .then((teacher) => {
      if (!teacher) {
        throw new Error("No Teacher Record Found");
      } else {
        response.status(200).json({ message: "Data is updated successfully." });
      }
    })
    .catch((error) => next(error));
};

exports.deleteTeacher = (request, response, next) => {
  TeacherSchema.deleteOne(request.body)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getAllSV = (request, response, next) => {
  ClassSchema.find({})
    .populate({ path: "teachers", select: { _id: 1 } })
    .then((data) => response.status(200).json(data))
    .catch((error) => next(error));
};
