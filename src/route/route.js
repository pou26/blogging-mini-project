const express = require('express');
const router = express.Router();
const authorController = require('../Controller/AuthorController.js');
const blogController = require('../Controller/BlogController.js');
const validator = require('../middleware/auth.js')




router.post("/authors",authorController.createAuthor);
router.post("/loginAuthor",authorController.loginAuthor);
router.post("/blogs",validator.authenticate,blogController.createBlog);
router.get("/getblog",validator.authenticate,blogController.getBlog);
router.put("/updateBlogs/:blogId",validator.authenticate,blogController.updateBlogs);

router.delete("/deleteBlog/:blogId",validator.authenticate,blogController.deleteBlog);
router.delete("/deleteByQuery",validator.authenticate,blogController.deleteByQuery);
router.all("/*",(req,res)=>{res.status(404).send({status:false,message:"Endpoint is not correct"})})

module.exports = router;