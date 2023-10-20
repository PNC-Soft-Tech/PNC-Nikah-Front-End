import { useQuery } from "@tanstack/react-query";
import { paymentServices } from "../../services/payments";
import { getToken } from "../../utils/cookies";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const PaymentHistory = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["payments", "history"],
		queryFn: async () => {
			return await paymentServices.getPaymentsByUser(getToken().token);
		},
	});

	return (
		<div className="col right-sidebar-main my-favs">
			{isLoading ? (
				<LoadingCircle />
			) : data?.data?.length > 0 ? (
				<div className="my-favs-info border-t-2 w-auto rounded shadow">
					<h5 className="card-title text-center text-2xl my-3">
						পেমেন্ট হিস্টোরি
					</h5>
					<div className="overflow-x-auto">
						<table className="table-auto w-full">
							<thead>
								<tr className="border-b border-t">
									<th className="px-4 py-2 text-center w-1/8">SL</th>
									<th>Payment ID</th>
									<th className="px-4 py-2 text-center w-1/8">
										Transaction ID
									</th>
									<th className="px-4 py-2 text-center w-1/8">মেথড</th>
									<th className="px-4 py-2 text-center w-1/8">পরিমাণ</th>
									<th className="px-4 py-2 text-center w-1/8">স্ট্যাটাস</th>
									<th className="px-4 py-2 text-center w-1/8">তারিখ</th>
								</tr>
							</thead>
							<tbody>
								{data?.data?.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.id}</td>
											<td>{item?.payment_id}</td>
											<td>{item?.transaction_id}</td>
											<td>{item?.amount}</td>
											<td>{item?.method}</td>
											<td>{item?.status}</td>
											<td>{item?.payment_execute_time}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				<p>there is no payment history</p>
			)}
		</div>
	);
};

export default PaymentHistory;
