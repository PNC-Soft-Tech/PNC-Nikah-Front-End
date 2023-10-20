import { useSearchParams } from "react-router-dom";

const RefundSuccess = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const refundTrxID = searchParams.get("refundTrxID");

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
				<h1 className="text-3xl mb-4 text-center">Refund Success</h1>
				{refundTrxID && (
					<p className="text-center mb-4">
						Your refund transaction ID: {refundTrxID}
					</p>
				)}
				{message && <p className="text-center">{message}</p>}
			</div>
		</div>
	);
};

export default RefundSuccess;
