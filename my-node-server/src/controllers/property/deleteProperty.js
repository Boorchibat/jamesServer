const mongoose = require("mongoose");
const Property = require("../../schema/properties");
const { findByIdAndDelete } = require("../../schema/userSchema");

const deleteProperty = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: "ID is not valid"})
    }
    try {
        const property = await Property.findById(id)
        if(!property){
            res.status(400).json({message: "Property not found"})
        }
        const deleteProperty = await Property.findByIdAndDelete(id);
        res.status(200).json(deleteProperty)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

module.exports = {deleteProperty}