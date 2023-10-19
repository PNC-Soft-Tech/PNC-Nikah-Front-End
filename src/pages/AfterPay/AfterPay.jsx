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

	console.log(searchParams);
	console.log(status);
	console.log(paymentID);

	useEffect(() => {
		async function fetchData() {
			try {
				let response = await BkashExecutePaymentAPICall(paymentID);

				if (response?.message) {
					response = await BkashQueryPaymentAPICall(paymentID);
				}

				if (response?.statusCode && response.statusCode === "0000") {
					console.log("Success", response?.statusMessage);
					// window.location.href = `/success?message=${response?.statusMessage}&trxID=${response?.trxID}`;
					navigate(
						`/pay/success?message=${response?.statusMessage}&trxID=${response?.trxID}&paymentId=${paymentID}`
					);
				} else {
					console.log("Failure", response?.statusMessage);
					// window.location.href = `/fail?message=${response?.statusMessage}`;
					navigate(`/pay/fail?message=${response?.statusMessage}`);
				}
			} catch (error) {
				console.error("An error occurred:", error);
			}
		}

		if (status && status === "success") {
			fetchData();
		} else {
			window.location.href = "/pay/fail";
		}
	}, [status, paymentID, navigate]);

	return (
		<div className="my-10">
			<LoadingCircle />
		</div>
	);
};

export default AfterPay;
