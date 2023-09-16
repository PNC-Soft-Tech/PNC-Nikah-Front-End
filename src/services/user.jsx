import axios from "axios";
const baseUrl = "https://nikkahbackend.mclabbu.xyz/api/v1";

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
};
