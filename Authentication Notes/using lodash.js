const _ =require('lodash');


//if you want to pick some properties of an object
let b=_.pick(req.body,['name','email']);// used in users route in binge


// for validating a strict password use joi-password-complexity



/***********************using bcrypt***********************************/
const bcrypt = require('brypt');


aysnc function run()
{
    const salt=await bcrypt.genSalt(10);//salt is a string padded in start of hash
    const hashed_password=await bcrypt.hash(password,salt);
    
    const isValidPassword=await bcrypt.compare(req.body.password,user.password);
    //first arg is plain text password which we get from req.body
    //second is hashed password which we get from database
}


/*************************************Using JSON Web Tokens *********************/


const jwt=require('jsonwebtoken');
const token=jwt.sign({/*payload*/ },'jwtPrivateKey');


const token=jwt.sign({_id:user._id},config.get('jwtPrivateKey'));



