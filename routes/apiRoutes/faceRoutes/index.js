var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
const request = require('request');

const db = require('../../../models');

fetch.promise = global.Promise;

const api_key = 'STazy3Z1LYDPb5XOtBdIcn4wbr0BPlFb';
const api_secret = 'V4ooYa54S7Ze1IO8o07fac4Q2MziZI5w';
const outer_id = 'celebs';
const detect_url = `https://api-us.faceplusplus.com/facepp/v3/detect`;
const add_url = `https://api-us.faceplusplus.com/facepp/v3/faceset/addface`;
const search_url = "https://api-us.faceplusplus.com/facepp/v3/search";

router.post('/add', function (req, res) {

   const image_url = req.body.image_url
   const celeb_name = req.body.name

   const detectData = {
      api_key: api_key,
      api_secret: api_secret,
      image_url: image_url
   }

   let add = new Promise(function (response, err) {
      request.post({ url: detect_url, formData: detectData }, (err, detectRes, detectBody) => {
         if (err) {
            console.log(err);
         }
         const face_token = JSON.parse(detectBody).faces[0].face_token;

         db.Celeb.create({
            name: celeb_name,
            url: image_url,
            token: face_token
         })
            .then(function (result) {
               console.log('celebrity added to database')
            })
            .catch(function (e) {
               console.log(e)
            });

         const addData = {
            api_key: api_key,
            api_secret: api_secret,
            outer_id: outer_id,
            face_tokens: face_token
         }
         request.post({ url: add_url, formData: addData }, (err, addRes, addBody) => {
            if (err) {
               console.log(err);
            }
            let count = JSON.parse(addBody).face_count
            response(count)
         })
      })
   })
   add.then(function (count) {
      res.json(`${celeb_name} added! There are now ${count} faces in ${outer_id}.`)
   });
})

router.post('/search', async function (req, res) {

   const user_id = req.body.user_id
   const image_url = req.body.image_url

   const searchData = {
      api_key: api_key,
      api_secret: api_secret,
      image_url: image_url,
      outer_id: outer_id,
      return_result_count: 5
   }
   let matches = new Promise(function (response, err) {
      request.post({ url: search_url, formData: searchData }, (e, searchRes, searchBody) => {
         if (e) {
            console.log(e);
         }
         let results = JSON.parse(searchBody).results
         const celebs = [];
         async function find() {
            try {
               await db.User.findByIdAndUpdate(user_id,{url: image_url, matches : []})
               for (let i = 0; i < results.length; i++) {
                  let celeb = await db.Celeb.find({ token: results[i].face_token })
                  await db.Match.create({
                     user: user_id,
                     celeb: celeb[0]._id,
                     confidence: results[i].confidence
                  })
                  let match_id = await db.Match.findOne({ user: user_id, celeb: celeb[0]._id })
                  await db.User.findOneAndUpdate({ _id: user_id }, 
                     { $push: { matches: match_id } }, { new: true });
                  celebs.push({ confidence: results[i].confidence, celeb: celeb[0].name, url: celeb[0].url})
               }
               response(celebs)
            } catch (e) {
               console.log(e)
            }
         }
         find();
      })
   })
   matches.then(function (celebrities) {
      res.json(celebrities)
   });
})

router.get('/user/:id', async function (req, res) {
   const user_id = req.params.id
   try {
      let user = await db.Match.find({ user: user_id }).populate('celeb')
      const matches = []
      for (let i = 0; i < user.length; i++) {
         const { name, url } = user[i].celeb
         const { confidence } = user[i]
         matches.push({ name, url, confidence })
      }
      res.json(matches)
   } catch (e) {
      console.log(e)
   }
})

router.delete(':user_id', async function (req, res) {
   try {
      await db.User.findByIdAndDelete(user_id);
      await db.Match.finByIdAndDelete({ user: _id })
      res.json({ success: true })
   }
   catch (e) {
      res.json(e);
   }
   
   
})

router.get('/all', async function (req, res) {
   try {
      const data = []
      let users = await db.User.find()
      for (let i = 0; i < users.length; i++) {
         const { _id, email, url } = users[i]
         let celeb = await db.Match.findOne({ user: _id }).populate('celeb')
         const celeb_name = celeb.celeb.name
         const celeb_url = celeb.celeb.url
         data.push({ email, url, celeb_name, celeb_url })
      }
      res.json(data)
   } catch (e) {
      console.log(e)
   }
})

module.exports = router;
