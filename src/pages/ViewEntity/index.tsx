import { checkAuth } from "../../components/Hoc/checkAuth";
import { Container } from "../../style";

export const ViewEntity = () => {
  return <Container>ViewEntity</Container>;
};

export const ViewPage = checkAuth({ to: "/login", mustBeAuthed: true })(
  ViewEntity
);
