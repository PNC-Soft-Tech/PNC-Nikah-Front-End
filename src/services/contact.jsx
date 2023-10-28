import axios from "axios";

const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

const getContactForBuyer = async (userId, bioId, token) => {
	if (!userId || !bioId || !token) {
		return null;
	}
	const response = await axios.get(
		baseUrl + `/contact/bio-contact/${userId}/${bioId}`,
		{
			headers: {
				Authorization: token,
			},
		}
	);
	return response.data;
};

export const ContactServices = {
	getContactForBuyer,
};
