const Property = require("../../schema/properties")


const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getProperties,
}