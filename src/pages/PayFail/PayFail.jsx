import { useSearchParams } from "react-router-dom";

const PayFail = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
				<h1 className="text-3xl mb-4 text-center text-red-500">Failed !!</h1>
				{message && <p className="text-center text-red-500">{message}</p>}
			</div>
		</div>
	);
};

export default PayFail;
