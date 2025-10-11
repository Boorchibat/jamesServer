const jwt = requrie("jsonwebtoken")

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWTSECRET, {expiresIn: "2h"})
}

module.exports = {createToken};