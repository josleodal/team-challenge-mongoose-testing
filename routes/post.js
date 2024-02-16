const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/create', async (req, res) => {
    try{
        const {title,body} = req.body;
        if(!title || !body) {
            return res.status(400).json({error:'Proporcionar todos los datos'})
        }
        const newPost = new Post({title,body});
        const savePost = await newPost.save();
        res.status(201).json(savePost);
    }catch(error) {
        res.status(500).json({error:'Error mensage'});
    }

})



router.get("/",async (req, res)=>{
    try {
        const post = await Post.find();
        res.json(post)
        
    } catch (error) {
    console.error(error)
    es.status(500).json({ error: 'Ha habido un problema para obtener el post' })
    }

});



router.get('/id/:_id', async (req,res) => {
    try{
        const post = await Post.findById(req.params._id)
        if(!post) {
            return res.status(404).json({error:'Publicacion no encontrada'});
        }
        res.json(post);
    }catch(error) {
        res.status(500).json({error:error.mensage})
    }
});  

router.get('/title/:title', async (req, res) => {
    try {
        const post = await Post.findOne({ title: req.params.title });
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'There was a problem trying to get a post by title' });
    }
});

router.put('/id/:_id', async (req,res) =>{
    try{
        const {title , body} = req.body;
        const updatedPost = await Post.findByIdAndUpdate(req.params._id , {title , body} , {new: true});
        if(!updatedPost) {
            return res.status(404).json({error:'Publicacion no encontrada'});
        }
        res.json(updatedPost)
    }catch (error) {
        res.status(500).json({error:error.mensage});
    }
});

router.delete('/id/:_id', async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params._id);
      res.json({ message: 'Post eliminado satisfactoriamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ha habido un problema para eliminar el post' });
    }
  });

module.exports = router;

