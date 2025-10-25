const Property = require("../../schema/properties");

const getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        return res.status(200).json(properties)
    } catch(error){
        return res.status(400).json({message: message.error})
    }
}

module.exports = {getProperties}