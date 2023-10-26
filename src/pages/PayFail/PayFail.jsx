import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PayFail = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
	const bioId = searchParams.get("bioId");
	const navigate = useNavigate();
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (bioId > 0) {
				navigate(`biodata/${bioId}`);
			}
			navigate("/user/account/dashboard");
		}, 10000); // 10 seconds timeout
		return () => clearTimeout(timeout);
	}, [bioId, navigate]);

	return (
		<div className="sm:mx-auto mx-3 my-10 rounded-md border-red-500 p-10 flex flex-col items-center justify-center w-full sm:w-1/2 bg-red-300">
			<h1 className="text-3xl mb-4 text-center text-red-900">Failed !!</h1>
			{message && <p className="text-center text-red-900">{message}</p>}
		</div>
	);
};

export default PayFail;
