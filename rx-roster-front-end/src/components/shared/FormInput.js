import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormInput = ({
  inputType,
  label,
  formName,
  placeholder,
  validation,
  defaultVal,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm("");

  const createRegister = () => {
    if (Object.keys(validation).length > 0) {
      return { ...register(formName, validation) };
    } else {
      return { ...register(formName) };
    }
  };
  return (
    <Form.Group className="mb-3" controlId={formName}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={inputType}
        placeholder={placeholder}
        ref={createRegister()}
      ></Form.Control>
      <small className="error-message">
        {errors?.genericName && errors.genericName.message}
      </small>
    </Form.Group>
  );
};
export default FormInput;
