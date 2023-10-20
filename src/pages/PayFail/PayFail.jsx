import { useSearchParams } from "react-router-dom";
import styled from 'styled-components';

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
	console.log(searchParams);
	const message = searchParams.get("message");
	return(
		<Container>
		  <Title>Payment Failed!</Title>
		  {message && <Message>{message}</Message>}
		</Container>
	  );
};

export default PayFail;
