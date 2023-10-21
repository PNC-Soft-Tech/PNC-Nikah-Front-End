import axios from "axios";
const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

const createLikes = async (data, token) => {
	const response = await axios.post(baseUrl + "/favorites", data, {
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
	return response.data;
};
const getLikes = async (bio_id) => {
	const response = await axios.get(`${baseUrl}/favorites/bio-data/${bio_id}`);
	return response.data;
};
const getUserLikes = async (user_id, bio_id) => {
	const response = await axios.get(
		`${baseUrl}/favorites/user-data/${user_id}/${bio_id}`
	);
	return response.data;
};
export const LikesServices = {
	createLikes,
	getLikes,
	getUserLikes,
};
