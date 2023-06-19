"use client";
import { AuthProvider } from "./ApiAuth";
const ApiAuthClient = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ApiAuthClient;
