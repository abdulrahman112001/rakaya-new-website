import React from "react";
import Container from "../Container";
import styles from "@/styles/landing.module.scss";
import { styled } from "styled-components";

const StyledHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700 !important;
`;

const Stat = ({ count, text }) => {
  return (
    <Container className={"col-6 col-md-3 text-center "}>
      <StyledHeader className="text-secondary fw-bold my-0">
        {count}
      </StyledHeader>
      <p className="fs-6 text-primary fw-semibold">{text}</p>
    </Container>
  );
};

const Stats = () => {
  return (
    <div className={"bg-forth "}>
      <div className={"row d-flex justify-content-center py-5 my-5"}>
        <Stat count={"+95"} text={"Subscribers"} />
        <Stat count={"+50"} text={"Subscribers"} />
        <Stat count={"+50"} text={"Subscribers"} />
        <Stat count={"+50"} text={"Subscribers"} />
      </div>
    </div>
  );
};

export default Stats;
