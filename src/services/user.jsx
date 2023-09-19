import axios from "axios";
const baseUrl =
  import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
    ? "http://localhost:3000/api/v1"
    : "https://nikkahbackend.mclabbu.xyz/api/v1";

console.log(baseUrl);

const createUserInfo = async (data) => {
  const generalInfo = await axios.post(baseUrl + "/user-info", data);
  return generalInfo;
};

const createUserInfoForGoogleSignin = async (data) => {
  const generalInfo = await axios.post(
    baseUrl + "/user-info/create-login-user",
    data
  );
  return generalInfo;
};

const getUserToken = async (tokenId) => {
  if (!tokenId) {
    return null;
  }
  const { data } = await axios.get(baseUrl + "/token/create-token/" + tokenId);
  return data;
};

const getUserInfoByEmail = async (email) => {
  if (!email) {
    return null;
  }
  const generalInfo = await axios.get(baseUrl + "/user-info/email/" + email);
  return generalInfo;
};

export const userServices = {
  createUserInfo,
  createUserInfoForGoogleSignin,
  getUserInfoByEmail,
  getUserToken,
};
