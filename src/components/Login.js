import { useForm } from "react-hook-form";
import InputField from "./UI/InputField";
import Button from "./UI/Button";
import { authApi } from "../utils/api";
import { useDispatch } from "react-redux";
import { setLoading } from "../utils/store/appSlice";

const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(setLoading(true));

    authApi
      .post("/auth/login", data, { withCredentials: true })
      .then((res) => {
        if (res.ok) {
        }
      })
      .catch((er) => {})
      .finally(dispatch(setLoading(false)));
  };
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-red-300 to-red-500 bg-opacity-50 h-screen ">
      <div className="rounded-lg bg-white p-12 shadow-lg w-[500]">
        <h2 className="font-semibold text-[2rem] text-black mb-3 text-center">
          Signup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              })}
            />
            {errors?.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <Button
            label="Login"
            className="w-full text-white font-bold text-lg mt-2 "
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
