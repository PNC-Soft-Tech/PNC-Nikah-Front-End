import axios from "axios";

const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

const createContactPurchaseData = async (data, token) => {
	const response = await axios.post(baseUrl + "/contact-purchase-data", data, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return response.data;
};

export const ContactPurchaseDataServices = {
	createContactPurchaseData,
};
