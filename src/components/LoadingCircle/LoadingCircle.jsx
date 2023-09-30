import { Oval } from "react-loader-spinner";

const LoadingCircle = () => {
	return (
		<div className="w-full flex justify-center">
			<Oval
				height={25}
				width={25}
				color="#ffff"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="gray"
				strokeWidth={5}
				strokeWidthSecondary={5}
			/>
		</div>
	);
};

export default LoadingCircle;
