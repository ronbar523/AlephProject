const mongoose = require("mongoose");

const connectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  connectorType: {
    type: mongoose.SchemaTypes.ObjectId, 
    ref: 'ConnectorType',
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    optional: true, 
  },
  config: {
    type: mongoose.SchemaTypes.Mixed, 
    required: true,
  },
  credentials: {
    type: mongoose.SchemaTypes.Mixed, 
    required: true,
  },
});

const Connector = mongoose.model("Connectors", connectorSchema);

module.exports = {
  Connector,
};
