const mongoose = require("mongoose");
const Property = require("../../schema/properties");

const getProperty = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "ID is not valid" });
  }
  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(400).json({ message: "No property found" });
    }
    return res.status(200).json(property);
  } catch (error) {
    return res.status(400).json({ message: message.error });
  }
};
module.exports = { getProperty };