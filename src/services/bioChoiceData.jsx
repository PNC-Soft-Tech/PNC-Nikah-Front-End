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
const updateBioChoiceData = async (id, data, token) => {
	if (!id || !token) {
		return null;
	}
	const response = await axios.put(
		baseUrl + `/bio-choice-data/bio-data/${id}`,
		data,
		{
			headers: {
				Authorization: token,
				"Content-Type": "application/json",
			},
		}
	);
	return response.data;
};
const getBioChoiceDataFirstStep = async (token) => {
	const response = await axios.get(baseUrl + "/bio-choice-data/first-step", {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};
const getBioChoiceDataSecondStep = async (token) => {
	const response = await axios.get(baseUrl + "/bio-choice-data/second-step", {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};
const checkBioChoiceDataSecondStep = async (bioId, token) => {
	const response = await axios.get(
		baseUrl + `/bio-choice-data/check-second-step/${bioId}`,
		{
			headers: {
				Authorization: token,
			},
		}
	);
	return response.data;
};
const checkBioChoiceDataFirstStep = async (bioId, token) => {
	const response = await axios.get(
		baseUrl + `/bio-choice-data/check-first-step/${bioId}`,
		{
			headers: {
				Authorization: token,
			},
		}
	);
	return response.data;
};
const getBioChoiceShare = async (token) => {
	const response = await axios.get(baseUrl + `/bio-choice-data/bio-share`, {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};

export const BioChoiceDataServices = {
	createBioChoiceData,
	getBioChoiceDataFirstStep,
	getBioChoiceDataSecondStep,
	checkBioChoiceDataSecondStep,
	checkBioChoiceDataFirstStep,
	getBioChoiceShare,
	updateBioChoiceData,
};
