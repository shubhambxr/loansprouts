"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/faq.css";
import Footer from "@/components/Footer";
const Faq = () => {
  const FaQuestions = [
    {
      id: 1,
      ques: "Who is eligible to get this loan?",
      ans: "Any Indian citizen living in Delhi, Mumbai, Pune, Bangalore, Hyderabad and Chennai.",
    },
    {
      id: 2,
      ques: "How do I apply for this loan?",
      ans: "This is a digital loan and you will have to apply through our website and app.",
    },
    {
      id: 3,
      ques: "What are the documents required along with my application?",
      ans: "You need to give your PAN, Adhaar (or Voter id card, passport or driving licence) and 6 months’ bank statement.",
    },
  ];
  return (
    <>
      <section className="section bg-light" id="contact">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-heading mb-5 ">
                <h3 className=" mb-1 fw-light text-uppercase">Faq</h3>
                <div className="title-border-simple position-relative"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="contact-box p-5">
                <Row>
                  <Col lg={8}>
                    <h4 className="">Common Dout or Problem Solutions</h4>
                    <div className="mt-5">
                      <Col>
                        {FaQuestions.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="mx-3 pe-auto d-flex justify-content-between bg-light shadow p-3 mb-3 bg-white rounded faqPs"
                              // onClick={() => {
                              //   if (hidShow === "d-none") {
                              //     setHidShow("d-block");
                              //   } else {
                              //     setHidShow("d-none");
                              //   }
                              // }}
                            >
                              <div>
                                <div className="fs-4">{item.ques}</div>
                                <div className="me-4 mt-3 faqShowHide">
                                  {item.ans}
                                </div>
                              </div>
                              <div className="me-2 mt-1 fs-4">+</div>
                            </div>
                          );
                        })}
                      </Col>
                    </div>
                  </Col>
                  <Col lg={4}>
                    {/* #FF6600 */}
                    <div className="m-1 p-5 bg-danger text-center">
                      <h4>
                        For More
                        <br />
                        Call Any Time
                        <br />
                        Contact Us:+91 966830xxxx
                      </h4>
                      {/* <img src={accDetailsImg} alt="" width='200px' height='200px'/> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Faq;
