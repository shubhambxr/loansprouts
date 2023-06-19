"use client";
import React, { useState, useContext } from "react";
import AuthContext from "@/context/ApiAuth";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter()
  const { DSAloginHandle } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    let payload = {
      Username: email,
      UserPassword: password,
    };
    console.log(payload)
    DSAloginHandle(payload);
    //router.push('/dsa/company')
  };


  return (
    <>
      <div className=""></div>
      <div className="d-flex justify-content-center pt-5 bg-light">
        <form
          className=" border rounded p-4  col-11 col-sm-6 col-md-6 col-lg-5 col-xl-5 col-xxl-4 "
          onSubmit={handleLogin}
        >
          <h1 className="d-flex justify-content-center mb-4">
            Login Company / DSA
          </h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <Link className="" href={"/dsa/register"}>
              Register Now!
            </Link>

            <button type="submit" className="btn btn-primary float-end mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
