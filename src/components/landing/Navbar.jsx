import { routes } from "@/utils/routes";
import { useState } from "react";
import Container from "../Container";

export const NavLink = ({ children, to }) => {
   return (
      <Container className={"px-0 py-0 fw-semibold"}>
         <li className="nav-item text-nowrap" style={{ listStyle: "none" }}>
            <a
               href={to}
               className="text-dark text-decoration-none text-center nav-link">
               {children}
            </a>
         </li>
      </Container>
   );
};

const Navbar = () => {
   const [toggleNav, setToggleNav] = useState(false);
   const [navStyle, setNavStyle] = useState("");
   return (
      <Container className="pb-3">
         <Container
            className={
               "d-flex d-lg-none justify-content-between align-items-center"
            }>
            <a class="d-lg-none navbar-brand fs-1 fw-bold" href="#">
               Rakaya
            </a>
            <button
               className="btn fs-1 border-0"
               onClick={() => {
                  setToggleNav((prev) => !prev);
                  document.body.style.overflow = toggleNav ? "auto" : "hidden";
                  setNavStyle(!toggleNav ? "min-vh-100" : "");
               }}>
               <i className={`${toggleNav ? "bi bi-x" : "bi bi-list"}`}></i>
            </button>
         </Container>
         <Container
            className={`d-lg-flex ${
               toggleNav ? "d-flex" : "d-none"
            } flex-column flex-lg-row justify-content-lg-between align-items-center gap-5 gap-lg-0 ${navStyle}`}>
            <div className="d-flex flex-column flex-lg-row gap-5">
            {routes.map((route, index)=>(
               <NavLink to={route.route}>{route.name}</NavLink>
            ))}
            </div>
            <div className="border border-2 border-dark rounded rounded-pill px-4 py-2">
               <NavLink>Go to website</NavLink>
            </div>
         </Container>
      </Container>
   );
};

export default Navbar
