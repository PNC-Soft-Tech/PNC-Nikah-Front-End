import axios from "axios";
const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

const createPayments = async (data, token) => {
	const response = await axios.post(baseUrl + "/payments", data, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return response.data;
};

const getPaymentsByUser = async (token) => {
	const response = await axios.get(baseUrl + "/payments", {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};
const updatePaymentInfo = async (updatedData, token) => {
	if (!updatedData || !token) {
		return null;
	}
	const { data } = await axios.put(baseUrl + `/payments`, updatedData, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return data;
};
export const paymentServices = {
	createPayments,
	getPaymentsByUser,
	updatePaymentInfo
};
