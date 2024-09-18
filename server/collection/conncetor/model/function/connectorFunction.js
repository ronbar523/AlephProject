const { Connector } = require("../connectorModel");

const createConnector = async (
  name,
  connectorType,
  status,
  description,
  config,
  credentials
) => {
  const newConnector = new Connector({
    name,
    connectorType,
    status,
    description,
    config,
    credentials,
  });

  return newConnector.save();
};


const findAllConnector = () => {
  return Connector.find({
  })
};

module.exports = {
  createConnector,
  findAllConnector
};
