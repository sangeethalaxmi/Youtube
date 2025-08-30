import React from "react";
import InputField from "./UI/InputField";
import Button from "./UI/Button";
import { useForm } from "react-hook-form";
import { authApi } from "../utils/api";
import { showSuccess } from "../utils/toast";
import { useDispatch } from "react-redux";
import { setLoading } from "../utils/store/appSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const password = watch("password");
  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    authApi
      .post("/auth/signup", data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res) {
          console.log(res.ok);
          showSuccess("Your account is created successfully.");
        }
      })
      .catch((e) => {})
      .finally(dispatch(setLoading(false)));
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
              placeHolder="User Name"
              {...register("userName", {
                required: "User Name is required.",
              })}
              className="w-full "
            />
            {errors?.userName && (
              <p className="text-red-500">{errors.userName?.message}</p>
            )}
          </div>
          <div className="p-2 m-1">
            <InputField
              placeHolder="Email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: "Email should be valid.",
                },
              })}
              className="w-full "
            />
            {errors?.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="p-2 m-1">
            <InputField
              placeHolder="Password"
              className="w-full "
              type="password"
              {...register("password", {
                required: "Password field is required.",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/,
                  message: "Password must be strong.",
                },
              })}
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
              {...register("confirmPassword", {
                required: "Confirm Password is required.",
                validate: (value) =>
                  value === password ||
                  "Confirm Password and password should be same.",
              })}
            />
            {errors?.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword?.message}</p>
            )}
          </div>

          <Button
            label="Create Account"
            className="w-full text-white font-bold text-lg mt-2 disabled:bg-gray-200"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
