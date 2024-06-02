import { LoginContainer } from "./style";
import { Form } from "../../components/Form/Form";

export const LoginPage = () => {
  const submitForm = () => {};

  return (
    <LoginContainer>
      <Form submitForm={submitForm}></Form>
    </LoginContainer>
  );
};
