import React from "react";
import InputField from "./UI/InputField";
import Button from "./UI/Button";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-red-300 to-red-500 bg-opacity-50 h-screen ">
      <div className="rounded-lg bg-white p-12 shadow-lg">
        <h2 className="font-semibold text-[2rem] text-black mb-3">
          Create An Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-2 m-1">
            <InputField
              placeHolder="Email"
              {...register("userName", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "Email should be valid",
                },
              })}
              className="w-full "
            />
            {errors?.userName && (
              <p className="text-red-500">{errors.userName?.message}</p>
            )}
          </div>
          <div className="p-2 m-1">
            <InputField
              placeHolder="Password"
              className="w-full "
              type="password"
            />
            {errors?.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <div className="p-2 m-1">
            <InputField
              placeHolder="Confirm Password"
              className="w-full "
              type="password"
            />
          </div>
          <Button
            label="Create Account"
            className="w-full text-white font-bold text-lg mt-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
