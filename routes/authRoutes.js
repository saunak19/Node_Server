const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const user = mongoose.model("User");
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');



//
require('dotenv').config();
//
const bcrypt = require('bcrypt');


router.post('/signup', (req, res) => {
    // res.send('This is a signup page');
    console.log(`send by client -`, req.body);
    const { name, email, password, dob } = req.body;

    if (!email || !password || !name || !dob) {
        return res.status(422).json({ error: "Please provide all the required fields" });
    }

    User.findOne({ email: email })
        .then(
            async (savedUser) => {
                if (savedUser) {
                    return res.status(422).send({ error: "Invalid Credentials" });
                }
                const user = new User({
                    name,
                    email,
                    password,
                    dob
                })

                try {
                    await user.save();
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                    res.send({ token });
                }
                catch (err) {
                    console.log(`db ${err}`)
                    return res.status(422).send({ error: err.message })
                }
            }
        )
})

module.exports = router;
