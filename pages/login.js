import Head from 'next/head'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import * as fb from 'firebase'
import Layout from '../components/Layout'
import Router from 'next/router'
import c from '../styles/Home.module.scss'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

export default function Home(props) {
const [mail, setmail] = useState('')
const [pass, setpass] = useState('')
const [login,setlogin] = useState(null)
const ref= useRef()

async function registerHandler(e){
  e.preventDefault()
  let user = {email:mail,password:pass}
  axios.post('/api/login', user)
  .then(e=>{
    setlogin(e.data)
    ref.current.click()
  })
}
  return (
  <div className={c.signup + ' bg-warning container-fluid'}>
  	<h1 className={'display-1 text-center text-white'}>Login page</h1>
    <div className="row">
      <div className="col-6 offset-3">
        {
         <form onSubmit={registerHandler}>
           <div className="form-group">
             <label htmlFor="email">Email address:</label>
             <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setmail(e.target.value)}/>
           </div>
           <div className="form-group">
             <label htmlFor="pwd">Password:</label>
             <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setpass(e.target.value)} />
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
         </form>
        }
  <Link href="/people"><a ref={ref}></a></Link>
</div>
</div>
  </div>
  )
}


