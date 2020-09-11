import Layout from '../components/Layout'

function Second(props) {
    return (
        <Layout>
        <div>
            <h1>I am a second</h1> 
        </div>
         </Layout>
    )
}


Second.getInitialProps=()=>{
    let user ={name: 'second page', url:'second url'}

    return user
}

export default Second
