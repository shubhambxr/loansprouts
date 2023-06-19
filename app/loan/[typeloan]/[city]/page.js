"use client";
import React, { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import AuthContext from "@/context/ApiAuth";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const AllCity = () => {
  const {
    GetCityArea,
    cityArea,
    GetOutsideCompanyService,
    outsideCompanyService,
  } = useContext(AuthContext);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  let { typeloan, city } = useParams();
  //let { city } = useParams();

  //const loanImg = require(`../assets/lonesprout/${typeLoan}.png`);

  const typeLoanChange = typeloan.replaceAll("-", " ");
  const cityChange = city.replaceAll("-", " ");

  useEffect(() => {
    GetCityArea(city);
    GetOutsideCompanyService();
  }, []);

  return (
    <>
      <section className="section bg-about bg-light-about bg-light" id="about">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-heading mb-0">
                <h3 className="text-dark mb-0 fw-light text-uppercase">
                  Great Choice!
                </h3>
                <h3 className="text-dark mb-0 fw-light text-uppercase">
                  Now Soar new heights with our {typeLoanChange}
                </h3>
                <div className="title-border-simple position-relative"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <h3 className="text-dark mt-5 fw-light">
              {typeLoanChange} @ lowest rate of interest in {cityChange}
            </h3>
          </Row>

          <Row className="align-items-center mt-1">
            <Col md={6}>
              <div className="about-desc">
                {/* <p className="text-muted f-15">
                  loansprouts.com is a webportal which run under Websoftex
                  Souharda credit Co-Operative Ltd. Bangalore to get customer
                  for loan . Websoftex Souharda credit Co-Operative Ltd.,
                  financial institution formed under the laws, which do banking
                  business among its members. Co-operative Ltd., is registered
                  under the 2001 Act, regulated by the government with its
                  registration 751/LA.A./2011, fully ahead to Government of
                  Karnataka
                </p> */}
                <div className="about-by text-decoration-none">
                  <Link href="/applynow" className="text-decoration-none">
                    <div
                      className="pe-auto mt-5 border border-1 border-success rounded-3 shadow p-3 "
                      style={{
                        width: "fit-content",
                        backgroundColor: "orange",
                      }}
                    >
                      <h3 style={{ color: "white" }} className="text-decoration-none">Apply Now</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-img light-img position-relative p-4">
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
                        alt={servceImg.serviceName ? servceImg.serviceName : "LoanSprouts"}
                        className="img-fluid mx-auto d-block "
                        key={servceImg.servicesId}
                      />
                    );
                  }
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <div className="footermenu1 my-5">
          <h3 className="text-dark mb-2 fw-light">
            Please select your area in {cityChange} to apply {typeLoanChange} @
            lowest rate of interest
          </h3>
          <div className="d-flex flex-wrap">
            {cityArea?.data?.map((item, index) => {

              return (
                <div key={index} className="Api-map-div ">
                  <Link href={`/loan/${typeloan}/${city}/${item.areaName}`} className="text-decoration-none">
                    {item.areaName}
                  </Link>
                  {"  "} | {"   "}
                  {"  "}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AllCity;
