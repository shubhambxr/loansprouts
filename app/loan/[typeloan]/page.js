"use client";
import React, { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import AuthContext from "@/context/ApiAuth";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const TypeOfLoan = () => {
  const {
    GetCityBySelectionAndId,
    cityBySelectionAndId,
    GetOutsideCompanyService,
    outsideCompanyService,
  } = useContext(AuthContext);
  const { typeloan } = useParams();
  const typeLoanChange = typeloan.replaceAll("-", " ");

  useEffect(() => {
    GetCityBySelectionAndId();
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
                  About {typeLoanChange}
                </h3>
                <div className="title-border-simple position-relative"></div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col md={6}>
              <div className="about-desc">
                <h3 className="text-dark mb-2 fw-light">
                  {typeLoanChange} @ lowest rate of interest
                </h3>
                <p className="text-muted f-15">
                  loansprouts.com is a webportal which run under Websoftex
                  Souharda credit Co-Operative Ltd. Bangalore to get customer
                  for loan . Websoftex Souharda credit Co-Operative Ltd.,
                  financial institution formed under the laws, which do banking
                  business among its members. Co-operative Ltd., is registered
                  under the 2001 Act, regulated by the government with its
                  registration 751/LA.A./2011, fully ahead to Government of
                  Karnataka
                </p>
                <div className="about-by">
                  <div
                    className="pe-auto mt-5 border border-1 border-success rounded-3 shadow p-3"
                    style={{ width: "fit-content", backgroundColor: "orange" }}
                  >
                    <span
                    // onClick={() => {
                    //   createPost();
                    // }}
                    >
                      Apply Now
                    </span>
                  </div>
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
                        alt={servceImg.serviceName ? servceImg.serviceName : "Loansprout"}
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
            Please select your nearest city to aply {typeLoanChange} @ lowest
            rate of interest
          </h3>
          <div className="d-flex flex-row flex-wrap">
            {cityBySelectionAndId?.data.data.map((item, index) => {
              const cityNameChange = item.cityName.replaceAll(" ", "-");
              return (
                <div key={index} className="Api-map-div ">
                  {/* <Link to="/homeloan/bangalore/mathikhere">Bangalore</Link> */}
                  <Link href={`/loan/${typeloan}/${cityNameChange}`} className="text-decoration-none">
                    {item.cityName}
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

export default TypeOfLoan
