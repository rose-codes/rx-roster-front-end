import NavBar from "../components/shared/NavBar";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import Link from "next/link";
import AuthFormStyles from "../styles/authForms.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/shared/Footer";
import PhoneInput from "react-phone-number-input/react-hook-form-input";

const LoginPage = () => {
  const { login } = useLogin();
  const router = useRouter();
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
    reset,
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (formData) => {
    await login(formData.email, formData.password);
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-8 font-display">
          Log In to RxRoster
        </h1>
        <div className="w-[min(100%,35rem)] bg-lime-50 p-4 border border-green-100/50 rounded-sm mb-4 sm:mb-8 font-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={AuthFormStyles.input_group}>
              <label className="mb-1 sm:mb-2 text-base sm:text-lg">
                <span>Email</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter an email.",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="jane.doe@example.com"
                className={AuthFormStyles.input_field}
              ></input>
              <small className={AuthFormStyles.error_message}>
                {errors?.email && errors.email.message}
              </small>
            </div>
            <div className={AuthFormStyles.input_group}>
              <label className="mb-1 sm:mb-2 text-base sm:text-lg">
                <span></span>
                Password
                <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter a password.",
                  },
                })}
                placeholder="Password"
                className={AuthFormStyles.input_field}
              ></input>
              <small className={AuthFormStyles.error_message}>
                {errors?.password && errors.password.message}
              </small>
            </div>

            <button
              type="submit"
              className={AuthFormStyles.submit_button}
              disabled={!isValid}
            >
              Login
            </button>
          </form>
        </div>

        <div className="mb-2 sm:mb-3">
          Don't have an account? Click below to sign up!
        </div>

        <div className={AuthFormStyles.auth_redirect}>
          <div className={AuthFormStyles.auth_redirect_content}>
            <Link href="/register" className={AuthFormStyles.auth_link}>
              Join RxRoster!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
