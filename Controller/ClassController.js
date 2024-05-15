const ClassSchema = require("../Model/ClassModel");

exports.getAllClasses = (request, response, next) => {
  ClassSchema.find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getOneClass = (request, response, next) => {
  ClassSchema.findOne({ _id: request.params.id })
    .then((object) => {
      response.status(200).json({ object });
    })
    .catch((error) => {
      next(error);
    });
};

exports.addClass = (request, response, next) => {
  const object = new ClassSchema(request.body);
  object
    .save()
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateClass = (request, response, next) => {
  ClassSchema.updateOne(request.body)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.deleteClass = (request, response, next) => {
  ClassSchema.deleteOne(request.body.id)
    .then((data) => {
      response.status(200).json({ message: "Class deleted successfully" });
    })
    .catch((error) => next(error));
};

exports.getClassChildren = (request, response, next) => {
  ClassSchema.findOne({ _id: request.params.id })
    .populate({ path: "childrenID", select: { fullname: 1 } })
    .then((data) => response.status(200).json({ data }))
    .catch((error) => next(error));
};

exports.getClassTeachers = (request, response, next) => {
  ClassSchema.findOne({ _id: request.params.id })
    .populate({ path: "supervisor", select: { fullname: 1 } })
    .then((data) => response.status(200).json({ data }))
    .catch((error) => next(error));
};
