import { routes } from "@/utils/routes";
import { t } from "i18next";
import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import FooterLink from "./FooterLink";

const Footer = () => {
  const footerStyle = "d-flex flex-wrap justify-content-center col-12 col-lg-3";
  return (
    <footer className="mt-5">
      <Container className="d-flex justify-content-center">
        {/* <h1>Rakaya</h1> */}
        <div className="col-lg-1 col-4">
          <Logo />
        </div>
      </Container>
      <Container className={footerStyle}>
        {routes?.map((item, index) => (
          <FooterLink key={index} link={item?.route}>
            {t(`common:${item?.name}`)}
          </FooterLink>
        ))}
      </Container>
      <Container className={`${footerStyle} gap-3`}>
        <FooterLink>
          <i className="bi bi-twitter-x"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-instagram"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-snapchat"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-whatsapp"></i>
        </FooterLink>
        <FooterLink>
          <i className="bi bi-linkedin"></i>
        </FooterLink>
      </Container>
      <Container className="d-flex justify-content-center pt-3">
        <p className="text-dark fw-bold">جميع الحقوق محفوظة لشركة ركايا</p>
      </Container>
    </footer>
  );
};

export default Footer;
