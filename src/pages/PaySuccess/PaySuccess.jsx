import React from "react";
import { useSearchParams } from "react-router-dom";

const PaySuccess = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const trxID = searchParams.get("trxID");
	console.log(searchParams);

	return (
		<div className="p-10">
			<h1>{message && <p>{message}</p>}</h1>
			{trxID && <p>Your bKash Transaction ID: {trxID}</p>}
		</div>
	);
};

export default PaySuccess;