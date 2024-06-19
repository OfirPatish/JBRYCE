import { appStore } from "../Redux/store";
import { isExpired, decodeToken } from "react-jwt";
import { createUserLoginAction, createUserLogoutAction } from "../Redux/AuthReducer";

// Validate the JWT token and dispatch the user login action
export const validateAndDispatchJWT = () => {
  let token = sessionStorage.getItem("jwt")?.split(" ")[1] || localStorage.getItem("jwt")?.split(" ")[1] || "";
  if (!token || isExpired(token)) {
    appStore.dispatch(createUserLogoutAction());
    return false;
  }
  let decodedToken: any = decodeToken(token);
  if (decodedToken) {
    decodedToken.jwt = "Bearer " + token;
    appStore.dispatch(createUserLoginAction(decodedToken));
    return true;
  } else {
    appStore.dispatch(createUserLogoutAction());
    return false;
  }
};

// Get the JWT token from local storage or session storage
export const getAuthToken = () => {
  return localStorage.getItem("jwt") || sessionStorage.getItem("jwt");
};
