import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
	BkashQueryPaymentAPICall,
	BkashRefundPaymentAPICall,
} from "../../services/bkash";
import { useState } from "react";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

const Refund = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [amount, setAmount] = useState(0);
	const { paymentId } = useParams();
	const { tnxId } = useParams();
	// const { data } = useQuery({
	// 	queryKey: ["pay,refund", paymentId],
	// 	queryFn: async () => {
	// 		return await BkashQueryPaymentAPICall(paymentId);
	// 	},
	// });
	// const refundHandler = async (paymentId, trxID, amount) => {
	// 	try {
	// 	  setLoading(true);
	// 	  const response = await BkashRefundPaymentAPICall(paymentId, trxID, amount);
	// 	  console.log(response);
	// 	  if (response?.refundTrxID) {
	// 		navigate(
	// 		  `/refund/success?message=${response?.transactionStatus}&trxID=${response?.originalTrxID}&refundTrxID=${response?.refundTrxID}`
	// 		);
	// 		setLoading(false);
	// 	  } else {
	// 		setLoading(false);
	// 		navigate(`/refund/fail?message=${response?.statusMessage}`);
	// 	  }
	// 	} catch (error) {
	// 	  setLoading(false);
	// 	  alert("An error occurred during the refund process.");
	// 	}
	//   };
	const refundHandler = async () => {
		// if (paymentId.trim() === "" || data?.trxID.trim() === "") {
		if (paymentId.trim() === "" ) {
			alert("All fields are required.");
		} else if (isNaN(amount) || +amount <= 0) {
			alert("Please enter a valid amount.");
		} else {
			try {
				setLoading(true);
				const response = await BkashRefundPaymentAPICall(
					paymentId,
					// data?.trxID,
					tnxId,
					// "AJM9N9FVSX",
					amount
				);
				console.log(response);
				if (response?.refundTrxID) {
					//? window.location.href = `/pay/success?message=${response?.transactionStatus}&trxID=${response?.originalTrxID}&refundTrxID=${response?.refundTrxID}`;
					navigate(
						`/refund/success?message=${response?.transactionStatus}&trxID=${response?.originalTrxID}&refundTrxID=${response?.refundTrxID}`
					);
					setLoading(false);
				} else {
					//? window.location.href = `/pay/fail?message=${response?.statusMessage}`;
					setLoading(false);
					navigate(`/refund/fail?message=${response?.statusMessage}`);
				}
			} catch (error) {
				setLoading(false);
				alert("An error occurred during the refund process.");
			}
		}
	};

	// console.log(data);
	// return (
	// 	<div className="col right-sidebar-main my-favs">
			
	// 			<div className="my-favs-info border-t-2 w-auto rounded shadow">
	// 				<h5 className="card-title text-center text-2xl my-3">
	// 					Refund List
	// 				</h5>
	// 				<div className="overflow-x-auto">
	// 					<table className="table-auto w-full">
	// 						<thead>
	// 							<tr className="border-b border-t">
	// 								<th className="px-4 py-2 text-center w-1/8">SL</th>
	// 								<th>পেমেন্ট আইডি</th>
	// 								<th className="px-4 py-2 text-center w-1/8">
	// 									ট্রানজেকশন আইডি
	// 								</th>
	// 								<th className="px-4 py-2 text-center w-1/8">মেথড</th>
	// 								<th className="px-4 py-2 text-center w-1/8">পরিমাণ</th>
	// 								<th className="px-4 py-2 text-center w-1/8">কারণ</th>
	// 								<th className="px-4 py-2 text-center w-1/8">স্ট্যাটাস</th>
	// 								<th className="px-4 py-2 text-center w-1/8">তারিখ</th>
	// 								<th className="px-4 py-2 text-center w-1/8">একশন</th>
	// 							</tr>
	// 						</thead>
	// 						<tbody>
								
								
	// 									<tr>
	// 										<td>1</td>
	// 										<td className="text-xs">TR45t76cbvbdfdf</td>
	// 										<td className="text-xs">jhj44v3v34h</td>
	// 										<td className="text-xs">bkash</td>
	// 										<td className="text-xs">34</td>
	// 										<td className="text-xs">Bio Purchases</td>
	// 										<td className="text-xs">Paid</td>
	// 										<td className="text-xs">13 Oct 2023</td>
											 
	// 										<td>
	// 										<button 
	// 										// onClick={refundHandler('','','')}
	// 										 className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 mb-2 rounded">
	// 										Refund
	// 										</button>

	// 										</td>
											

	// 									</tr>
	// 									<tr>
	// 									<td>2</td>
	// 										<td className="text-xs">TR45t76cbvbdfdf</td>
	// 										<td className="text-xs">jhj44v3v34h</td>
	// 										<td className="text-xs">bkash</td>
	// 										<td className="text-xs">34</td>
	// 										<td className="text-xs">Bio Purchases</td>
	// 										<td className="text-xs">Paid</td>
	// 										<td className="text-xs">13 Oct 2023</td>
											 
	// 										<td>
	// 										<button  className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 mb-2 rounded">
	// 										Refund
	// 										</button>

	// 										</td>
											

	// 									</tr>
								
	// 						</tbody>
	// 					</table>
	// 				</div>
	// 			</div>
			
	// 	</div>
	// );
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
				disabled={loading}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				{loading ? <LoadingCircle /> : "Refund Now"}
			</button>
		</div>
	);
};

export default Refund;
