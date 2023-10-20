import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
	BkashExecutePaymentAPICall,
	BkashQueryPaymentAPICall,
} from "../../services/bkash";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { paymentServices } from "../../services/payments";
import { getToken } from "../../utils/cookies";

const AfterPay = () => {
	const [searchParams] = useSearchParams();
	const { userInfo } = useContext(UserContext);
	const navigate = useNavigate();
	const status = searchParams.get("status");
	const paymentID = searchParams.get("paymentID");

	console.log(searchParams);
	console.log(status);
	console.log(paymentID);

	useEffect(() => {
		async function fetchData() {
			try {
				//? execute payment
				let response = await BkashExecutePaymentAPICall(paymentID);
				// ? payment
				if (response?.message) {
					response = await BkashQueryPaymentAPICall(paymentID);
				}
				// ? save payments history into DB
				let savedPaid = {
					transaction_id: response?.trxID,
					payment_id: paymentID,
					status: response?.transactionStatus,
					amount: response?.amount,
					payment_execute_time: response?.paymentExecuteTime,
					payment_create_time: response?.paymentCreateTime,
					user_id: userInfo?.data[0]?.id,
					method: "bkash",
				};

				if (response?.statusCode && response.statusCode === "0000") {
					console.log("Success", response?.statusMessage);
					//! window.location.href = `/success?message=${response?.statusMessage}&trxID=${response?.trxID}`;
					console.log("after pay~", response);
					try {
						const result = await paymentServices.createPayments(
							savedPaid,
							getToken().token
						);
						if (result?.success) {
							navigate(
								`/pay/success?message=${response?.statusMessage}&trxID=${response?.trxID}&paymentId=${paymentID}`
							);
						} else {
							console.log(result);
							alert(
								"Payment successfully\n but your payment information doesnot save into our database\n please contact use"
							);
						}
					} catch (error) {
						console.log(error);
						alert(
							"Payment successfully\n but your payment information doesnot save into our database\n please contact use"
						);
					}
				} else {
					console.log("Failure", response?.statusMessage);
					//! window.location.href = `/fail?message=${response?.statusMessage}`;
					navigate(`/pay/fail?message=${response?.statusMessage}`);
				}
			} catch (error) {
				console.error("An error occurred:", error);
			}
		}

		if (status && status === "success") {
			fetchData();
		} else {
			//! window.location.href = "/pay/fail";
			navigate("/pay/fail");
		}
	}, [status, paymentID, navigate, userInfo?.data]);

	return (
		<div className="my-10">
			<LoadingCircle />
		</div>
	);
};

export default AfterPay;
