import axios from "axios";
const baseUrl =
	import.meta.env.VITE_REACT_APP_NODE_ENV === "development"
		? "http://localhost:5000/api/v1"
		: "https://nikkahbackend.mclabbu.xyz/api/v1";

export default function BkashCreatePaymentAPICall(amount, bioId = 0) {
	console.log("Button Clicked !!");
	let url = `https://pnc-nikah.com/pay${bioId > 0 ? `?bioId=${bioId}` : ""}`;
	// console.log(url, bioId);

	axios
		.post(baseUrl + "/bkash/create", {
			amount: amount,
			callbackURL: url,
		})
		.then((response) => {
			console.log("Data was successfully sent.", response);
			console.log(response);
			if (response?.data?.bkashURL) {
				window.location.href = response?.data?.bkashURL;
			} else {
				window.location.href = "/";
			}
		})
		.catch((error) => {
			console.log("An error occurred:", error);
		});
}
export function BkashExecutePaymentAPICall(paymentID) {
	return new Promise((resolve, reject) => {
		axios
			.post(baseUrl + "/bkash/execute", {
				paymentID: paymentID,
			})
			.then((response) => {
				// console.log('Data was successfully sent.', response.data);
				resolve(response.data); // Resolve the promise with the response data
			})
			.catch((error) => {
				console.log("An error occurred:", error);
				reject(error); // Reject the promise with the error
			});
	});
}

export function BkashQueryPaymentAPICall(paymentID) {
	return new Promise((resolve, reject) => {
		axios
			.post(baseUrl + "/bkash/query", {
				paymentID: paymentID,
			})
			.then((response) => {
				//console.log('Data was successfully sent.', response.data);
				resolve(response.data); // Resolve the promise with the response data
			})
			.catch((error) => {
				console.log("An error occurred:", error);
				reject(error); // Reject the promise with the error
			});
	});
}

export function BkashRefundPaymentAPICall(paymentID, trxID, amount) {
	return new Promise((resolve, reject) => {
		axios
			.post(baseUrl + "/bkash/refund", {
				paymentID: paymentID,
				trxID: trxID,
				amount: amount,
				sku: "test",
				reason: "test",
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				console.log("An error occurred:", error);
				reject(error);
			});
	});
}
