"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useParams } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import AuthContext from "@/context/ApiAuth";
import "../../styles/applynow.css";


const ApplyNow = () => {
  const {
    GetCityBySelectionAndId,
    cityBySelectionAndId,
    GetCityArea,
    cityArea,
    GetOutsideCompanyService,
    outsideCompanyService,
    AplyLon,
  } = useContext(AuthContext);

  const d = new Date();
  const dateTime =
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
    "-" +
    (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

  const EmpType = useRef();
  const Serviceid = useRef();
  const CityName = useRef();
  const Area = useRef();
  const FirstName = useRef();
  const LastName = useRef();
  const Email = useRef();
  const PrimaryMobileno = useRef();
  const Address = useRef();
  const BirthDate = useRef();
  const Gender = useRef();
  const MonthlyIncome = useRef();
  const LoanAmount = useRef();
  const PurposeofLoan = useRef();
  const Remark = useRef();
  const PanCard = useRef();
  const AadhaarNo = useRef();

  useEffect(() => {
    GetCityBySelectionAndId();
    GetOutsideCompanyService();
  }, []);

  const DoSubmit = (e) => { 
    e.preventDefault();
    const payload = {
        Serviceid: Number(Serviceid.current.value),
        District: "",
        Area: Area.current.value,
        FirstName: FirstName.current.value,
        LastName: LastName.current.value,
        Email: Email.current.value,
        PrimaryMobileno: PrimaryMobileno.current.value,
        CityName: CityName.current.value,
        BirthDate: BirthDate.current.value,
        Gender: Gender.current.value,
        LoanAmount: Number(LoanAmount.current.value),
        PurposeofLoan: PurposeofLoan.current.value,
        MonthlyIncome: Number(MonthlyIncome.current.value),
        PanCard: PanCard.current.value,
        AadhaarNo: AadhaarNo.current.value,
        Remark: Remark.current.value,
        BranchID: 1,
        CompanyID: "abc",
        SecondaryMobileno: "9999999999",
        StateId: 1,
        RequestDate: dateTime,
        Active: 1,
        Status: "1",
        Address: Address.current.value,
        EmpType: EmpType.current.value,
    }
    console.log(payload)
    const user_captcha = document.getElementById("captchap").value;
    if (validateCaptcha(user_captcha) === true) {
        AplyLon(payload);
        loadCaptchaEnginge(5);
        document.getElementById("captchap").value = "";
      } else {
        alert("Captcha Does Not Match");
        document.getElementById("captchap").value = "";
      }
   }


  return (
    <>
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12}>
              <div className="title-heading mb-5">
                <h3 className="text-dark mb-1 fw-light text-uppercase">
                  Apply For Loan
                </h3>
                <div className="titleBorder rounded-pill"></div>
                <div className="titleBorder2 rounded-pill"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xl={12}>
              <div className="contact-box p-3 shadow">
                <h4>Get your loan aproved within 24 hours of working days.</h4>
                <form className="p-2" onSubmit={DoSubmit}>
                  <Col lg={8} md={10} sm={12}>
                    <Row>
                      <div className="my-2 d-flex">
                        <select
                          className="w-100 h-100 p-2"
                          title="Select Employe Type"
                          name="EmpType"
                          ref={EmpType}
                          // onChange={updateField}
                          required
                          // value={submitData.EmpType}
                        >
                          <option value="">Select Employe Type</option>
                          <option value="Self Employed">Self Employed</option>
                          <option value="Salaried">Salaried</option>
                        </select>
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 d-flex">
                        <select
                          className="w-100 h-100 p-2"
                          title="Select Loan Type"
                          name="Serviceid"
                          ref={Serviceid}
                          //onChange={updateField}
                          required
                          //value={submitData.Serviceid}
                        >
                          <option value="">Select Loan Type</option>
                          {outsideCompanyService?.data?.data?.map((lT) => {

                            return (
                              <option key={lT.servicesId} value={lT.servicesId}>
                                {lT.serviceName}
                              </option>
                            );
                          })}
                        </select>
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <select
                          className="w-100 h-100 p-2"
                          title="Select City"
                          name="CityName"
                          ref={CityName}
                          required
                          onChange={(e)=>GetCityArea(e.target.value)}
                          //value={submitData.CityName}
                        >
                          <option value="">Select City</option>
                          {cityBySelectionAndId?.data.data.map((city, i) => {
                            return (
                              <option key={i} value={city.cityName}>
                                {city.cityName}
                              </option>
                            );
                          })}
                        </select>
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <select
                          className="w-100 h-100 p-2"
                          title="Select Area"
                          name="Area"
                          ref={Area}
                          required
                          //onChange={updateField}
                          //value={submitData.Area}
                        >
                          <option value="">Select Area</option>
                          {cityArea?.data.map((area, i) => {
                            return (
                              <option key={i} value={area.areaName}>
                                {area.areaName}
                              </option>
                            );
                          })}
                        </select>
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <input
                          name="FirstName"
                          type="text"
                          className="form-control"
                          title="First Name"
                          placeholder="First Name"
                          pattern="[A-Z a-z]{1,32}"
                          ref={FirstName}
                          //onChange={updateField}
                          required
                          maxLength="99"
                          //value={submitData.FirstName}
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <input
                          name="LastName"
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          title="Last Name"
                          pattern="[A-Z a-z]{1,32}"
                          ref={LastName}
                          //onChange={updateField}
                          required
                          maxLength="99"
                          //value={submitData.LastName}
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <input
                          name="Email"
                          type="email"
                          className="form-control"
                          title="Email"
                          placeholder="Email"
                          ref={Email}
                          //onChange={updateField}
                          required
                          maxLength="99"
                         // value={submitData.Email}
                          //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <input
                          name="PrimaryMobileno"
                          type="text"
                          className="form-control"
                          title="Mobile Number"
                          placeholder="Mobile Number"
                          ref={PrimaryMobileno}
                         // onChange={updateField}
                          required
                          maxLength="10"
                         // value={submitData.PrimaryMobileno}
                          pattern="[6789][0-9]{9}"
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <textarea
                          name="Address"
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          title="Address"
                          ref={Address}
                         // onChange={updateField}
                          required
                          maxLength="240"
                         // value={submitData.Address}
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="divDate">
                        <span className="divDateSpan form-control">
                          Date of Birth
                        </span>
                        <input
                          className="form-control bordeRadius"
                          name="BirthDate"
                          title="Date Of Birth"
                          placeholder="Date Of Birth"
                          ref={BirthDate}
                        //  value={submitData.BirthDate}
                         // onChange={updateField}
                          type="date"
                          required
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 d-flex">
                        <select
                          className="w-100 h-100 p-2 border-none"
                          name="Gender"
                          title="Gender"
                          ref={Gender}
                          //onChange={updateField}
                          required
                         // value={submitData.Gender}
                        >
                          <option value="">Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <input
                          name="MonthlyIncome"
                          type="number"
                          className="form-control"
                          placeholder="Monthly Income"
                          title="Monthly Income"
                          ref={MonthlyIncome}
                          //onChange={updateField}
                          required
                          min="1"
                          max="999999"
                          //value={submitData.MonthlyIncome}
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <input
                          name="LoanAmount"
                          type="number"
                          className="form-control"
                          placeholder="Loan Amount"
                          title="Loan Amount"
                          ref={LoanAmount}
                          //onChange={updateField}
                          required
                          min="1"
                          max="999999"
                          //value={submitData.LoanAmount}
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label d-flex">
                        <textarea
                          name="PurposeofLoan"
                          type="text"
                          className="form-control"
                          placeholder="Purpose of Loan"
                          title="Purpose of Loan"
                          ref={PurposeofLoan}
                         // onChange={updateField}
                          required
                          maxLength="250"
                         // value={submitData.PurposeofLoan}
                        />
                        <p className="text-danger">*</p>
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label">
                        <textarea
                          name="Remark"
                          type="text"
                          className="form-control"
                          placeholder="Remark"
                          title="Remark"
                          maxLength="250"
                          ref={Remark}
                         // onChange={updateField}
                         // value={submitData.Remark}
                        />
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label">
                        <input
                          name="PanCard"
                          type="text"
                          className="form-control"
                          placeholder="Pan Card Number"
                          title="Pan Card Number"
                          ref={PanCard}
                          //onChange={updateField}
                          //value={submitData.PanCard}
                          pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        />
                      </div>
                    </Row>
                    <Row>
                      <div className="my-2 app-label">
                        <input
                          name="AadhaarNo"
                          type="number"
                          className="form-control"
                          placeholder="Aadhaar Card Number"
                          title="Aadhaar Card Number"
                          ref={AadhaarNo}
                          //onChange={updateField}
                          //value={submitData.AadhaarNo}
                          pattern="[0-9]{12,16}"
                        />
                      </div>
                    </Row>

                    <Row>
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
                          name="captchap"
                          type="text"
                          className="form-control"
                          id="captchap"
                          placeholder="Enter Captcha"
                          required
                        />
                      </div>
                    </Row>
                    <Row>
                      <div className="d-flex">
                        <div className="me-3 mt-2">
                          <input type="checkbox" required />
                        </div>
                        <p>
                          I declare that the information I have provided is
                          accurate & complete to the best of my knowledge. I
                          hereby authorize <b>LoanSprout Ltd.</b> and its
                          affilliates to call, email, send a text throught the
                          Short Messaging Service (SMS) and/or whatsapp me in
                          relation to any of their products.The consent herein
                          shall override any registration for DNC/NDNC.
                        </p>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-custom"
                        />
                      </div>
                      <div className="col-sm-12"></div>
                    </Row>
                  </Col>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ApplyNow;
// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { useParams } from "next/navigation";
// import { Col, Container, Row } from "react-bootstrap";
// import AuthContext from "@/context/ApiAuth";
// import Footer from "@/components/Footer";
// import "../../styles/applynow.css"
// import Link from "next/link";

// const ApplyNow = ({ title }) => {
//   const {
//     GetCityBySelectionAndId,
//     cityBySelectionAndId,
//     GetCityArea,
//     cityArea,
//     GetOutsideCompanyService,
//     outsideCompanyService,
//     AplyLon,
//     ds,
//     GetCity,
//     postCity,
//     postCityArea,
//     GetServices,
//     services,
//   } = useContext(AuthContext);

//   useEffect(() => {
//     GetCityBySelectionAndId();
//     GetOutsideCompanyService();
//   }, []);

//   //const [cityValue, setCityValue] = useState();
//   //let { typeLoan } = useParams();
//   //const { state } = useLocation();

//   const d = new Date();
//   const dateTime =
//     d.getFullYear() +
//     "-" +
//     (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
//     "-" +
//     (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

//   const [submitData, setSubmitData] = useState({
//     Serviceid: "",
//     District: "",
//     Area: "",
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PrimaryMobileno: "",
//     CityName: "",
//     BirthDate: "",
//     Gender: "",
//     LoanAmount: "",
//     PurposeofLoan: "",
//     MonthlyIncome: "",
//     PanCard: "",
//     AadhaarNo: "",
//     Remark: "",
//     BranchID: 1,
//     CompanyID: "abc",
//     SecondaryMobileno: "9999999999",
//     StateId: 1,
//     RequestDate: dateTime,
//     Active: 1,
//     Status: "1",
//     Address: "",
//     EmpType: "",
//   });

//   const doSubmit = (e) => {
//     e.preventDefault();
//     const user_captcha = document.getElementById("captchap").value;

//     if (validateCaptcha(user_captcha) === true) {
//       AplyLon(submitData);
//       loadCaptchaEnginge(5);
//       document.getElementById("captchap").value = "";
//       handleReg();
//     } else {
//       alert("Captcha Does Not Match");
//       document.getElementById("captchap").value = "";
//     }
//   };

//   const updateField = (e) => {
//     setSubmitData({
//       ...submitData,
//       [e.target.name]:
//         e.target.name === "Serviceid" ||
//         e.target.name === "LoanAmount" ||
//         e.target.name === "MonthlyIncome"
//           ? Number(e.target.value)
//           : e.target.value,
//     });
//     if (e.target.name === "CityName") {
//       GetCityArea(e.target.value);
//     }
//   };

//   //console.log(ds);

//   const handleReg = async () => {
//     //  const dm = await ds?.data
//     //   console.log(dm)
//     setSubmitData({
//       Serviceid: "",
//       District: "",
//       Area: "",
//       FirstName: "",
//       LastName: "",
//       Email: "",
//       PrimaryMobileno: "",
//       CityName: "",
//       BirthDate: "",
//       Gender: "",
//       LoanAmount: "",
//       PurposeofLoan: "",
//       MonthlyIncome: "",
//       PanCard: "",
//       AadhaarNo: "",
//       Remark: "",
//       BranchID: "",
//       CompanyID: "",
//       SecondaryMobileno: "",
//       StateId: "",
//       RequestDate: "",
//       Active: "",
//       Status: "",
//       Address: "",
//       EmpType: "",
//     });
//   };

//   const typeOfloan = [
//     {
//       name: "Home Loan",
//       value: "1",
//     },
//     {
//       name: "Personal Loan",
//       value: "2",
//     },
//     {
//       name: "Gold Loan",
//       value: "3",
//     },
//     {
//       name: "Auto Loan",
//       value: "4",
//     },
//     {
//       name: "Education Loan",
//       value: "5",
//     },
//     {
//       name: "Mortgage Loan",
//       value: "6",
//     },
//     {
//       name: "Marriage Loan",
//       value: "7",
//     },
//     {
//       name: "Travel Loan",
//       value: "8",
//     },
//     {
//       name: "Business Loa",
//       value: "9",
//     },
//     {
//       name: "Car Loan",
//       value: "10",
//     },
//     {
//       name: "Health Loan",
//       value: "11",
//     },
//     {
//       name: "Property Loan",
//       value: "12",
//     },
//     {
//       name: "Daily Finance",
//       value: "13",
//     },
//     {
//       name: "Weekly Financ",
//       value: "14",
//     },
//     {
//       name: "Monthly Finance",
//       value: "15",
//     },
//   ];
//   //console.log(outsideCompanyService);
//   return (
//     <>
//       <section className="section bg-light mt-4" id="contact">
//         <Container>
//           <Row>
//             <Col lg={12}>
//               <div className="title-heading mb-5">
//                 <h3 className="text-dark mb-1 fw-light text-uppercase">
//                   Apply For Loan
//                 </h3>
//                 <div className="title-border-simple position-relative"></div>
//               </div>
//             </Col>
//           </Row>

//           <Row>
//             <Col lg={12}>
//               <div className="contact-box p-5">
//                 <div>
//                   <h4>
//                     Get your loan aproved within 24 hours of working days.
//                   </h4>
//                 </div>
//                 <Row>
//                   <Col lg={7} md={6}>
//                     <div className="custom-form p-3">
//                       <form name="myForm" onSubmit={doSubmit}>
//                         <div id="simple-msg"></div>
//                         <Row>
//                           <div className="my-2 d-flex">
//                             <select
//                               className="w-100 h-100 p-2"
//                               title="Select Employe Type"
//                               name="EmpType"
//                               onChange={updateField}
//                               required
//                               value={submitData.EmpType}
//                             >
//                               <option value="">Select Employe Type</option>
//                               <option value="Self Employed">
//                                 Self Employed
//                               </option>
//                               <option value="Salaried">Salaried</option>
//                             </select>
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 d-flex">
//                             <select
//                               className="w-100 h-100 p-2"
//                               title="Select Loan Type"
//                               name="Serviceid"
//                               onChange={updateField}
//                               required
//                               value={submitData.Serviceid}
//                             >
//                               <option value="">Select Loan Type</option>
//                               {outsideCompanyService?.data?.data?.map((lT) => {
//                                 return (
//                                   <option
//                                     key={lT.servicesid}
//                                     value={lT.servicesid}
//                                   >
//                                     {lT.serviceName}
//                                   </option>
//                                 );
//                               })}
//                             </select>
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <select
//                               className="w-100 h-100 p-2"
//                               title="Select City"
//                               name="CityName"
//                               required
//                               onChange={updateField}
//                               value={submitData.CityName}
//                             >
//                               <option value="">Select City</option>
//                               {cityBySelectionAndId?.data.data.map(
//                                 (city, i) => {
//                                   return (
//                                     <option key={i} value={city.cityName}>
//                                       {city.cityName}
//                                     </option>
//                                   );
//                                 }
//                               )}
//                             </select>
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <select
//                               className="w-100 h-100 p-2"
//                               title="Select Area"
//                               name="Area"
//                               required
//                               onChange={updateField}
//                               value={submitData.Area}
//                             >
//                               <option value="">Select Area</option>
//                               {cityArea?.data.map((area, i) => {
//                                 return (
//                                   <option key={i} value={area.areaName}>
//                                     {area.areaName}
//                                   </option>
//                                 );
//                               })}
//                             </select>
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <input
//                               name="FirstName"
//                               type="text"
//                               className="form-control"
//                               title="First Name"
//                               placeholder="First Name"
//                               pattern="[A-Z a-z]{1,32}"
//                               onChange={updateField}
//                               required
//                               maxLength="99"
//                               value={submitData.FirstName}
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <input
//                               name="LastName"
//                               type="text"
//                               className="form-control"
//                               placeholder="Last Name"
//                               title="Last Name"
//                               pattern="[A-Z a-z]{1,32}"
//                               onChange={updateField}
//                               required
//                               maxLength="99"
//                               value={submitData.LastName}
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <input
//                               name="Email"
//                               type="email"
//                               className="form-control"
//                               title="Email"
//                               placeholder="Email"
//                               onChange={updateField}
//                               required
//                               maxLength="99"
//                               value={submitData.Email}
//                               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <input
//                               name="PrimaryMobileno"
//                               type="text"
//                               className="form-control"
//                               title="Mobile Number"
//                               placeholder="Mobile Number"
//                               onChange={updateField}
//                               required
//                               maxLength="10"
//                               value={submitData.PrimaryMobileno}
//                               pattern="[6789][0-9]{9}"
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <textarea
//                               name="Address"
//                               type="text"
//                               className="form-control"
//                               placeholder="Address"
//                               title="Address"
//                               onChange={updateField}
//                               required
//                               maxLength="240"
//                               value={submitData.Address}
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="divDate">
//                             <span className="divDateSpan form-control">
//                               Date of Birth
//                             </span>
//                             <input
//                               className="form-control bordeRadius"
//                               name="BirthDate"
//                               title="Date Of Birth"
//                               placeholder="Date Of Birth"
//                               value={submitData.BirthDate}
//                               onChange={updateField}
//                               type="date"
//                               required
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 d-flex">
//                             <select
//                               className="w-100 h-100 p-2 "
//                               name="Gender"
//                               title="Gender"
//                               onChange={updateField}
//                               required
//                               value={submitData.Gender}
//                             >
//                               <option value="">Gender</option>
//                               <option value="Male">Male</option>
//                               <option value="Female">Female</option>
//                             </select>
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <input
//                               name="MonthlyIncome"
//                               type="number"
//                               className="form-control"
//                               placeholder="Monthly Income"
//                               title="Monthly Income"
//                               onChange={updateField}
//                               required
//                               min="1"
//                               max="999999"
//                               value={submitData.MonthlyIncome}
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <input
//                               name="LoanAmount"
//                               type="number"
//                               className="form-control"
//                               placeholder="Loan Amount"
//                               title="Loan Amount"
//                               onChange={updateField}
//                               required
//                               min="1"
//                               max="999999"
//                               value={submitData.LoanAmount}
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label d-flex">
//                             <textarea
//                               name="PurposeofLoan"
//                               type="text"
//                               className="form-control"
//                               placeholder="Purpose of Loan"
//                               title="Purpose of Loan"
//                               onChange={updateField}
//                               required
//                               maxLength="250"
//                               value={submitData.PurposeofLoan}
//                             />
//                             <p className="text-danger">*</p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label">
//                             <textarea
//                               name="Remark"
//                               type="text"
//                               className="form-control"
//                               placeholder="Remark"
//                               title="Remark"
//                               maxLength="250"
//                               onChange={updateField}
//                               value={submitData.Remark}
//                             />
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label">
//                             <input
//                               name="PanCard"
//                               type="text"
//                               className="form-control"
//                               placeholder="Pan Card Number"
//                               title="Pan Card Number"
//                               onChange={updateField}
//                               value={submitData.PanCard}
//                               pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
//                             />
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="my-2 app-label">
//                             <input
//                               name="AadhaarNo"
//                               type="number"
//                               className="form-control"
//                               placeholder="Aadhaar Card Number"
//                               title="Aadhaar Card Number"
//                               onChange={updateField}
//                               value={submitData.AadhaarNo}
//                               pattern="[0-9]{12,16}"
//                             />
//                           </div>
//                         </Row>

//                         <Row>
//                           <div className="mb-3 app-label d-flex flex-row">
//                             {useEffect(() => {
//                               loadCaptchaEnginge(5);
//                             }, [])}
//                             <div className="text-center">
//                               <LoadCanvasTemplate
//                                 reloadText="Reload"
//                                 reloadColor="red"
//                               />
//                             </div>
//                             <input
//                               name="captchap"
//                               type="text"
//                               className="form-control"
//                               id="captchap"
//                               placeholder="Enter Captcha"
//                               required
//                             />
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="d-flex">
//                             <div className="me-3 mt-2">
//                               <input type="checkbox" required />
//                             </div>
//                             <p>
//                               I declare that the information I have provided is
//                               accurate & complete to the best of my knowledge. I
//                               hereby authorize <b>LoanSprout Ltd.</b> and its
//                               affilliates to call, email, send a text throught
//                               the Short Messaging Service (SMS) and/or whatsapp
//                               me in relation to any of their products.The
//                               consent herein shall override any registration for
//                               DNC/NDNC.
//                             </p>
//                           </div>
//                         </Row>
//                         <Row>
//                           <div className="col-sm-12">
//                             <input
//                               type="submit"
//                               id="submit"
//                               name="send"
//                               className="submitBnt btn btn-custom"
//                             />
//                           </div>
//                           <div className="col-sm-12"></div>
//                         </Row>
//                       </form>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default ApplyNow;
