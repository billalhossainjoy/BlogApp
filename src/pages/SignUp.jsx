import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import auth from "../Appwrite/auth";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(UserContext);

  const signupSubmit = (data) => {
    try {
      auth.createAccount(data).then((user) => {
        if (user) {
          dispatch({ type: "login", payload:user });
          navigate("/");
        }
      });
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="flex h-full items-center justify-center">
      <div className=" bg-red-400 p-4 w-[500px] h-[600px] rounded">
        <h1 className=" text-3xl font-bold text-white">Sign up</h1>
        <h2 className="font-semibold text-white text-lg">
          Create your account
        </h2>
        <p className="text-white text-sm flex justify-end gap-2">
          If alreay an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
        <form className="p-2" onSubmit={handleSubmit(signupSubmit)}>
          <Input
            label="Name :"
            name="name"
            type="text"
            placeholder="type your name"
            {...register("name")}
          />
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
          <div className="flex p-1 items-center gap-1">
            <input type="checkbox" />
            <span className="text-white text-sm"> terms and condition</span>
          </div>
          <Button
            bgColor={"bg-gray-100"}
            color="text-red-400"
            className={"font-semibold"}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
