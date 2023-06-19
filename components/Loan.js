"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import AuthContext from "@/context/ApiAuth";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/loan.css";
import Image from "next/image";

const Loan = () => {
  const { GetOutsideCompanyService, outsideCompanyService } =
    useContext(AuthContext);
  useEffect(() => {
    GetOutsideCompanyService();
  }, []);

  return (
    <>
      <section className="section mt-5" id="loan">
        <Container className="px-5">
          <Row>
            <Col lg={12}>
              <div className="title-heading mb-5">
                <h3 className="text-dark mb-1 fw-light text-uppercase">
                  Our Services
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="cards1 mb-3">
                {outsideCompanyService?.data?.data?.map((sat2, i) => {
                  return (
                    <div key={i} className="card1 d-flex ">
                      <Link
                        href={`/loan/${sat2.serviceName.replaceAll(" ", "-")}`}
                        className="d-flex flex-column align-items-center text-decoration-none gap-2"
                      >
                        
                        <Image
                          title={sat2.serviceName}
                          src={
                            "http:\\\\api.loansprouts.com\\uploads\\" +
                            sat2.serviceImage
                          }
                          alt={sat2.serviceName}
                          width={300}
                          height={200}
                        />
                        {sat2.serviceName}
                      </Link>
                    </div>
                    // <Link to="/loan/Home-Loan">{sat2.serviceName}</Link> https://www.youtube.com/watch?v=WGRcEzdWgD0
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Loan;
