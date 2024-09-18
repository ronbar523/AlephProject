const Joi = require("joi");

const urlRegex =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#]+\/?)*(\?[a-zA-Z0-9=&]*)?/;
const RegexToken1 = `^[0-9]{6,12}$`;
const RegexToken2 = `^[a-zA-Z0-9]{6,12}$`;
const RegexToken3 = `^[a-zA-Z]{6,12}$`;

const fieldSchema = Joi.object({
  name: Joi.string().valid("accessKey", "region").required(),
  type: Joi.string().valid("text", "boolean", "select").required(),
  validationRegex: Joi.string()
    .allow("")
    .valid(RegexToken1, RegexToken2, RegexToken3)
    .optional(),
  isCredentials: Joi.boolean().required(),
});

const connectorTypeSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().pattern(urlRegex).optional(),
  category: Joi.string().required(),
  fields: Joi.array().items(fieldSchema).required(),
});

module.exports = {
  createSchema: connectorTypeSchema,
};
