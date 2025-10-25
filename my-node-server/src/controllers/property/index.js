const {createProperty} = require("./createProperty")
const {deleteProperty} = require("./deleteProperty")
const {getProperties} = require("./getProperties")
const {getProperty} = require("./getProperty")
const {updateProperty} = require("./updateProperty")

module.exports = {
    ...require("./createProperty"),
    ...require("./deleteProperty"),
    ...require("./getProperties"),
    ...require("./getProperty"),
    ...require("./updateProperty")
}