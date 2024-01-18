import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Container from '../Container';
import Link from 'next/link';
import { routes } from '@/utils/routes';

const NavBarLink = ({ children, to }) => {
  const router = useRouter();
  const getActiveLink = (link) => {
    return router.pathname == link ? 'active text-decoration-underline link-offset-3 active-link' : ''
  }
  return (
    <li class="nav-item text-center">
      <Link className={`nav-link ${getActiveLink(to)} fs-5`} aria-current="page" href={to}>{children}</Link>
    </li>
  )
}
function Navbar() {
  const router = useRouter();
  const [toggleNav, setToggleNav] = useState(false)
  
  if (router.pathname == '/landing')
    return <></>
  return (
    <nav class="navbar navbar-expand-lg bg-whtie shadow-sm py-3">
      <Container className='col-lg-10 align-items-center'>
        <a class="navbar-brand fw-semibold fs-3" href="/landing">Rakaya</a>
        <button class="btn fs-1 border-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setToggleNav(prev => !prev) }}>
          <i className={`${toggleNav ? "bi bi-x" : "bi bi-list"}`}></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
          {routes.map((route, index)=>(
            <NavBarLink to={route.route}>{route.name}</NavBarLink>
          ))}
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar