import axios from "axios";

export function BkashExecutePaymentAPICall(paymentID) {
	return new Promise((resolve, reject) => {
		axios
			.post("http://localhost:5000/api/v1/bkash/execute", {
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
			.post("http://localhost:5000/api/v1/bkash/query", {
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
			.post("http://localhost:5000/api/v1/bkash/refund", {
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
