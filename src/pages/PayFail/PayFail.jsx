<<<<<<< HEAD
import { useSearchParams } from "react-router-dom";
import styled from 'styled-components';
=======
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
>>>>>>> df37e524cc668225b66b643af3f6ddda976d9f72

const Container = styled.div`
  background-color: #fff;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

const Title = styled.h1`
  color: #f44336;
`;

const Message = styled.p`
  color: #555;
  font-size: 18px;
  margin: 20px 0;
`;
const PayFail = () => {
	const [searchParams] = useSearchParams();
	const message = searchParams.get("message");
<<<<<<< HEAD
	return(
		<Container>
		  <Title>Payment Failed!</Title>
		  {message && <Message>{message}</Message>}
		</Container>
	  );
=======
	const navigate = useNavigate();
	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate("/user/account/dashboard");
		}, 10000); // 10 seconds timeout
		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<div className="sm:mx-auto mx-3 my-10 rounded-md border-red-500 p-10 flex flex-col items-center justify-center w-full sm:w-1/2 bg-red-300">
			<h1 className="text-3xl mb-4 text-center text-red-900">Failed !!</h1>
			{message && <p className="text-center text-red-900">{message}</p>}
		</div>
	);
>>>>>>> df37e524cc668225b66b643af3f6ddda976d9f72
};

export default PayFail;
