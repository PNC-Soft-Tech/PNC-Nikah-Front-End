import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paymentServices } from "../../services/payments";
import { getToken } from "../../utils/cookies";
import { useQuery } from "@tanstack/react-query";
import { BkashQueryPaymentAPICall } from "../../services/bkash";
import { useState } from "react";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

const PaySuccess = () => {
	const [showMessage, setShowMessage] = useState(false);
	const [loading, setLoading] = useState(true);
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const paymentId = searchParams.get("paymentId");
	const trxId = searchParams.get("trxID");
	const navigate = useNavigate();

	const { data: response = null } = useQuery({
		queryKey: ["pay,refund", paymentId],
		queryFn: async () => {
			return await BkashQueryPaymentAPICall(paymentId);
		},
	});

	useEffect(() => {
		if (showMessage & !loading) {
			const timeout = setTimeout(() => {
				setShowMessage(false);
				navigate("/user/account/dashboard");
			}, 10000); // 10 seconds timeout
			return () => clearTimeout(timeout);
		}
	}, [loading, navigate, showMessage]);

	console.log("bkash-query-api-call", response);

	useEffect(() => {
		const saveInfoToDb = async () => {
			// ? save payments history into DB
			let savedPaid = {
				transaction_id: trxId,
				payment_id: paymentId,
				status: response?.transactionStatus,
				amount: response?.amount,
				payment_create_time: response?.paymentCreateTime || new Date(),
				method: "bkash",
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
				setLoading(false);
				setShowMessage(true);
			} catch (error) {
				setLoading(false);
				setShowMessage(true);
				console.log(error);
				alert(
					"Payment successfully\n but your payment information doesn't save into our database\n please contact us"
				);
			}
		};

		if (response?.paymentID) {
			saveInfoToDb();
		}
	}, [navigate, paymentId, response, trxId]);

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
