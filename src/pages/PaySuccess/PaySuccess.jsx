import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { paymentServices } from "../../services/payments";
import { getToken } from "../../utils/cookies";
import { useQuery } from "@tanstack/react-query";
import { BkashQueryPaymentAPICall } from "../../services/bkash";

const PaySuccess = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const trxID = searchParams.get("trxID");
	const paymentId = searchParams.get("paymentId");
	const navigate = useNavigate();

	const { data: response = null } = useQuery({
		queryKey: ["pay,refund", paymentId],
		queryFn: async () => {
			return await BkashQueryPaymentAPICall(paymentId);
		},
	});

	console.log("bkash-query-api-call", response);

	useEffect(() => {
		const saveInfoToDb = async () => {
			// ? save payments history into DB
			let savedPaid = {
				transaction_id: response?.trxID,
				payment_id: paymentId,
				status: response?.transactionStatus,
				amount: response?.amount,
				payment_create_time: response?.paymentCreateTime || new Date(),
				method: "bkash",
			};
			try {
				const result = await paymentServices.createPayments(
					savedPaid,
					getToken().token
				);
				console.log(result);
				if (result?.success) {
					navigate("/user/account/dashboard");
				}
			} catch (error) {
				console.log(error);
				alert(
					"Payment successfully\n but your payment information doesn't save into our database\n please contact us"
				);
			}
		};

		if (response?.paymentID) {
			saveInfoToDb();
		}
	}, [navigate, paymentId, response]);

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
