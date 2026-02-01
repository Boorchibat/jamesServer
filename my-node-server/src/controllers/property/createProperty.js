const Property = require("../../schema/properties");

const createProperty = async (req, res) => {
  const {
    address,
    price,
    description,
    title,
    type,
    city,
    neighborhood,
    year,
    sqft,
    bedrooms,
    bathrooms,
    balcony,
    mainImage,
    images,
  } = req.body;
  if (
    !address ||
    !description ||
    !price ||
    !title ||
    !type ||
    !city ||
    !neighborhood ||
    !year ||
    !sqft ||
    !bedrooms ||
    !bathrooms ||
    !balcony ||
    !mainImage ||
    !images
  ) {
    res.status(400).json({ message: "Please enter all the fields" });
  }
  try {
    const property = await Property.create({
      address,
      description,
      price,
      title,
      type,
      city,
      neighborhood,
      year,
      sqft,
      bedrooms,
      bathrooms,
      balcony,
      mainImage,
      images,
    });
    return res.status(201).json({ property });
  } catch (error) {
    res.status(400).json({ message: message.error });
  }
};

module.exports = { createProperty };
