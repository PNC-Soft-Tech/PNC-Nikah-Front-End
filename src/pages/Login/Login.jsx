import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import { Colors } from "../../constants/colors";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { userServices } from "../../services/user";
import { setToken } from "../../utils/cookies";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/app.jsx";

export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { handleGoogleSignIn, signIn } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const googleSignin = async () => {
		try {
			// google signin
			const response1 = await handleGoogleSignIn();
			console.log(
				"🚀 ~ file: Login.jsx:19 ~ googleSignin ~ response1:",
				response1
			);
			if (!response1?.user?.uid) {
				console.log(
					"🚀 ~ file: Login.jsx:20 ~ googleSignin ~ response1:",
					response1
				);
				alert("Something went wrong,try again later");
				return;
			}
			console.log(response1?.user);
			console.log(
				"🚀 ~ file: Login.jsx:25 ~ googleSignin ~ response1:",
				response1
			);

			const userInfo = {
				email: response1?.user?.email,
				password: "iampassword",
				phone: "iamphone",
				username: "",
				gender: "",
			};
			console.log(
				"🚀 ~ file: Login.jsx:34 ~ googleSignin ~ userInfo.response1:",
				userInfo.response1
			);

			//store user info into db
			const response2 = await userServices.createUserInfoForGoogleSignIn(
				userInfo
			);

			console.log(response2);
			// console.log(response2);
			if (response2?.data?.success === true) {
				setToken({
					token: response2?.data.token,
				});
				navigate("/user/account/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	};
	//! signin with email and password
	const handleSignIn = async (event) => {
		event.preventDefault();
		if (!email && !password) {
			//alert("Fill all the blank fields");
			toast.error("Fill all the blank fields", {
				duration: 5000,
				position: "bottom-right",
				style: { backgroundColor: "red", color: "#fff" },
			});
			return;
		}
		try {
			setLoading(true);
			const response1 = await signIn(email, password);
			console.log(
				"🚀 ~ file: Login.jsx:56 ~ handleSignIn ~ response1:",
				response1
			);

			const userInfo = {
				email: email,
				password: "iampassword",
				phone: "iamphone",
				username: "",
				gender: "",
			};
			//!store user info into db
			const response2 = await userServices.createUserInfoForGoogleSignIn(
				userInfo
			);
			console.log(response2);
			if (response2?.data?.success === true) {
				setToken({
					token: response2?.data.token,
				});
				navigate("/user/account/dashboard");
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			//	alert(error?.message);
			toast.error("Invalid login credentials", {
				duration: 5000,
				position: "bottom-right",
				style: { backgroundColor: "red", color: "#fff" },
			});
			setLoading(false);
		}
	};

	const handleforgotPasswordButtonHandler = () => {
		navigate("/forgot-password");
	};

	return (
		<div className="flex justify-center my-5">
			<Card
				color="transparent"
				className="mx-auto lg:w-[50%] w-[95%] border-2 p-4"
				shadow={false}
			>
				<Typography variant="h4" color="blue-gray">
					Log In
				</Typography>

				<form className="w-full mt-8 mb-2">
					<div className="flex flex-col gap-6 mb-4">
						<Input
							size="lg"
							label="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							type="password"
							size="lg"
							label="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Button
						type="submit"
						onClick={handleSignIn}
						className="py-4 mt-6"
						fullWidth
						disabled={loading}
						style={{
							background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
						}}
					>
						{loading ? <LoadingCircle /> : "Login"}
					</Button>
					<p
						onClick={handleforgotPasswordButtonHandler}
						className="mt-5 text-right cursor-pointer"
						style={{ color: Colors.pncPrimaryColor }}
					>
						Forgot Password
					</p>
					<div className="flex items-center my-4">
						<p className="h-[1px] bg-gray-600 w-full"></p>
						<span className="mx-2">OR</span>{" "}
						<p className="h-[1px] bg-gray-600 w-full"></p>
					</div>
					<Button
						style={{
							background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
						}}
						className="w-full "
						onClick={googleSignin}
					>
						<div className="flex items-center justify-center">
							<FaGoogle className="w-5 h-5 mb-1 mr-2" />
							Sign in with Google
						</div>
					</Button>
					<Typography color="gray" className="mt-4 font-normal text-center">
						<span className="mr-2"> Not a Member ?</span>
						<Link to="/signup" href="#" className="font-medium text-gray-900">
							Sign Up
						</Link>
					</Typography>
				</form>
			</Card>
		</div>
	);
}
