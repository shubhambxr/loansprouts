"use client";
import React, { useContext, useEffect } from "react";
import AuthContext from "@/context/ApiAuth";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import "../styles/home.css"
const Home = () => {
  const {} = useContext(AuthContext);
  useEffect(() => {}, []);
  return (
    <section className="section  home-1-bg bgOrange" id="home">
      <div className="home-center">
        <div className="home-desc-center ">
          <Container>
            <Row className="align-items-center ms-3">
              <Col lg={6}>
                <div className="mt-40 home-2-content">
                  <h1 className="text-white fw-normal home-2-title display-4 mb-0">
                    Your Loan Search Ends Here...
                  </h1>
                  <span className="text-white-100 mt-1 f-15 mb-0 text-color">
                    <h3>Welcome to LoanSprouts we are provide loan as</h3>
                  </span>
                  <span className="text-white-70 mt-1 f-15 mb-0">
                    <ul>
                      <li>
                        {" "}
                        Very reasonably interest on minimal documentation.
                      </li>
                      <li> No Bank Visits required</li>
                      <li> Instant Paperless Approvals</li>
                      <li> Free & Quick Service</li>
                      <li> Servicing Pan India Cities</li>
                      <li> Dedicated Loan Professional</li>
                      <li> Money in Account in 24 hrs</li>
                      <li> Professional Money in Account in 24 hrs</li>
                    </ul>
                  </span>
                  <div className="mt-5">
                    <Link href="/applynow" className="btn btn-custom me-4">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-40 home-2-content position-relative imgNone homePgImg">
                  <Image
                    src="/assets/images/home-2-img.png"
                    width={700}
                    height={700}
                    alt=""
                    className="img-fluid mx-auto d-block home-2-img mover-img "
                  />
                  <div className="home-2-bottom-img imgNone">
                    <Image
                      src="/assets/images/homr-2-bg-bottom.png"
                      width={700}
                      height={700}
                      alt=""
                      className="img-fluid d-block mx-auto"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Home;
