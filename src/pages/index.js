import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";

const LoginPage = () => {
  // const navigate = useNavigate();
  const { login } = useLogin();
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
    console.log(formData);
    await login(formData.email, formData.password);
  };

  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="form-content-container">
            <div className="title-container">
              <h1 className="py-3 my-3">Log In to RxRoster</h1>
            </div>
            <div className="form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
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
                    className="input-field"
                  ></input>
                  <small className="error-message">
                    {errors?.email && errors.email.message}
                  </small>
                </div>
                <div className="input-group">
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
                    className="input-field"
                  ></input>
                  <small>
                    <Link href="/forgot-password" className="auth-link">
                      Forgot Password?
                    </Link>
                  </small>
                  <small className="error-message">
                    {errors?.password && errors.password.message}
                  </small>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={!isValid}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="extra-text">
              <div>Don't have an account? Click below to sign up!</div>
            </div>
            <div className="auth-redirect">
              <div className="auth-redirect-content">
                <Link href="/signup" className="auth-link">
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
