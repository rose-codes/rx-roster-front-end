import { useForm } from "react-hook-form";
import Link from "next/link";
import { useSignUp } from "../../hooks/useSignup";
import AuthFormStyles from "../../styles/authForms.module.css";
import NavBar from "../../components/shared/NavBar";
import { useState } from "react";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import Footer from "../../components/shared/Footer";

const RegisterPage = () => {
  const [passFieldFocus, setPassFieldFocus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getFieldState,
    reset,
    control,
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

  const onPasswordChange = (e) => {
    e.preventDefault();
    return (
      <small className="passwordRequirements">
        <div>Password must include:</div>
        <ul>
          <li>at least 8 characters</li>
          <li>at least one UPPERCASE letter</li>
          <li>at least one LOWERCASE letter</li>
          <li>at least one NUMBER</li>
          <li>at least one special character</li>
        </ul>
      </small>
    );
  };

  const onSubmit = async (formValues) => {
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
      <NavBar />
      <div className="flex flex-col items-center justify-center mb-14 sm:mb-16 ">
        <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-8 font-display">
          Sign Up for RxRoster
        </h1>

        <div className="w-[min(100%,40rem)] bg-lime-50 p-4 border border-green-100/50 rounded-sm mb-4 sm:mb-8 font-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 sm:gap-4 sm:mb-2">
              <label className="text-base sm:text-lg">
                <span>First Name:</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Please enter your first name.",
                  },
                })}
                placeholder="First Name"
                className="p-2"
              ></input>
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 sm:mb-2">
              <label>
                <span>Last Name:</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                className="p-2"
                type="text"
                {...register("surname", {
                  required: {
                    value: true,
                    message: "Please enter your surname.",
                  },
                })}
                placeholder="Surname"
              ></input>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 sm:mb-2">
              <label>
                <span>Date of Birth:</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                className="p-2"
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
              ></input>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 sm:mb-2">
              <label>
                <span>Phone Number:</span>
                <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                className="p-2"
                country="US"
                name="phoneInput"
                control={control}
                rules={{ required: true }}
                placeholder="(XXX)XXX-XXXX"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 sm:mb-2">
              <label>
                <span>Email:</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                className="p-2"
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
              ></input>
            </div>
            {/* @todo: Add Street Address fields */}
            <div className="flex flex-col gap-2 sm:gap-4 sm:mb-2">
              <label>
                <span>Password:</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                className="p-2 mb-2 sm:mb-4"
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
                onFocus={() => setPassFieldFocus(true)}
                onBlur={() => setPassFieldFocus(false)}
              ></input>
              {passFieldFocus && (
                <small className="text-sm mb-2 sm:mb-4">
                  <div>Password must include:</div>
                  <ul>
                    <li>at least 8 characters</li>
                    <li>at least one UPPERCASE letter</li>
                    <li>at least one LOWERCASE letter</li>
                    <li>at least one NUMBER</li>
                    <li>at least one special character</li>
                  </ul>
                </small>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={AuthFormStyles.submit_button}
            >
              SIGN UP
            </button>
          </form>
        </div>

        <div className={AuthFormStyles.auth_redirect}>
          <div className={AuthFormStyles.auth_redirect_content}>
            <Link href="/login" className={AuthFormStyles.auth_link}>
              Already have an account? Sign in here.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
