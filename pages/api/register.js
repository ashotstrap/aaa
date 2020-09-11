const sqlite = require('sqlite3').verbose()
const {hash} = require('bcrypt')

const db = new sqlite.Database('./users.db')


export default async (req,res)=>{



 db.run('CREATE TABLE users(id  INTEGER PRIMARY KEY AUTOINCREMENT , email TEXT UNIQUE, password)', ()=>{
     console.log('taable created');
 })

  if(req.method === 'POST'){
    let email = req.body.email;
    let pass = req.body.password

  if(email!= undefined && pass !=undefined ){

  hash(pass, 10, async function(err, hashpass){
       
     db.run(`INSERT INTO users(email,password) VALUES(?,?)`,[email, hashpass] ,function(err){
             if(err){
                 console.log(err);
               res.json({register:'krkin porci'})
             }
                else {
              res.json({register:'you are registered'})
                }
         }) 
      }) //end hash block
  } //end pass mail define block
    else
     res.json({msg:'please send correct data'}) 
  } //end post block

}