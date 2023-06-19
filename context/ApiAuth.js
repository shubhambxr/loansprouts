"use client";
import React, { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import jwt_decode from "jwt-decode";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter()
  const [outsideCompanyService, setOutsideCompanyService] = useState();
  const [cityBySelectionAndId, setCityBySelectionAndId] = useState();
  const [cityArea, setCityArea] = useState();

  // const apiKey = `${process.env.REACT_APP_API_KEY}`;
  // const baseUrl = `${process.env.REACT_APP_API_URL}`;

  // let sendToken = sessionStorage.getItem("token") != null ? sessionStorage.getItem("token").replaceAll('"', "") : "";

  const DSAloginHandle = async (payload) => {
    let url = `http://api.loansprouts.com/api/CompanyAuthentication/Companylogin`;
    let config = {
      headers: {
        authKey: "gdfgdfg5464545fdgdf^dfgdfg5464fdgdfg",
      },
    };
    try {
      await axios.post(url, payload, config).then((res) => {
        if (res.status === 200) {
          if (res.data.status === "Success") {
            sessionStorage.setItem("token", JSON.stringify(res.data.message));
            let verifyData = res.data.message!=null ? jwt_decode(res.data.message) : null
            console.log(verifyData)
             if (verifyData.Utype === "Company") {
              // ToastifyFunction({
              //   text: "Loged In Successfuly  Company",
              //   background: "linear-gradient(to right, #5AFF15,#00B712)",
              // });
              router.push('/dsa/company')              
             } else if(verifyData.Utype === "Admin"){
              // ToastifyFunction({
              //   text: "Loged In Successfuly  Admin ",
              //   background: "linear-gradient(to right, #5AFF15,#00B712)",
              // });
              router.push('/dsa/company')
             }
          } else {
            // ToastifyFunction({
            //   text: res.data.message + " ",
            //   background: "linear-gradient(to right, #FE0944,#f86666)",
            // });
            console.log("eror")
          }
        }
      });
    } catch (e) {
      // toast(
      //   "Try Again " + e + " Some Failur Occure Please Reach us through mail"
      // );
    }
  };

  const GetOutsideCompanyService = async () => {
    // const companyid = sendToken ? jwt_decode(sendToken).ID : "1";
    const companyid = 0;
    let url = `http://api.loansprouts.com/api/ServicesAssignCompany/GetOutsideCompanyService?companyid=${companyid}&is_bool=0`;
    let config = {
      headers: {
        authKey: "gdfgdfg5464545fdgdf^dfgdfg5464fdgdfg",
        "Content-Type":
          "application/json, text/plain, multipart/form-data, */*",
      },
    };
    try {
      await axios.get(url, config).then((res) => {
        setOutsideCompanyService(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const GetCityBySelectionAndId = async () => {
    const url =
      "http://api.loansprouts.com/api/CityAssignCompany/GetCompanyCity?cid=1";
    let config = {
      headers: {
        authKey: "gdfgdfg5464545fdgdf^dfgdfg5464fdgdfg",
      },
    };
    try {
      await axios.get(url, config).then((res) => {
        setCityBySelectionAndId(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const GetCityArea = async (cityId) => {
    const url =
      `http://api.loansprouts.com/api/DistrictArea/GetAllAreabydistrict?dist=${cityId}`;
    let config = {
      headers: {
        authKey: "gdfgdfg5464545fdgdf^dfgdfg5464fdgdfg",
      },
    };
    try {
      await axios.get(url, config).then((res) => {
        setCityArea(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const AplyLon = async (payload) => {
    let url = `http://api.loansprouts.com/api/RequestApplyApplication/RequestApplyApplication`;
    let config = {
      headers: {
        authKey: "gdfgdfg5464545fdgdf^dfgdfg5464fdgdfg",
        "Content-Type":
          "application/json, text/plain,  */*",
      },
    };
    try {
      await axios.post(url, payload, config).then((res) => {
        if (res.status === 200) {
          if (res?.data?.status === "Success") {
            console.log(res?.data?.status + " : " + res?.data?.message);
          } else if (res?.data?.status === "Failure") {
            console.log(res?.data?.status + " : " + res?.data?.message);
          }
        }
        //setDs(res);
      });
    } catch (e) {
      console.log(e)(
        "Try Again " + e + " or Some Failur Occure Please Reach us through mail"
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        GetOutsideCompanyService,
        outsideCompanyService,
        GetCityBySelectionAndId,
        cityBySelectionAndId,
        GetCityArea,
        cityArea,
        AplyLon,
        DSAloginHandle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
