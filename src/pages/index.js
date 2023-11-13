import NavBar from "../components/shared/NavBar";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import Link from "next/link";
import AuthFormStyles from "../styles/authForms.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { login } = useLogin();
  const router = useRouter();
  const { dispatch, user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
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
  }, [dispatch, user]);

  return (
    <>
      <NavBar />
      <div className={AuthFormStyles.page_container}>
        <div className={AuthFormStyles.content_container}>
          <div className={AuthFormStyles.form_content_container}>
            <div className={AuthFormStyles.title_container}>
              <h1 className={AuthFormStyles.form_heading}>
                Log In to RxRoster
              </h1>
            </div>
            <div className={AuthFormStyles.form_container}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={AuthFormStyles.input_group}>
                  <label>Email</label>
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
                  <label>Password</label>
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
            <div className={AuthFormStyles.extra_text}>
              <div>Don't have an account? Click below to sign up!</div>
            </div>
            <div className={AuthFormStyles.auth_redirect}>
              <div className={AuthFormStyles.auth_redirect_content}>
                <Link href="/register" className={AuthFormStyles.auth_link}>
                  Join RxRoster!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
