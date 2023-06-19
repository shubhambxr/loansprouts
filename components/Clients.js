"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../styles/Cllients.css";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../public/assets/images/clients/team01.jpg";
// import img2 from "../public/assets/images/clients/team02.jpg";
// import img3 from "../public/assets/images/clients/team03.jpg";
// import img4 from "../public/assets/images/clients/team04.jpg";
// import quote from "../public/assets/images/quote-img.png";

const Clients = () => {
  var settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="clientContainer">
        <div className="subClientContainer">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-heading m-5">
                  <h3 className="text-white mb-1 fw-light text-uppercase">
                    Our Clients
                  </h3>
                  <div className="titleBorder rounded-pill"></div>
                  <div className="titleBorder2 rounded-pill"></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="text-white">
                <Carousel>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/assets/images/clients/team01.jpg"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src="/assets/images/clients/team01.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="section bg-clients" id="clients">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-heading mb-5">
                <h3 className="text-white mb-1 fw-light text-uppercase">
                  Our Clients
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Slider {...settings} className="client-slider">
                <div>
                  <div className="testi-content">
                    <div className="testi-box mt-4">
                      <h4 className="text-white mb-3 fw-light">
                        Janasamruddhi Co-operative Society
                      </h4>
                      <p className="text-white-70 fw-light mb-0 f-15">
                        The best all-inclusive Daily Collection software we have
                        ever used with incomparable and excellent support
                        services
                      </p>
                      <div className="quote-img">
                        <Image
                          src="/assets/images/quote-img.png"
                          alt="quote-img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="float-end ms-3">
                        <div className="client-img">
                          <Image
                            src="/assets/images/clients/team01.jpg"
                            alt="team01"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="clients-name text-end pt-3">
                        <h6 className="text-white fw-normal position-relative f-17 mb-0">
                          <span className="after-border"></span> JCS
                        </h6>
                        <p className="text-white-70 f-13 mb-0">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="testi-content">
                    <div className="testi-box mt-4">
                      <h4 className="text-white mb-3 fw-light">
                        Vishala Samruddhi Souharda Co-Operative Ltd
                      </h4>
                      <p className="text-white-70 fw-light mb-0 f-15">
                        The Daily Pro software is safer, more accurate and
                        reduces the need for paperwork and dramatically improved
                        the way we track customer profiles and repayments{" "}
                      </p>
                      <div className="quote-img">
                        <Image
                          src="/assets/images/quote-img.png"
                          alt="quote-img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="float-end ms-3">
                        <div className="client-img">
                          <Image
                            src="/assets/images/clients/team03.jpg"
                            alt="team03"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="clients-name text-end pt-3">
                        <h6 className="text-white fw-normal position-relative f-17 mb-0">
                          <span className="after-border"></span> VSSC
                        </h6>
                        <p className="text-white-70 f-13 mb-0">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="testi-content">
                    <div className="testi-box mt-4">
                      <h4 className="text-white mb-3 fw-light">
                        JanaSpandana Co-Operative Society
                      </h4>
                      <p className="text-white-70 fw-light mb-0 f-15">
                        The system is fantastic in terms of real time reporting,
                        user friendliness and security. The people behind the
                        system are a wonderful team
                      </p>
                      <div className="quote-img">
                        <Image
                          src="/assets/images/quote-img.png"
                          alt="quote-img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="float-end ms-3">
                        <div className="client-img">
                          <Image
                            src="/assets/images/clients/team04.jpg"
                            alt="team04"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="clients-name text-end pt-3">
                        <h6 className="text-white fw-normal position-relative f-17 mb-0">
                          <span className="after-border"></span> JSCS
                        </h6>
                        <p className="text-white-70 f-13 mb-0">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="testi-content">
                    <div className="testi-box mt-4">
                      <h4 className="text-white mb-3 fw-light">
                        Jeevan Sagar Co-operative Society
                      </h4>
                      <p className="text-white-70 fw-light mb-0 f-15">
                        So user friendly that Daily collector are not required
                        to be proficient in IT. The system has a simple graphic
                        user interface and features a logical distribution of
                        functions, so each user can easily access and manipulate
                        the information they require.
                      </p>
                      <div className="quote-img">
                        <Image
                          src="/assets/images/quote-img.png"
                          alt="quote-img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="float-end ms-3">
                        <div className="client-img">
                          <Image
                            src="/assets/images/clients/team02.jpg"
                            alt="team02"
                            className="img-fluid rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="clients-name text-end pt-3">
                        <h6 className="text-white fw-normal position-relative f-17 mb-0">
                          <span className="after-border"></span> JSCS
                        </h6>
                        <p className="text-white-70 f-13 mb-0">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
