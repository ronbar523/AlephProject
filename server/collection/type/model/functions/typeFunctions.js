const { ConnectorType } = require("../typeModel");

const createType = async (name, image, category, fields) => {
  try {
    const newType = new ConnectorType({
      name,
      image,
      category,
      fields, 
    });
    
    const savedType = await newType.save();
    return savedType;
  } catch (error) {
    throw new Error(`Error creating connector type: ${error.message}`);
  }
};
const findTypeByName = (name) => {
  return ConnectorType.find({
    name: { $regex: "^" + name.toString(), $options: "i" },
  });
};

const findAllType = () => {
  return ConnectorType.aggregate([
    {
      $addFields: {
        lowerName: { $toLower: "$name" },
      },
    },
    {
      $sort: {
        category: 1,
        lowerName: 1,
      },
    },
  ]);
};

module.exports = {
  createType,
  findAllType,
  findTypeByName,
};
