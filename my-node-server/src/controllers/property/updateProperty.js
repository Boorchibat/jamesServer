const mongoose = require("mongoose");
const Property = require("../../schema/properties");

const updateProperty = async (req, res) => {
  const { id } = req.params;
  const {
    address,
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

  if (!address || !description || !title || !type || !city || !neighborhood || !year || !sqft || !bedrooms || !bathrooms || balcony === undefined || !mainImage || !images) {
    return res.status(400).json({ message: "Please enter all the fields" });
  }

  try {
    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      {
        address: address || existingProperty.address,
        description: description || existingProperty.description,
        title: title || existingProperty.title,
        type: type || existingProperty.type,
        city: city || existingProperty.city,
        neighborhood: neighborhood || existingProperty.neighborhood,
        year: year || existingProperty.year,
        sqft: sqft || existingProperty.sqft,
        bedrooms: bedrooms || existingProperty.bedrooms,
        bathrooms: bathrooms || existingProperty.bathrooms,
        balcony: balcony ?? existingProperty.balcony,
        mainImage: mainImage || existingProperty.mainImage,
        images: images || existingProperty.images,
      },
      { new: true }
    );

    return res.status(200).json(updatedProperty);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { updateProperty };
