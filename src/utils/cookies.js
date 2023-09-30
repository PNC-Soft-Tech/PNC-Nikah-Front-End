import Cookies from "js-cookie";
const setToken = (data) => {
	Cookies.set("pnc-nikkha-tokenInfo", JSON.stringify(data), { expires: 7 });
};

const getToken = () => {
	return JSON.parse(Cookies.get("pnc-nikkha-tokenInfo"));
};

const removeToken = () => {
	Cookies.remove("pnc-nikkha-tokenInfo");
};

export { setToken, getToken, removeToken };
