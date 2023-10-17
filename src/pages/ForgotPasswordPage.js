// import { Container, Form, Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const ForgotPasswordPage = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     reset,
//   } = useForm({
//     defaultValues: [],
//     mode: "onBlur",
//   });
//   const onSubmit = (formData) => {
//     console.log(formData);
//     navigate("/dashboard");
//   };

//   return (
//     <>
//       <Container>
//         <h1>Welcome Back!</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Form.Control
//             className="mb-3"
//             type="email"
//             {...register("email", {
//               required: {
//                 value: true,
//                 message: "Please enter an email.",
//               },
//               pattern: {
//                 value: /\S+@\S+\.\S+/,
//                 message: "Please enter a valid email",
//               },
//             })}
//             placeholder="Email"
//           ></Form.Control>
//           <small className="error-message">
//             {errors?.email && errors.email.message}
//           </small>
//           <Form.Control
//             className="mb-3"
//             type="password"
//             {...register("password")}
//             placeholder="Password"
//           ></Form.Control>
//           <small className="error-message">
//             {errors?.password && errors.password.message}
//           </small>
//           <Button type="submit">Login</Button>
//         </form>
//       </Container>
//     </>
//   );
// };

// export default ForgotPasswordPage;
