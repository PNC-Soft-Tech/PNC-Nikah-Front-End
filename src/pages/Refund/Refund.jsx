import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
	BkashQueryPaymentAPICall,
	BkashRefundPaymentAPICall,
} from "../../services/bkash";
import { useState } from "react";

const Refund = () => {
	const navigate = useNavigate();
	const [amount, setAmount] = useState(0);
	const { paymentId } = useParams();
	const { data } = useQuery({
		queryKey: ["pay,refund", paymentId],
		queryFn: async () => {
			return await BkashQueryPaymentAPICall(paymentId);
		},
	});

	const refundHandler = async () => {
		if (paymentId.trim() === "" || data?.trxID.trim() === "") {
			alert("All fields are required.");
		} else if (isNaN(amount) || +amount <= 0) {
			alert("Please enter a valid amount.");
		} else {
			try {
				const response = await BkashRefundPaymentAPICall(
					paymentId,
					data?.trxID,
					amount
				);
				console.log(response);
				if (response?.refundTrxID) {
					// window.location.href = `/pay/success?message=${response?.transactionStatus}&trxID=${response?.originalTrxID}&refundTrxID=${response?.refundTrxID}`;
					navigate(
						`/pay/success?message=${response?.transactionStatus}&trxID=${response?.originalTrxID}&refundTrxID=${response?.refundTrxID}`
					);
				} else {
					// window.location.href = `/pay/fail?message=${response?.statusMessage}`;
					navigate(`/pay/fail?message=${response?.statusMessage}`);
				}
			} catch (error) {
				alert("An error occurred during the refund process.");
			}
		}
	};

	console.log(data);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="mb-4">
				<input
					className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
					type="number"
					placeholder="amount..."
					onChange={(e) => setAmount(e.target.value)}
				/>
			</div>
			<button
				onClick={refundHandler}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Refund Now
			</button>
		</div>
	);
};

export default Refund;
