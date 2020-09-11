import Router from "next/router"
import axios from 'axios'
import Link from 'next/link';
import {useState, useRef} from 'react'
import c from '../styles/Home.module.scss'


export default function People({people}){
    let user = people.user[0]

   const ref= useRef()

return <div className={c.people}> 
 <button onClick={(e)=>{
      e.preventDefault()
      axios.post('/api/out',{})
      .then(e=>{
        ref.current.click()
      })
       
    }} style={{display:'block', margin:'20px 20px 20px auto'}} className={'btn btn-success'}>LOGOUT</button> 
    <Link href="/login"><a ref={ref}></a></Link>

<h1 className={'display-1 text-center text-white'}>User info page</h1>
 <div className={c.cont+ ' container-fluid'}>

    <div className="row">
        <div className="col-10 offset-1">
<ul className="list-group">
<li className="list-group-item">User id - {user.id}</li>
<li className="list-group-item">User email - {user.email} </li>
<li className="list-group-item">User hash password = {user.password}</li>
</ul>
</div> 
</div>

</div>
  </div>

}

People.getInitialProps=async (ctx)=>{ 
   
 var  cookie = ctx.req?.headers.cookie 

 let resp = await fetch('http://localhost:3000/api/people',{
            headers:{
                cookie:cookie
            }
        })
      

  if(resp.status === 401 && !ctx.req){
      Router.replace('/login')
      return {}
  }

  if(resp.status === 401 && ctx.req){
     ctx.res.writeHead(302, {
         Location: 'http://localhost:3000/login'
     })
     ctx.res.end() 
     return 
}

  const json = await resp.json()
  return {people:json}

}