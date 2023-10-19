import { useSearchParams } from "react-router-dom";

const PayFail = () => {
	const [searchParams] = useSearchParams();
	console.log(searchParams);
	const message = searchParams.get("message");
	return (
		<div>
			<h1>Failed !!</h1>
			{message && <p>{message}</p>}
		</div>
	);
};

export default PayFail;
