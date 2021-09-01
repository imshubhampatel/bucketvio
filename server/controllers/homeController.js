const data = require("../utilities/data");

module.exports.home = (req, res) => {
    res.send('<h1>hiii there im from home</h1>');
};

module.exports.data = (req, res) => {
    if (data) {
        return res.status(200).json({ message: "successfully fetched data", data: data });
    }
    return res.json({ msg: "there is no data in server" });

};
