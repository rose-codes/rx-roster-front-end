import { useForm } from "react-hook-form";
import Link from "next/link";
import { useSignUp } from "../hooks/useSignup";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      surname: "",
      dateOfBirth: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const { signup, error, isLoading } = useSignUp();

  // const onPasswordChange = (e) => {
  //   e.preventDefault();
  //   return (
  //     <small className="passwordRequirements">
  //       <div>Password must include:</div>
  //       <ul>
  //         <li>at least 8 characters</li>
  //         <li>at least one UPPERCASE letter</li>
  //         <li>at least one LOWERCASE letter</li>
  //         <li>at least one NUMBER</li>
  //         <li>at least one special character</li>
  //       </ul>
  //     </small>
  //   );
  // };

  const onSubmit = async (formValues) => {
    console.log("submission obj", formValues);
    await signup(
      formValues.firstName,
      formValues.surname,
      formValues.email,
      formValues.password
    );
    // reset();
  };

  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="form-content-container">
            <div className="title-container">
              <h1 className="py-3 my-3 text-black">Sign Up for RxRoster</h1>
            </div>
            <div className="form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "Please enter your first name.",
                      },
                    })}
                    placeholder="First Name"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    {...register("surname", {
                      required: {
                        value: true,
                        message: "Please enter your surname.",
                      },
                    })}
                    placeholder="Surname"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Date of Birth:</label>
                  <input
                    type="text"
                    {...register("dateOfBirth", {
                      // required: {
                      //   value: true,
                      //   message: "Please enter your Date of Birth.",
                      // },
                      valueAsDate: {
                        value: true,
                        message: "Please enter a valid date.",
                      },
                    })}
                    // @todo: verify date format
                    placeholder="MM/DD/YYYY"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    {...register("phoneNumber")}
                    placeholder="XXX-XXX-XXXX"
                    className="input-field"
                  ></input>
                </div>
                <div className="input-group">
                  <label>Email:</label>
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
                    placeholder="Email"
                    className="input-field"
                  ></input>
                </div>
                {/* @todo: Add Street Address fields */}
                <div className="input-group">
                  <label>Password:</label>
                  <small className="text-sm">
                    <div>Password must include:</div>
                    <ul>
                      <li>at least 8 characters</li>
                      <li>at least one UPPERCASE letter</li>
                      <li>at least one LOWERCASE letter</li>
                      <li>at least one NUMBER</li>
                      <li>at least one special character</li>
                    </ul>
                  </small>
                  <input
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter a password.",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Please enter a valid password.",
                      },
                    })}
                    placeholder="Password"
                    className="input-field"
                  ></input>
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className="submit-button"
                >
                  SIGN UP
                </button>
              </form>
            </div>

            <div className="auth-redirect">
              <div className="auth-redirect-content">
                <Link href="/login" className="auth-link">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
