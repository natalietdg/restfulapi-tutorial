const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GETS BACK ALL THE POSTS
router.get('/', async (req, res)=>{
    try {
        const posts = await Post.find(); //many options after .find(), like .limit()
        res.json(posts);
    }
    catch(err) {
        res.json({ message: err});
    }
});

router.get('/specific', (req,res)=>{
    res.send("Specific post");
});

//SUBMITS A POST
router.post('/', async (req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    // post.save()
    // .then(data => {
    //     res.status(200).json(data);
    // })
    // .catch(err => {
    //     res.json({ message: err });
    // });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }
   catch (err) {
       res.json({ message: err });
   }
});

//specific post
router.get('/:postId', async (req, res)=>{
    try {
        const post = await Post.findById(req.params.postId);

        res.json(post);
    }
    catch (err) {
        res.json({ message: err});
    }
});

//Delete post
router.delete('/:postId', async (req, res)=>{
    try {
        const post = await Post.remove({_id: req.params.postId});
        res.json(post);
    }   
    catch(err) {
        res.json({ message: err });
    }
    
});

//Update post
router.patch('/:postId', async(req, res)=>{
    try {
        const post = await Post.updateOne({_id: req.params.postId}, { $set: {title: req.body.title} }
        );
        res.json(post);
    }
    catch(err) {
        res.json({ message: err });
    }
    
})

module.exports = router;