const router = require('express').Router();
const aws = require('aws-sdk');

const db = require('../../../models');

router.get('/sign-s3', (req, res) => {
    const user_id = "5dcc7dc7877529002a7e7acf"
    const S3_BUCKET = process.env.S3_BUCKET || 'friend-finder-assets';
    aws.config.region = 'us-west-1';
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
        db.User.findByIdAndUpdate(user_id, { url: returnData.url })
            .then(function (result) {
                console.log('user url updated')
                res.write(JSON.stringify(returnData));
                res.end();
            })
            .catch(function (e) {
                res.write(JSON.stringify(e));
                res.end();
            });
    });
});

module.exports = router;