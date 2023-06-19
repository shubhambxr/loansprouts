"use client";
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const isPrimary = false;
  return (
    <>
      <section
        className={
          isPrimary
            ? "section bg-about"
            : "section bg-about bg-light-about bg-light py-5"
        }
        id="about"
      >
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-heading">
                <h3
                  className={
                    isPrimary
                      ? "text-white fw-light text-uppercase"
                      : "text-dark mb-0 fw-light text-uppercase"
                  }
                >
                  About Us
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>
          {/*  */}

          <Row className="align-items-center mt-3">
            <Col md={6}>
              <div className="about-desc">
                <h3
                  className={
                    isPrimary
                      ? "text-white mb-3 fw-light"
                      : "text-dark mb-2 fw-light"
                  }
                >
                  Perfect Solution For Small Businesses
                </h3>
                <p
                  className={
                    isPrimary ? "text-white-50 f-15" : "text-muted f-15"
                  }
                >
                  Websoftex Software Solutions Pvt. Ltd., a Bangalore based
                  company, extending its services in Website Designing &
                  Development, Custom Software Development and Mobile
                  Application Development. Our company is committed to provide
                  Creative, Innovative and quick & quality Website Design
                  Solutions, Website Development, Software Development,
                  E-Commerce, Print Order management Software, School software,
                  Multi Level Marketing Software, Web Applications, Windows
                  Applications, Web site maintenance etc. to offshore companies
                  at affordable prices. We are one of the best php & .Net based
                  companies in Bangalore.
                </p>
                <div className="about-by">
                  <p className="fw-light mb-0">
                    <a
                      href="https://websoftex.com/"
                      className="text-dark"
                      target="blank"
                    >
                      <i className="mdi mdi-circle-medium text-custom me-2"></i>
                      Learn More <span className="text-custom"> About Us</span>
                    </a>
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div
                className={
                  isPrimary
                    ? "about-img position-relative p-4"
                    : "about-img light-img position-relative p-4"
                }
              >
                <Image
                  src="/assets/images/about-img.jpg"
                  alt="about-img"
                  width={500}
                  height={300}
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
