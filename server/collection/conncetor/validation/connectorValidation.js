const joi = require("joi");
const urlRegex =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9=&]*)?/;

const tokenRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,12}$/;

const connectorSkeleton = joi.object({
  name: joi.string().min(3).max(15).required(),
  status: joi.string().required(),
  description: joi.string().min(10).max(200).required(),
  config: joi.object().required(),
  credentials: joi.object().required(),
});


module.exports = {
  createSchema: connectorSkeleton
};
