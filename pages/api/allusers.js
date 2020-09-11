
const sqlite = require('sqlite3').verbose()


export default async(req,res,email)=>{

    const db =await new sqlite.Database('./users.db')

  db.all('SELECT * FROM users', (err, rows)=>{
      res.json({user:rows})
  })

}

