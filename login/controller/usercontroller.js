
const Joi=require('joi')
const db=require('../models')
const bcrypt=require('bcrypt')
const { reject } = require('bcrypt/promises')
const jwt=require('jsonwebtoken')


const SchemaValidation=Joi.object({
    username:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
})

exports.register=(username,email,password)=>{
    return new Promise((resolve,reject)=>{
        let validation=SchemaValidation.validate({username,email,password})
        if(validation.error){
            reject(validation.error.details[0].message)
        }
        db.User.count({where:{email:email}}).then(doc=>{
            if(doc!=0){
                reject("this email is used")
            }{
                bcrypt.hash(password,10).then(hashedPassword=>{
                    db.User.create({
                                username:username,
                                email:email,
                             password:hashedPassword
                             }).then((response)=>resolve(response) )
                            .catch((err)=>reject(err))
                })
            }
        })
    
    })
    
}

const PrivateKey="This is private Key qsrgsersetyzety!!;:,;,:,;ù^^é',;:;:;k;^$ù^ùm^m"

exports.login=(email,password)=>{
    return new Promise ((resolve,reject)=>{

        db.User.findOne({where:{email:email}}).then(user=>{
            if(!user){
                reject("invalid email and password")
            }else{
                bcrypt.compare(password,user.password).then(same=>{
                    if(same){
                        let token=jwt.sign({id:user.id,username:user.id,role:"userrole"},PrivateKey,{
                            expiresIn:"10h"
                        })
                        resolve({token})
                    }else{
                        reject("invalid email and password")
    
                    }
                })
            }
        })





    })
}