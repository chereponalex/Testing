import { checkAuth } from "../../components/Hoc/checkAuth";
import { Container } from "../../style";

export const ViewEntity = () => {
  return <Container>UserPage</Container>;
};

export const UserPage = checkAuth({ to: "/login", mustBeAuthed: true })(
  ViewEntity
);
