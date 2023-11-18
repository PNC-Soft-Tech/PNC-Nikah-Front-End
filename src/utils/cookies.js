import Cookies from "js-cookie";
const setToken = (data) => {
	Cookies.set("pnc-nikkha-tokenInfo", JSON.stringify(data), { expires: 7 });
};

const getToken = () => {
	let data = Cookies.get("pnc-nikkha-tokenInfo");
	if (data) {
		data = JSON.parse(data);
	}
	return data;
};

const removeToken = () => {
	Cookies.remove("pnc-nikkha-tokenInfo");
};

export { setToken, getToken, removeToken };
