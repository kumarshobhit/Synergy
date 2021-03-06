const express= require('express')
const router=express.Router() ;
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const config=require('config') 
const auth=require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User=require('../models/User')


// @route GET api/auth
// @desc  GET logged in user
// @access Private
router.get('/',auth,async (req,res) => {
    try{
        const user=await User.findById(req.user.id).select('-password') ;
        res.json(user) ;
    }
    catch(err){
        console.log(err.message)
        res.status(500).send('Server Er ror')
    }
})

// @route POST api/auth
// @desc  Auth user and get token
// @access PUblic
router.post('/',[
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a valid password with 6 or more characters').isLength({min:6})
],
async (req,res) => {
    const errors=validationResult(req) ;
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()}) ;
    }
    const {email,password}=req.body ;
    try{
        let user=await User.findOne({email}) ;

        if(!user){
            return res.status(400).json({msg:"Invalid Credentials"}) ;
        }

        const isMatch=await bcrypt.compare(password,user.password) ;

        if(!isMatch) return res.status(400).json({msg:'Invalid Credentials'}) ;

         const payload={
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn: 360000
        },(err,token)=>{
            if(err) throw err ;
            res.json({token}) ;
        })

    }
    catch(err){
         console.error(err.message)
        res.status(500).send('server error') ;
    }
})

module.exports=router ;