const ChildSchema = require("../Model/ChildModel");

exports.getAllChildren = (request, response, next) => {
  ChildSchema.find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getOneChild = (request, response) => {
  ChildSchema.findOne({ _id: request.params.id })
    .then((object) => {
      response.status(200).json({ object });
    })
    .catch((error) => {
      next(error);
    });
};

exports.addChild = (request, response, next) => {
  const object = new ChildSchema(request.body);
  object
    .save()
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateChild = (request, response, next) => {
  ChildSchema.updateOne(request.body)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.deleteChild = (request, response, next) => {
  ChildSchema.deleteOne(request.body)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};
