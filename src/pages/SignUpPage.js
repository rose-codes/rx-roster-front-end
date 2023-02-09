// import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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

  const onPasswordChange = () => {
    <small className="passwordRequirements">
      <div>Password must include:</div>
      <ul>
        <li>at least 8 characters</li>
        <li>at least one UPPERCASE letter</li>
        <li>at least one LOWERCASE letter</li>
        <li>at least one NUMBER</li>
        <li>at least one special character</li>
      </ul>
    </small>;
  };

  const onSubmit = (formValues) => {
    console.log("submission obj", formValues);
    // reset();
  };

  return (
    <>
      <Container>
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            className="mb-3"
            type="text"
            {...register("firstName", {
              required: {
                value: true,
                message: "Please enter your first name.",
              },
            })}
            placeholder="First Name"
          ></Form.Control>
          <Form.Control
            className="mb-3"
            type="text"
            {...register("surname", {
              required: {
                value: true,
                message: "Please enter your surname.",
              },
            })}
            placeholder="Surname"
          ></Form.Control>
          <Form.Control
            className="mb-3"
            type="text"
            {...register("dateOfBirth", {
              required: {
                value: true,
                message: "Please enter your Date of Birth.",
              },
              valueAsDate: {
                value: true,
                message: "Please enter a valid date.",
              },
            })}
            // @todo: verify date format
            placeholder="MM/DD/YYYY"
          ></Form.Control>
          <Form.Control
            className="mb-3"
            type="text"
            {...register("phoneNumber")}
            placeholder="XXX-XXX-XXXX"
          ></Form.Control>
          {/* @todo: Add Street Address fields */}
          <Form.Control
            className="mb-3"
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
          ></Form.Control>
          <Form.Control
            className="mb-3"
            type="password"
            {...register("password")}
            placeholder="Password"
          ></Form.Control>
          <Button type="submit">Login</Button>
        </form>
        <div>Already have an account? Sign in</div>
        <Link to="/login" className="logInLink">
          here
        </Link>
      </Container>
    </>
  );
};

export default SignUpPage;
