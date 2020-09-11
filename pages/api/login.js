const sqlite = require('sqlite3').verbose()
const {compare} = require('bcrypt')
import {sign}  from 'jsonwebtoken';
import {secret} from '../../secret'
import cookie from 'cookie'

const db = new sqlite.Database('./users.db')

export default async (req,res)=>{

  if(req.method === 'POST'){
   
    let email = req.body.email
    let pass = req.body.password

  if(email&&pass){
  
  db.get('SELECT * FROM users where email=?', [email], (err, person)=>{
   
    compare(  pass, person.password , function(err, result){
         if(!err && result){
             const  claims = {sub: person.id, email:person.email}
             const jwt = sign(claims ,secret, {expiresIn:'1h'})
        
             res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: 'strict',
              maxAge:3600,
              path: '/'
            }))
            res.json({message: 'Welcome back to the app!'});
         }
         else {
               res.json({auth:'wrong password'})
         }
    })
  })
 
  } //end pass mail define block
    else
     res.json({msg:'please send correct data'}) 
  } //end post block

}