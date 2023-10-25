import axios from "axios";

const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

const createBioChoiceData = async (data, token) => {
	const response = await axios.post(baseUrl + "/bio-choice-data", data, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return response.data;
};

export const BioChoiceDataServices = {
	createBioChoiceData,
};
