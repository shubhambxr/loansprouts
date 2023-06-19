"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/DocumentRequried.css";
import Image from "next/image";
const DocumentRequried = () => {
  return (
    <section className="section pb-5 bg-light" id="loan">
      <Container className="px-5">
        <Row>
          <Col lg={12}>
            <div className="title-heading my-5">
              <h3 className="text-dark mb-1 fw-light text-uppercase">
                Document Requried
              </h3>
              <div className="titleBorder rounded-pill"></div>
              <div className="titleBorder2 rounded-pill"></div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col>
              <div className="docReqClass p-4 mb-3">
               <Image src="/assets/lonesprout/documentR.png" width={60} height={60} alt="#"/>
               <Image src="/assets/lonesprout/elegibility.png" width={60} height={60} alt="#"/>
               <Image src="/assets/lonesprout/1features.png" width={60} height={60} alt="#"/>
               {/* documentR
elegibility
elegibility */}
              </div>
            </Col>
          </Row>
      </Container>
    </section>
  );
};

export default DocumentRequried;
