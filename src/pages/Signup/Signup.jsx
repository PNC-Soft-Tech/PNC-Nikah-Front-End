import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import "./signup.css";
import { Colors } from "../../constants/colors";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { userServices } from "../../services/user";
export function Signup() {
  const { handleGoogleSignIn, createUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const googleSignup = async () => {
    try {
      // google signin
      const response1 = await handleGoogleSignIn();
      if (!response1?.user?.uid) {
        alert("Something went wrong,try again later");
        return;
      }
      console.log(response1?.user);

      const userInfo = {
        email: response1?.email,
        password: "iampassword",
        phone: "iamphone",
        username,
        gender,
      };

      //store user info into db
      const response2 = await userServices.createUserInfoForGoogleSignin(
        userInfo
      );
      // console.log(response2);
      if (response2?.data?.success === true) {
        navigate("/user/account/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Invalid Email");
      return;
    }
    if (!email || !password || !username || !gender) {
      alert("Fill all the input fields");
      return;
    }

    if (password.length < 5) {
      alert("Password should be at least six characters");
      return;
    }

    try {
      //create user in firebase
      const response1 = await createUser(email, password);

      if (!response1?.user?.uid) {
        alert("Something went wrong,please try again");
        return;
      }

      const userInfo = {
        email,
        password: "iampassword",
        phone: "iamphone",
        username,
        gender,
      };

      //store user info into db
      const response2 = await userServices.createUserInfoForGoogleSignin(
        userInfo
      );
      if (response2?.data?.success === true) {
        setEmail("");
        setPassword("");
        setUsername("");
        setGender("");
        navigate("/user/account/dashboard");
      }
    } catch (error) {
      alert(error?.response?.data?.message || error.message);
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
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal ">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              onChange={(e) => setUsername(e.target.value)}
              label="Name"
              name="username"
            />
            <Input
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              name="email"
            />
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              label="Password"
              name="password"
            />
            <div className="relative">
              <select
                onChange={(e) => setGender(e.target.value)}
                className="block py-3 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4  pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="সিলেক্ট লিঙ্গ">সিলেক্ট লিঙ্গ</option>
                <option value="পুরুষ">পুরুষ</option>
                <option value="মহিলা">মহিলা</option>
              </select>
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"    style={{
            background: `linear-gradient(to right,${Colors.lnLeft},${Colors.lnRight} )`,
          }}
            onClick={signInWithEmailAndPassword}
            className="mt-6 py-4"
            fullWidth
          >
            Register
          </Button>

          <div className="flex items-center my-4">
            <p className="h-[1px] bg-gray-600 w-full"></p>
            <span className="mx-2">OR</span>{" "}
            <p className="h-[1px] bg-gray-600 w-full"></p>
          </div>
          <Button
            style={{ backgroundColor: Colors.primary900 }}
            className=" w-full"
          >
            <div
              onClick={googleSignup}
              className="flex justify-center items-center"
            >
              <FaGoogle className="mr-2 mb-1 w-5 h-5" />
              Sign Up with Google
            </div>
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Log In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
