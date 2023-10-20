import { Link, useSearchParams } from "react-router-dom";

const PaySuccess = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const trxID = searchParams.get("trxID");
	const paymentId = searchParams.get("paymentId");

	return (
		<div className="p-10">
			{message && <h1 className="text-3xl mb-4 text-center">{message}</h1>}
			{trxID && (
				<p className="text-center mb-4">Your bKash Transaction ID: {trxID}</p>
			)}
			<Link
				to={`/admin/refund/${paymentId}`}
				className="block text-center text-blue-500 hover:underline"
			>
				refund money
			</Link>
		</div>
	);
};

export default PaySuccess;
