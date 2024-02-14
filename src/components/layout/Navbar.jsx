import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { routes } from "@/utils/routes";
import Setting from "../Setting";
import { t } from "i18next";
import styles from "@/styles/components/Navbar.module.scss";

const NavBarLink = ({ children, to, onClick }) => {
   const router = useRouter();
   const getActiveLink = (link) => {
      return router.pathname == link;
   };
   return (
      <li
         class="nav-item text-center"
         onClick={() => {
            onClick();
         }}>
         <Link
            className={`${styles['nav-link']} fs-5 rounded mx-2 my-2 my-lg-0 ${
               getActiveLink(to) ? styles['nav-link-active'] : ""
            }`}
            aria-current="page"
            href={to}>
            {children}
         </Link>
      </li>
   );
};
function Navbar() {
   const router = useRouter();
   const [show, setShow] = useState(false);
   const buttonRef = useRef(null);
   const navBarRef = useRef(null);
   // if (router.pathname == "/landing") return <></>;
   return (
      <nav class="navbar navbar-expand-lg bg-whtie py-3">
         <Container className="col-lg-10 align-items-center">
            <Link class="navbar-brand fw-semibold fs-3 mx-3" href="/landing">
               Rakaya
            </Link>
            <button
               class="btn fs-1 border-0 d-lg-none"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavDropdown"
               aria-controls="navbarNavDropdown"
               aria-expanded="false"
               aria-label="Toggle navigation"
               ref={buttonRef}
               onClick={() => {
                  setShow(!show);
               }}>
               <i
                  className={`${
                     buttonRef.current &&
                     !buttonRef.current?.classList.contains("collapsed")
                        ? "bi bi-x"
                        : "bi bi-list"
                  }`}></i>
            </button>
            <div
               class="collapse navbar-collapse justify-content-lg-between"
               id="navbarNavDropdown"
               ref={navBarRef}>
               <ul class="navbar-nav mx-0 px-0">
                  {routes.map((route, index) => (
                     <NavBarLink
                        to={route.route}
                        key={index}
                        onClick={() => {
                           if(document.body.offsetWidth < 600)
                           buttonRef.current.click();
                        }}>
                        {t(`common:${route.name}`)}
                     </NavBarLink>
                  ))}
               </ul>
               <div className="d-flex justify-content-center mt-4 mt-lg-0">
                  <Setting />
               </div>
            </div>
         </Container>
      </nav>
   );
}

export default Navbar;
