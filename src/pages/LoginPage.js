import { useForm } from "react-hook-form";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
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
      <Container>
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <small className="error-message">
            {errors?.email && errors.email.message}
          </small>
          <Form.Control
            className="mb-3"
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
            placeholder="Password"
          ></Form.Control>
          <small className="error-message">
            {errors?.password && errors.password.message}
          </small>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </Link>
          <Button type="submit">Login</Button>
        </form>
        {/* Google OAuth */}
        <div>Don't have an account? Sign up</div>
        <Link to="/signup" className="signUpLink">
          here
        </Link>
      </Container>
    </>
  );
};

export default LoginPage;
