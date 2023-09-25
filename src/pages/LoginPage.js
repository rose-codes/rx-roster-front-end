import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
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
      <Container className="authPages">
        <h1 className="py-3 my-3">Welcome Back!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="jane.doe@example.com"
            ></Form.Control>
            <small className="error-message">
              {errors?.email && errors.email.message}
            </small>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter a password",
                },
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
              })}
              placeholder="Create a password"
            ></Form.Control>
            <small className="error-message">
              {errors?.password && errors.password.message}
            </small>
          </Form.Group>
          <Button type="submit" className="me-3" disabled={!isValid}>
            Login
          </Button>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </Link>
        </form>
        <div>
          Don't have an account? Sign up
          <Link to="/signup" className="mw-2">
            here
          </Link>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
