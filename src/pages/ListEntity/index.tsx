import { Container } from "../../style";
import { checkAuth } from "../../components/Hoc/checkAuth";

const ListEntity = () => {
  return <Container>ListEntity</Container>;
};

export const HomePage = checkAuth({ to: "/login", mustBeAuthed: true })(
  ListEntity
);
