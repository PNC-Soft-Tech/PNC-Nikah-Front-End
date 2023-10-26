import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
	BkashExecutePaymentAPICall,
	BkashQueryPaymentAPICall,
} from "../../services/bkash";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

const AfterPay = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const status = searchParams.get("status");
	const paymentID = searchParams.get("paymentID");
	const bioId = searchParams.get("bioId");

	// console.log(searchParams);
	// console.log(status);
	// console.log(paymentID);

	useEffect(() => {
		async function fetchData() {
			try {
				//? execute payment
				let response = await BkashExecutePaymentAPICall(paymentID);

				// ? payment
				if (response?.message) {
					response = await BkashQueryPaymentAPICall(paymentID);
				}

				if (response?.statusCode && response.statusCode === "0000") {
					console.log("Success", response?.statusMessage);
					navigate(
						`/pay/success?message=${response?.statusMessage}&trxID=${
							response?.trxID
						}&paymentId=${paymentID}&amount=${response?.amount}&status=${
							response?.transactionStatus
						}&payment_create_time=${
							response?.paymentCreateTime || response?.paymentExecuteTime
						}${bioId > 0 && `&bioId=${bioId}`}`
					);
				} else {
					console.log("Failure", response?.statusMessage);
					navigate(
						`/pay/fail?message=${response?.statusMessage}${
							bioId > 0 && `&bioId=${bioId}`
						}`
					);
				}
			} catch (error) {
				console.error("An error occurred:", error);
			}
		}

		if (status && status === "success") {
			fetchData();
		} else {
			navigate("/pay/fail");
		}
	}, [status, paymentID, navigate, bioId]);

	return (
		<div className="my-10">
			<LoadingCircle />
		</div>
	);
};

export default AfterPay;
