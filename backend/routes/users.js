const router = require('express').Router();
const {User} = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const privateKey = require('config').get('privateKey');

/**
 * @route Post api/users/register
 * @desc Register user route
 * @access Public
*/
router.post('/register', async(req, res) => {
    //check if user is already registered or not, if yes return
    const user = await User.findOne({ email: req.body.email })
    if(user) return res.status(400).json({ message: 'email aldreay exists'});

    //create new user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });


    //Store password as hash
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if(err) throw new Error(err);
            // Store hash in your password DB.
            newUser.password = hash
            newUser.save()
                .then((user) => res.json(user))
                .catch(err => console.log(err));
        });
    });

});

/**
 * @route Post api/users/login
 * @desc login user route
 * @access Public
*/
router.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email });
    if(!user) return res.status(404).json({ email: 'User not found'});

    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
        const payload = { id: user.id, name: user.name, avatar: user.avatar}
        jwt.sign(payload, privateKey, { expiresIn: 3600 },
            (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token,
                    err: err
                });
            })
    } else {
        res.status(400).json({ password: 'password is incorrect'});
    }
});
module.exports = router;