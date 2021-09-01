const User = require('../../../models/userSchema');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userApi = {

    register: async (req, res) => {
        let { name, password, email } = req.body;
        try {
            await User.findOne({ email: req.body.email }, async (err, user) => {
                if (err) { console.log("Error in finding user in database ", err); }
                if (!user) {
                    var hashPassword = bcrypt.hashSync(password, 10);
                    user = new User({ name, email, password: hashPassword });
                    await user.save();
                    console.log("user.save");
                    console.log(user._id);
                    const accessToken = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
                    const refreshToken = await jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

                    res.cookie("refreshToken", refreshToken, {
                        httpOnly: true,
                        path: "/api/v1/users/refresh-token",
                    })
                    if (accessToken) {
                        return res.status(200).json({ message: "User Resgister successfully", data: { success: true, token: accessToken } });
                    }
                }
                // handling if user already in databse 
                else if (user) {
                    console.log("insdie uuer")
                    return res.status(400).send({ message: "user already registerd", data: { success: false } });
                }
                else {
                    res.status(401).send("invalid authentication");
                }
            });
        } catch (err) {
            console.log("insdie catch")
            if (err) { console.log(err); }
            // res.status(404).json({"Error": err});
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            // finding the user in database 
            await User.findOne({ email }, async (err, user) => {
                if (err) { console.log(err); }
                else if (!user) {
                    res.status(404).json({ message: "User not registered" });
                }
                // if user found then 
                else if (user) {
                    let isMatch = await bcrypt.compare(password, user.password);
                    if (!isMatch) {
                        return res.status(401).json({ message: "Password didn'nt match", data: { success: false } });
                    }
                    if (isMatch) {
                        console.log(user._id);
                        const accessToken = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
                        const refreshToken = await jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
                        res.cookie("refreshToken", refreshToken, {
                            httpOnly: true,
                            path: "/api/v1/users/refresh-token",
                        })
                        return res.status(200).json({ message: "login successully", data: { success: true, token: accessToken } });
                    }
                }
                else {
                    return res.status(404).json({ message: "user not found", data: { success: false } });
                }
            });
        }
        catch (err) {
            if (err) {
                return res.status(404).json({ message: err, data: { success: false } });
            }
        }
    },
    user: (req, res) => {
        return res.status(200).json(req.user)
    },
    logout: (req, res) => {
        return res.header();
    },
    refreshToken: async (req, res) => {
        try {
            const rf_Token = await req.cookies.refreshToken;
            if (!rf_Token) {
                return res.status(401).json({ success: false, message: "Please Login or Sign Up first" });
            }
            if (rf_Token) {
                jwt.verify(rf_Token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
                    if (err) { return res.status(401).json({ success: false, message: "Eror Please Login or Sign Up first" }); }
                    if (user) {
                        const accessToken = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
                        return res.status(200).json(({ success: true, token: accessToken }));
                    }

                })
            }


        } catch (error) {

        }


    }
}

module.exports = userApi;


