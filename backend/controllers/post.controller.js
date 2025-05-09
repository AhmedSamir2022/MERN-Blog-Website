import ImageKit from "imagekit";
import Post from "../models/post.model.js"
import User from "../models/user.model.js"
//get all posts from database and send it to frontend
export const getPosts = async (req,res) => {
    const posts = await Post.find();
    res.status(200).send(posts);
}
//get specific post from database and send it to frontend
export const getPost = async (req,res) => {
    const post = await Post.findOne({slug: req.params.slug});
    res.status(200).send(post);
}
//recieve new created post and save it in database
export const createPost = async (req,res) => {
    // console.log(req.headers)
    const clerkUserId = req.auth.userId;

    if(!clerkUserId){
        return res.status(401).json("Not authenticated!")
    }

    console.log(clerkUserId)
    
    const user = await User.findOne({clerkUserId});

    console.log(user)
    
    if(!user) {
        // console.log("user not found");
        
        return res.status(404).json("User not found!")
    }

    //add slug to the new post
    let slug = req.body.title.replace(/ /g,"-").toLowerCase()

    let existingPost = await Post.findOne({ slug })

    let counter = 2

    while(existingPost) {
        slug = `${slug}-${counter}`
        existingPost = await Post.findOne({ slug })
        counter++
    }

    const newPost = new Post({user:user._id, slug, ...req.body});

    const post =  await newPost.save();
    res.status(200).json(post);
}
//delete post from database
export const deletePost = async (req,res) => {
    const clerkUserId = req.auth.userId;
    if(!clerkUserId) {
        return res.status(401).json("Not authenticated!")
    }

    const user = await User.findOne({clerkUserId});

    const deletedPost = await Post.findByIdAndDelete({_id:req.params.id, user: user._id});

    if(!deletePost) {
        return res.status(403).json("You can delete only your posts!")
    }
    
    res.status(200).json("post has been deleted")
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY 
})

export const uploadAuth = async (req, res) => {
    const result = imagekit.getAuthenticationParameters()
    res.send(result)
}
