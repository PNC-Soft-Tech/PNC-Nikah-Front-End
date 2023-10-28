import axios from "axios";

const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

const getUserInfoStatus = async (bioId) => {
	if (!bioId) {
		return null;
	}
	const response = await axios.get(baseUrl + `/user-info/status/${bioId}`);
	return response.data;
};
const updateUserInfo = async (data, token) => {
	if (!token) {
		return null;
	}
	const response = await axios.put(baseUrl + `/user-info`, data, {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};

export const UserInfoServices = {
	getUserInfoStatus,
	updateUserInfo,
};
