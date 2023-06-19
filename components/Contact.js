import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "../styles/contact.css";
import Image from "next/image";
const Contact = () => {
  const [contactMe, setContactMe] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message:
      "we are like your Daily Collection Software, and we want demo for this so can anyone contact us ASAP. We are from",
  });

  const handleChange = (e) => {
    setContactMe((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    const Url = "http://officedemo.bankdemo.in/pigmyservice.asmx/Add_Contact";
    e.preventDefault();

    let user_captcha = document.getElementById("captcha").value;

    if (validateCaptcha(user_captcha) === true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(5);
      try {
        const PostData = await axios.post(Url, {
          name: contactMe.name,
          email: contactMe.email,
          phone: contactMe.phone,
          city: contactMe.city,
          subject: contactMe.subject,
          message: contactMe.message,
          appkey: "123456",
        });
        console.log(PostData.data);
        setContactMe({
          name: "",
          email: "",
          phone: "",
          city: "",
          subject: "",
          message: "",
        });

        alert("Massage Sent We will contact you soon");
      } catch (error) {
        console.log(error);
      }
      document.getElementById("captcha").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("captcha").value = "";
    }
  };

  return (
    <>
      <section className="section bg-light" id="contactus">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="title-heading my-5">
                <h3 className="text-dark mb-1 fw-light text-uppercase">
                  Get in touch
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="contact-box p-5">
                <Row>
                  <Col lg={8} md={6}>
                    <div className="custom-form p-3">
                      <form name="myForm" onSubmit={handleSubmit}>
                        <p id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <Row>
                          <Col lg={6}>
                            <div className="mb-3 app-label">
                              <input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                onChange={handleChange}
                                value={contactMe.name}
                                pattern="[A-Z a-z]{1,32}"
                                required
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3 app-label">
                              <input
                                name="phone"
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="10 Digit Phone Number"
                                onChange={handleChange}
                                value={contactMe.phone}
                                pattern="[6789][0-9]{9}"
                                required
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3 app-label">
                              <input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleChange}
                                value={contactMe.email}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="mb-3 app-label">
                              <input
                                name="city"
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="City"
                                onChange={handleChange}
                                value={contactMe.city}
                                pattern="[a-zA-Z]"
                                required
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="mb-3 app-label">
                              <input
                                name="subject"
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                                value={contactMe.subject}
                                required
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <div className="mb-3 app-label">
                              <textarea
                                name="message"
                                id="comments"
                                rows="5"
                                className="form-control"
                                placeholder="Message"
                                onChange={handleChange}
                                value={contactMe.message}
                                required
                              ></textarea>
                            </div>
                          </Col>
                          <Col>
                            <Col lg={12}>
                              <div className="mb-3 app-label d-flex flex-row">
                                {useEffect(() => {
                                  loadCaptchaEnginge(5);
                                }, [])}
                                <div className="text-center">
                                  <LoadCanvasTemplate
                                    reloadText="Reload"
                                    reloadColor="red"
                                  />
                                </div>
                                <input
                                  name="captcha"
                                  type="text"
                                  className="form-control"
                                  id="captcha"
                                  placeholder="Enter Captcha"
                                  required
                                />
                              </div>
                            </Col>
                            <Col>
                              <div className=" app-label d-flex flex-row">
                                <input
                                  type="checkbox"
                                  id="termcondition"
                                  name="termcondition"
                                  required
                                />
                                <div className="mx-3">
                                  <label>
                                    {" "}
                                    By submiting this form you are allowing us
                                    to call you for marketing purpose And
                                    accepting our{" "}
                                    <a herf="/#">Term and Conditions.</a>
                                  </label>
                                </div>
                                <br />
                                <br />
                                <br />
                              </div>
                            </Col>
                          </Col>
                        </Row>
                        <Row>
                          <div className="col-sm-12">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-custom"
                              onSubmit={handleSubmit}
                            />
                          </div>
                          <div className="col-sm-12"></div>
                        </Row>
                      </form>
                    </div>
                  </Col>

                  <Col lg={4} md={6}>
                    <div className="contact-cantent p-3 ">
                      <div className="contact-details">
                        <div className="float-start contact-icon me-3 mt-2">
                          <Image
                            src="/assets/telephone.png"
                            width={30}
                            height={30}
                            alt="telephone"
                            className="mb-2"
                          />
                        </div>
                        <div className="app-contact-desc text-muted pt-1">
                          <p className="mb-0 info-title f-13">Call :</p>
                          <p className="mb-0 f-13">+91 9886461360</p>
                        </div>
                      </div>

                      <div className="contact-details mt-2">
                        <div className="float-start contact-icon me-3 mt-2">
                          <Image
                            src="/assets/gmail.png"
                            width={30}
                            height={30}
                            alt="gmail"
                            className="mb-2"
                          />
                        </div>
                        <div className="app-contact-desc text-muted pt-1">
                          <p className="mb-0 info-title f-13">Email :</p>
                          <p className="mb-0 f-13">
                            <Link
                              href="3"
                              className="text-muted text-decoration-none"
                            >
                              info@loansprouts.com
                            </Link>
                            <br />
                          </p>
                        </div>
                      </div>

                      <div className="contact-details mt-2">
                        <div className="float-start contact-icon me-3 mt-2">
                          <Image
                            src="/assets/location.png"
                            width={30}
                            height={30}
                            className="mb-2"
                            alt="location"
                          />
                        </div>
                        <div className="app-contact-desc text-muted pt-1">
                          <p className="mb-0 info-title f-13">Location :</p>
                          <p className="mb-0 f-13">
                            <Link
                              href="#"
                              className="text-muted text-decoration-none"
                            >
                              Loansprouts
                              <br /> #240/A, 3rd Cross, Gokula 1st Stage, 1st
                              Phase Mathikere, Bangalore - 560 054, Karnataka,
                              India.
                            </Link>
                          </p>
                        </div>
                      </div>

                      <div className="follow mt-4">
                        <h4 className="text-dark mb-3">Follow</h4>
                        <ul className="follow-icon list-inline mt-32 mb-0">
                          <li className="list-inline-item f-15">
                            <a
                              // href={`${process.env.REACT_APP_FACEBOOK_LINK}`}
                              href="https://www.facebook.com/"
                              target="_blank"
                              className="social-icon text-muted me-1 "
                            >
                              <Image
                                src="/assets/facebook.png"
                                width={30}
                                height={30}
                                alt="facebook"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item f-15">
                            <a
                              target="_blank"
                               href={`${process.env.REACT_APP_TWITTER_LINK}`}
                              className="social-icon text-muted me-1"
                            >
                              <Image
                                src="/assets/twitter.png"
                                width={30}
                                height={30}
                                alt="twitter"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item f-15">
                            <a
                              target="_blank"
                              href={`${process.env.REACT_APP_GOOGLEPLUS_LINK}`}
                              className="social-icon text-muted me-1"
                            >
                              <Image
                                src="/assets/search.png"
                                width={30}
                                height={30}
                                alt="search"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item f-15">
                            <a
                              target="_blank"
                              href={`${process.env.REACT_APP_LINKEDIN_LINK}`}
                              className="social-icon text-muted me-1"
                            >
                              <Image
                                src="/assets/linkedin.png"
                                width={30}
                                height={30}
                                alt="linkedin"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item f-15">
                            <a
                              href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WHATSAPP_NUMBER}&text=${process.env.REACT_APP_WHATSAPP_TEXT}`}
                              className="social-icon text-muted me-1"
                              target="blank"
                            >
                              <Image
                                src="/assets/whatsapp.png"
                                width={30}
                                height={30}
                                alt="whatsapp"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
