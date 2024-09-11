"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const headerLinks = [
  {
      name: 'Home',
      URL: '/'
  },
  {
      name: 'Shop',
      URL: '/product'
  }
]


const NavBar = () => {
  const pathName = usePathname()

  const outputHeaderLinks = headerLinks.map(e => {
    const className = pathName === e.URL ? "navLinks currentpage" : "navLinks"
  
    return <Link className={className} href={e.URL} key={e.URL}>{e.name}</Link>
  })
  
  return (
    <nav className="nav flex-justify-align-center">
        {outputHeaderLinks}
    </nav>
  )
}

export default NavBar
