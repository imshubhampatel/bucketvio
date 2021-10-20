const User = require('../../../models/userSchema');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const formidable = require("formidable");
const getFromData = require("../../../utilities/formData")

const userApi = {
    register: async (req, res) => {
        let form = formidable.IncomingForm();
        let formData = await getFromData(form, req);
        const { fields: {
            email,
            firstName,
            lastName,
            age,
            gender,
            profileImage,
            street,
            city,
            district,
            state,
            pincode,
            mobileOne,
            mobileTwo,
            password

        }, files } = formData;
        console.log(email)
        try {
            let user = await User.findOne({
                $or: [
                    { "userContact.email": email },
                    { "userContact.mobileOne": mobileOne },
                    { "userContact.mobileTwo": mobileTwo },
                ]
            }, { userContact: 1, _id: 0 })
            console.log(user)
            if (user) return res.status(400).json({ error: true, data: { message: "User already Resgistered", user } });
            if (!user) {
                let hashPassword = await bcrypt.hashSync(password, 10);
                user = await new User({
                    userInfo: {
                        firstName,
                        lastName,
                        age,
                        gender,
                        profileImage,
                    },
                    userContact: {
                        email,
                        mobileOne,
                        mobileTwo,
                    },
                    userAddress: {
                        street,
                        city,
                        district,
                        state,
                        pincode,
                    },
                    password: hashPassword
                });
                await user.save()
                console.log("user registered")
                const accessToken = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
                const refreshToken = await jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

                res.cookie("refreshToken", refreshToken, {
                    sameSite: "strict",
                    path: "/api/v1/users/refresh-token",
                    expire: 1000 * 60 * 60 * 24 * 7,
                    secure: true,
                    httpOnly: true,
                })
                if (accessToken) {
                    return res.status(200).json({ error: false, data: { message: "User Resgister successfully", token: accessToken } });
                }
            }

        } catch (error) {
            console.log("inside catch Block ")
            res.status(404).json({ data: { success: false, Error: error } });
        }
    },
    login: async (req, res) => {
        console.log(req.body)
        const { email, password } = req.body;
        try {
            // finding the user in database 
            await User.findOne({ 'userContact.email': email }, async (err, user) => {
                if (err) { console.log(err); }
                else if (!user) res.status(404).json({ error: true, data: { message: "Please register first", token: null } });
                // if user found then 
                else if (user) {
                    console.log("found", user)
                    let isMatch = await bcrypt.compare(password, user.password);
                    if (!isMatch) return res.status(401).json({ message: "Incorrect Password ", data: { success: false, token: null } });
                    if (isMatch) {
                        console.log(user._id);
                        const accessToken = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
                        const refreshToken = await jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
                        res.cookie("refreshToken", refreshToken, {
                            sameSite: "strict",
                            path: "/api/v1/users/refresh-token",
                            expire: 1000 * 60 * 60 * 24 * 7,
                            httpOnly: true,
                            secure: true,
                        })
                        return res.status(200).json({ error: false, data: { message: "Login successully", token: accessToken } });
                    }
                }
                else {
                    return res.status(404).json({ message: "Invalid Authentication", data: { success: false, token: null } });
                }
            });
        }
        catch (err) {
            if (err) {
                return res.status(404).json({ message: err, data: { success: false, token: null } });
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
                return res.status(401).json({ data: { success: false, message: "Please Login or Sign Up first" } });
            }
            if (rf_Token) {
                jwt.verify(rf_Token, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
                    if (err) {
                        return res.status(401).json({ data: { success: false, message: "Eror Please Login or Sign Up first" } });
                    }
                    if (user) {
                        const accessToken = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
                        return res.status(200).json(({ error: false, data: { accessToken: accessToken } }));
                    }
                })
            }
        } catch (error) {
            return res.status(404).send(error)
        }
    }
}

module.exports = userApi;




/*

                    */