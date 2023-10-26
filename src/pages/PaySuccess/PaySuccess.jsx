import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paymentServices } from "../../services/payments";
import { getToken } from "../../utils/cookies";
import { useState } from "react";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

const PaySuccess = () => {
	const [showMessage, setShowMessage] = useState(false);
	const [loading, setLoading] = useState(true);
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const paymentId = searchParams.get("paymentId");
	const trxId = searchParams.get("trxID");
	const status = searchParams.get("status");
	const payment_create_time = searchParams.get("payment_create_time");
	const amount = searchParams.get("amount");
	const bioId = searchParams.get("bioId") || 0;

	const navigate = useNavigate();

	// const { data: response = null } = useQuery({
	// 	queryKey: ["pay,refund", paymentId],
	// 	queryFn: async () => {
	// 		return await BkashQueryPaymentAPICall(paymentId);
	// 	},
	// });

	useEffect(() => {
		if (showMessage & !loading) {
			const timeout = setTimeout(() => {
				setShowMessage(false);
				navigate("/user/account/dashboard");
			}, 10000); // 10 seconds timeout
			return () => clearTimeout(timeout);
		}
	}, [loading, navigate, showMessage]);

	// console.log("bkash-query-api-call", response);

	useEffect(() => {
		const saveInfoToDb = async () => {
			// ? save payments history into DB
			let savedPaid = {
				transaction_id: trxId,
				payment_id: paymentId,
				status,
				amount,
				payment_create_time: payment_create_time || new Date(),
				method: "bkash",
				reason: bioId > 0 ? "bio_purchase" : "buy_points",
			};
			try {
				setLoading(true);
				const result = await paymentServices.createPayments(
					savedPaid,
					getToken().token
				);
				console.log(result);
				// if (result?.success) {
				// 	navigate("/user/account/dashboard");
				// }
				if (bioId > 0) {
					navigate(`/send-form/${bioId}`);
				}
				setLoading(false);
				setShowMessage(true);
			} catch (error) {
				console.log(error);
				if (bioId) {
					navigate(`/biodata/${bioId}`);
				}
				setLoading(false);
				setShowMessage(true);
				console.log(error);
				alert(
					"Payment successfully\n but your payment information doesn't save into our database\n please contact us"
				);
			}
		};

		if (paymentId) {
			saveInfoToDb();
		}
	}, [amount, bioId, navigate, paymentId, payment_create_time, status, trxId]);

	return (
		<div className="sm:mx-auto mx-3 my-10 rounded-md border-green-500 p-10 flex flex-col items-center justify-center w-full sm:w-1/2 bg-green-300">
			{loading ? (
				<LoadingCircle />
			) : (
				message && (
					<h1 className="text-3xl mb-4 text-center text-green-900">
						{message}
					</h1>
				)
			)}
		</div>
	);
};

export default PaySuccess;
