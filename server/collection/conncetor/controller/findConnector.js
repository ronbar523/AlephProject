const ConnectorModel = require("../model/function/connectorFunction");

const findAll = async (req, res) => {
  try {
    const connectorsArr = await ConnectorModel.findAllConnector();

    res.json({ response: connectorsArr });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  findAll,
};
