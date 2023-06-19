"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Repayloan = () => {
  return (
    <>
      <section className="section bg-light " id="contact">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-heading my-5 ">
                <h3 className=" mb-1 fw-light text-uppercase">
                  Repay You Loan Amount
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="contact-box ps-3">
                <Row>
                  <Col lg={8}>
                    <h4 className="">
                      Repay Your Payable Loan Amount Through The Following
                      Details:-
                    </h4>
                    <div className="mt-5">
                      <Col>
                        <p className=" border-bottom">
                          Company Name - Websoftex Software Solutions Pvt. Ltd.
                        </p>
                      </Col>
                      <Col>
                        <p className=" border-bottom">Bank Name - xxxxx Bank</p>
                      </Col>
                      <Col>
                        <p className=" border-bottom">
                          Account Number - 054705xxxxxx
                        </p>
                      </Col>
                      <Col>
                        <p className=" border-bottom">
                          IFSC Code - xxxxxxxxxxx (for RTGS, IMPS and NEFT
                          transactions)
                        </p>
                      </Col>
                      <Col>
                        <p className=" border-bottom">
                          Branch Name - xxxx Kumar
                        </p>
                      </Col>
                      <Col>
                        <p className=" border-bottom">Account Type - CURRENT</p>
                      </Col>
                    </div>
                  </Col>
                  <Col lg={4}>
                    {/* #FF6600 */}
                    <div className="m-1 p-5 bg-danger text-center">
                      <h4>Scan And Pay Your Loan Amount</h4>
                      <Image
                        src="/assets/lonesprout/sap.png"
                        alt="sap"
                        width={200}
                        height={200}
                      />
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

export default Repayloan;
