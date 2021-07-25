const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(400).json({message: "Access denied , no token provided"});
    }
    try {
        const decode = jwt.verify(token, process.env.ACCESSTOKEN_SECRET);
        res.locals = decode;
        next();
    } catch (error) {
        return res.status(400).json({message: "invalid token"});

    }
};

module.exports = auth;