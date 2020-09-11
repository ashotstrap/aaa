const sqlite = require('sqlite3').verbose()
import {verify}  from 'jsonwebtoken';
import {secret} from '../../secret'

const autentificated=fn=>async (req,res)=>{

  verify(req.cookies.auth,secret,async function(err, decoded){
    console.log(decoded);
      if(!err && decoded) {
         return await fn(req,res,decoded.email)
      }

      res.status(401).json({message:'You are  not autenticated'})
  })
}

export default autentificated(async(req,res,email)=>{

    const db =await new sqlite.Database('./users.db')

  db.all('SELECT * FROM users WHERE email=?', [email] , (err, row)=>{
      res.json({user:row})
  })

})

