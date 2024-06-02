import { checkAuth } from "../../components/Hoc/checkAuth";
import { Container } from "../../style";

export const DeleteEntity = () => {
  return <Container>DeleteEntity</Container>;
};
export const DeletePage = checkAuth({ to: "/login", mustBeAuthed: true })(
  DeleteEntity
);
