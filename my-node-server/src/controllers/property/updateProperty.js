const mongoose = require("mongoose");
const Property = require("../../schema/properties");
const { findByIdAndUpdate } = require("../../schema/userSchema");

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
  if (
    !address ||
    !description ||
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
    const updateProperty = await Property.findByIdAndUpdate(
      id,
      {
        address: address || Property.address,
        description: description || Property.description,
        title: title || Property.title,
        type: type || Property.type,
        city: city || Property.city,
        neighborhood: neighborhood || Property.neighborhood,
        year: year || Property.year,
        sqft: sqft || Property.sqft,
        bedrooms: bedrooms || Property.bedrooms,
        bathrooms: bathrooms || Property.bathrooms,
        balcony: balcony || Property.balcony,
        mainImage: mainImage || Property.mainImage,
        images: images || Property.images,
      },
      { new: true }
    );
    return res.status(201).json(updateProperty);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { updateProperty };
