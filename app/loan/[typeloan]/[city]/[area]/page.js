"use client";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "next/navigation";
import AuthContext from "@/context/ApiAuth";
import Footer from "@/components/Footer";
import ApplyNow from "@/app/applynow/page";
import Link from "next/link";
import Image from "next/image";
const Area = () => {
  const { GetOutsideCompanyService, outsideCompanyService } =
    useContext(AuthContext);
  let { typeloan, city, area } = useParams();

  const typeLoanChange = typeloan.replaceAll("-", " ");
  const cityChange = city.replaceAll("-", " ");
  const areaChange = area.replaceAll("-", " ");
  const typeLoanSlice = typeloan.slice("0", typeloan.indexOf("-"));

  useEffect(() => {
    GetOutsideCompanyService();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-light overflow-x-hidden">
        <Container>
          <Row>
            <Col lg={12} sm={12}>
              <div className="text-dark  fw-light text-uppercase">
                <h3>
                  {typeLoanChange} in {area}, {cityChange}
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>
          <Row>
          <Col lg={12} sm={12}>
            <h3 className="text-dark mt-5 fw-light">
              Your {typeLoanChange} Offer For Your Dream {typeLoanSlice}
            </h3>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <div className="text-dark my-2 fw-light">
                loansprouts.com is a webportal which run under Websoftex
                Souharda credit Co-Operative Ltd. Bangalore to get customer for
                loan . Websoftex Souharda credit Co-Operative Ltd., financial
                institution formed under the laws, which do banking business
                among its members. Co-operative Ltd., is registered under the
                2001 Act, regulated by the government with its registration
                751/LA.A./2011, fully ahead to Government of Karnataka
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="about-img light-img position-relative ">
                {outsideCompanyService?.data.data.map((servceImg) => {
                  if (servceImg.serviceName === typeLoanChange) {
                    return (
                      <Image
                        src={
                          "http:\\\\api.loansprouts.com\\uploads\\" +
                          servceImg.serviceImage
                        }
                        width={400}
                        height={200}
                        alt={servceImg.serviceName ? servceImg.serviceName : "LoanSprout  Img"}
                        className="img-fluid mx-auto d-block "
                        key={servceImg.servicesId}
                      />
                    );
                  }
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <div className="m-5">
              <div
                className="pe-auto mx-5 border border-1 border-success rounded-3 shadow p-3 "
                style={{ width: "fit-content", backgroundColor: "orange" }}
                onClick={goToTop}
              >
                <h3 style={{ color: "white" }}>Apply Now</h3>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <ApplyNow />
      <Footer />
    </>
  );
};

export default Area;

