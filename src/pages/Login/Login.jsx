import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import { Colors } from "../../constants/colors";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { userServices } from "../../services/user";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleGoogleSignIn, signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const googleSignin = async () => {
    try {
      // google signin
      const response1 = await handleGoogleSignIn();
      if (!response1?.user?.uid) {
        alert("Something went wrong,try again later");
        return;
      }
      console.log(response1?.user);

      const userInfo = {
        email: response1?.user?.email,
        password: "iampassword",
        phone: "iamphone",
        username: "",
        gender: "",
      };

      //store user info into db
      const response2 = await userServices.createUserInfoForGoogleSignin(
        userInfo
      );

      console.log(response2);
      // console.log(response2);
      if (response2?.data?.success === true) {
        navigate("/user/account/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (!email && !password) {
      alert("Fill all the blank fields");
      return;
    }
    try {
      const result = await signIn(email, password);
      navigate("/user/account/dashboard");
      console.log(result);
    } catch (error) {
      console.log(error);
      alert(error?.message);
    }
  };
  return (
    <div className="flex justify-center my-5">
      <Card
        color="transparent"
        className="mx-auto w-[50%] border-2 p-4"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Log In
        </Typography>

        <form className="mt-8 mb-2 w-full">
          <div className="mb-4 flex flex-col gap-6">
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
            className="mt-6 py-4"
            fullWidth
          >
            Login
          </Button>

          <div className="flex items-center my-4">
            <p className="h-[1px] bg-gray-600 w-full"></p>
            <span className="mx-2">OR</span>{" "}
            <p className="h-[1px] bg-gray-600 w-full"></p>
          </div>
          <Button
            style={{ backgroundColor: Colors.primary900 }}
            className=" w-full"
            onClick={googleSignin}
          >
            <div className="flex justify-center items-center">
              <FaGoogle className="mr-2 mb-1 w-5 h-5" />
              Sign in with Google
            </div>
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
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
