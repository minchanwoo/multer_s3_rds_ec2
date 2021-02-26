const express = require('express');

const router = express.Router();
const { User } = require('../models');
const path = require('path');


const multer  = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

var s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
});

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'mavel-imgs',
        acl: 'public-read',
        metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname))
        }
    })
});


router.post('/', upload.single('image'), async(req, res) => {
    console.log('BODY~!!', req.body)
    console.log('FILE~!!!', req.file.location);
    const { name, nick, password } = req.body;
    const result = await User.create({
            name,
            nick,
            password,
            img: req.file.location
        })
        res.send(result)
    })
    
router.get('/', async(req, res) => {
    const users = await User.findAll({});
    res.send(users)
});

module.exports = router;