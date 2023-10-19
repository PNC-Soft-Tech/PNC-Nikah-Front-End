import { Link, useSearchParams } from "react-router-dom";

const PaySuccess = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const trxID = searchParams.get("trxID");
	const paymentId = searchParams.get("paymentId");
	const refundTrxID = searchParams.get("refundTrxID");

	console.log(searchParams);

	return (
		<div className="p-10">
			<h1>{message && <p>{message}</p>}</h1>
			{trxID && <p>Your bKash Transaction ID: {trxID}</p>}
			{refundTrxID && <p>Your refund transaction ID: {refundTrxID}</p>}
			<Link to={`/admin/refund/${paymentId}`}>refund money</Link>
		</div>
	);
};

export default PaySuccess;
