import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import auth from "../Appwrite/auth";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(UserContext);

  const loginSubmit = (data) => {
    try {
      auth.LoginAccount(data).then((user) => {
        if (user) {
          dispatch({ type: "login", payload: user });
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className=" bg-red-400 p-4 w-[500px] h-[600px] rounded">
        <h1 className=" text-3xl font-bold text-white">Login</h1>
        <h2 className="font-semibold text-white text-lg">
          login with your existing acccout
        </h2>
        <p className="text-white text-sm flex justify-end ">
          Do not have an account?
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer font-semibold"
          >
            Sign Up
          </span>
        </p>
        <form className="p-2" onSubmit={handleSubmit(loginSubmit)}>
          <Input
            label="Email or Number :"
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <Input
            label="Password :"
            name="password"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <h1 className="flex justify-end text-blue-600">Forgotten Password</h1>
          <Button
            bgColor={"bg-gray-100"}
            color="text-red-400"
            className={"font-semibold"}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
