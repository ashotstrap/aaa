import Link  from 'next/link'
import {useRouter} from 'next/router'

function Layout({children}) {
    const router = useRouter() 
    return (
        <div>
            <nav>
                <li className={router.pathname == "/" ? "active" : ""}>
             <Link  href={'/'}><a >to home</a></Link>
              </li>
              <li className={router.pathname == "/second" ? "active" : ""}>
             <Link   href={'/second'}><a>to second</a></Link>
            </li>
            </nav>
            {children} 
        </div>
    )
}

export default Layout 
