"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

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
  const outputHeaderLinks = headerLinks.map(e => {
  
    const pathName = usePathname()
    const className = pathName === e.URL ? "navLinks currentpage" : "navLinks"
  
    return <Link className={className} href={e.URL}>{e.name}</Link>
  })
  
  return (
    <nav className="nav flex-justify-align-center">
        {outputHeaderLinks}
    </nav>
  )
}

export default NavBar
