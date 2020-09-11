import Link from 'next/link';
import c from '../styles/Home.module.scss'
import   Head from 'next/head'


export default function Home(props) {
 const users = props.people.user 
  return (
  <div className={c.home + ' bg-danger'}>
    <Head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </Head>
   <h1 className='display-1 text-center text-white'>MAIN PAGE</h1>
      <p className={c.links}>
        <Link href='/signup' ><a className={c.btn+' btn h1 btn-warning'}>GO TO REGISTER</a></Link>
        <Link href='/login' ><a className={c.btn+' btn h1 btn-warning'}>GO TO LOGIN</a></Link>
      </p>
  <h2 className='text-center text-white'>Users list  {users.length}</h2>
    <p className='text-center'>  <button className='btn btn-warning text-white p-3' data-toggle="collapse" data-target="#demo">SHOW/HIDE ALL USERS LIST</button> </p>
   
<div id="demo" class="collapse">
<ul className='list-group'>
      {users.map((user,i)=>{
        return <li key={i} class="list-group-item">{JSON.stringify(user)} </li>
      })}
      </ul>
</div>
  </div>
  )
}

Home.getInitialProps=async (ctx)=>{ 

  let resp = await fetch('http://localhost:3000/api/allusers')
  let json = await resp.json()    
   return {people:json}

 }
