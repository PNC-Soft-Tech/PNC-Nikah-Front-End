import axios from "axios";
const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

console.log(baseUrl);

const verifyToken = async (token) => {
	const { data } = await axios.get(baseUrl + `/token/verify-token`, {
		headers: {
			Authorization: token,
		},
	});
	return data;
};

const createUserInfo = async (data) => {
	const generalInfo = await axios.post(baseUrl + "/user-info", data);
	return generalInfo;
};

const createUserInfoForGoogleSignIn = async (data) => {
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
	const { data } = await axios.get(baseUrl + "/user-info/email/" + email);
	return data;
};

const getGeneralInfoByUserId = async (id) => {
	if (!id) {
		return null;
	}
	console.log(id);
	const { data } = await axios.get(baseUrl + `/general-info/${id}/user-id`);
	console.log(data);
	return data;
};
const createAddressInfo = async (data, token) => {
	const generalInfo = await axios.post(baseUrl + "/address", data, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return generalInfo.data;
};
const updateGeneralInfo = async (updatedData, token) => {
	if (!updatedData || !token) {
		return null;
	}
	const { data } = await axios.put(baseUrl + `/general-info`, updatedData, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return data;
};
const updateAddressInfo = async (updatedData, token) => {
	if (!updatedData || !token) {
		return null;
	}
	const { data } = await axios.put(baseUrl + `/address`, updatedData, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return data;
};

const getAddressInfoByUserId = async (id) => {
	if (!id) {
		return null;
	}
	// console.log(id);
	const { data } = await axios.get(baseUrl + `/address/${id}/user-id`);
	console.log(data);
	return data;
};

export const userServices = {
	createUserInfo,
	createUserInfoForGoogleSignIn,
	getUserInfoByEmail,
	getGeneralInfoByUserId,
	getUserToken,
	getAddressInfoByUserId,
	updateGeneralInfo,
	updateAddressInfo,
	createAddressInfo,
	verifyToken,
};
