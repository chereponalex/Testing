import { checkAuth } from "../../components/Hoc/checkAuth";
import { Container } from "../../style";

export const EditEntity = () => {
  return <Container>EditEntity</Container>;
};

export const EditPage = checkAuth({ to: "/login", mustBeAuthed: true })(
  EditEntity
);