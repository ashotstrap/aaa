import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {

  return <> 
  
  <NextNprogress
  color="red"
  startPosition={10}
  stopDelayMs={200}
  height={15}
/>

  <Component {...pageProps} />
 <style >
   {
     `  
     .active {
       font-weight:bold;
       font-size:25px;
     }
     
     `
   }
    </style>
   </>
}

export default MyApp
