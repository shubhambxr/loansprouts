import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import "../styles/Footer.css";
const Footer = () => {
  const links = [
    // {
    //     id: 1,
    //     title: "COMPANY",
    //     child: [
    //         { title: "Monitoring Grader", link: "/" },
    //         { title: "Job Opening", link: "/" },
    //         { title: "Customers", link: "/" },
    //          { title: "Privacy", link: "/" },
    //     ],
    // },
    // {
    //     id: 2,
    //     title: "SUPPORT",
    //     child: [
    //         { title: "Get Started", link: "/" },
    //         { title: "Blog", link: "/" },
    //         { title: "Knowledge Base", link: "/" },
    //     ],
    // },
    {
      id: 3,
      title: "LEGAL",
      child: [
        { title: "Terms & Conditions", link: "/termandcondition" },
        { title: "Privacy Policy", link: "/privacyandpolicy" },
        // { title: "Customers", link: "/" },
        // { title: "Pricing", link: "/" },
      ],
    },
  ];
  const isPrimary = false;
  return (
    <>
    <section className="footer-bg py-5">
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
              <Col lg={5}>
                <div className="mt-4">
                  <p className="text-muted f-14">
                    Welcome to LoanSprouts we are provide loan as very
                    reasonably interest on minimal documentation.
                  </p>
                  <p> Call Anytime<br/> +91-9886-461-xxx<br/> +91-9886-461-xxx</p>
                </div>
              </Col>
              <Col lg={7}>
                <Row>
                  {links.map((link, key) => (
                    <Col lg={4} key={key}>
                      <div className="">
                        <p className="text-uppercase text-dark footer-title mb-4">
                          {link.title}
                        </p>
                        <ul className="list-unstyled footer-sub-menu">
                          {link.child.map((linkItem, key) => (
                            <li className="f-14" key={key}>
                              <Link href={linkItem.link} className="text-muted">
                                {linkItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
         <section className="footer-alt bg-dark pt-3 pb-3">
         <Container>
           <Row>
             <Col lg={2}>
               {" "}
               <Link
               href="#"
                //  href={require("../../assets/apk/loanSproutes.apk")}
                 download="loansprouts.apk"
               >
                 <Image
                   src={require("../public/assets/lonesprout/apk-img.png")}
                   width={100}
                   height={30}
                   alt=""
                 />
               </Link>
              
             </Col>
             <Col lg={10} className="text-center">
               <p className="copyright text-white f-14 fw-light mb-0">
                 {new Date().getFullYear()} © Develop By Websoftex
               </p>
             </Col>
           </Row>
         </Container>
       </section>
       </>
  );
};

export default Footer;
