"use client";
import "../styles/home.css";
import Home from "@/components/Home";
import Loan from "@/components/Loan";
import DocumentRequried from "@/components/DocumentRequried";
import CountUpBox from "@/components/CountUpBox";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Warning from "@/components/Warning";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
const page = () => {
  
  return (
    <>
      <Home />
      <Loan/>
      <DocumentRequried/>
      <CountUpBox/>
      <Contact/>
      <Warning/>
      {/* <AboutUs/> */}
      <Footer/>
    </>
  );
};

export default page;
