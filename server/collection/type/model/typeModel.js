const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["accessKey", "region"],
      required: true,
    },
    type: {
      type: String,
      enum: ["text", "boolean", "select"],
      required: true,
    },
    validationRegex: {
      type: String,
      default: "",
    },
    isCredentials: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const connectorTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  fields: [fieldSchema],
});

const ConnectorType = mongoose.model("Connectors_Type", connectorTypeSchema);

module.exports = {
  ConnectorType,
};
