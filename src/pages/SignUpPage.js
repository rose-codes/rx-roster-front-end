import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <Container>
        <h1 className="py-3 my-3">Welcome!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Please enter your first name.",
                },
              })}
              placeholder="First Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              {...register("surname", {
                required: {
                  value: true,
                  message: "Please enter your surname.",
                },
              })}
              placeholder="Surname"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of Birthday</Form.Label>
            <Form.Control
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
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              {...register("phoneNumber")}
              placeholder="XXX-XXX-XXXX"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
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
          </Form.Group>
          {/* @todo: Add Street Address fields */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password")}
              placeholder="Password"
            ></Form.Control>
          </Form.Group>

          <Button type="submit" disabled={!isValid}>
            Sign Up
          </Button>
        </form>
        <div>
          Already have an account? Sign in
          <Link to="/login" className="logInLink">
            here
          </Link>
        </div>
      </Container>
    </>
  );
};

export default SignUpPage;
