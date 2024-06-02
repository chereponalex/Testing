import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkAuth } from "../../components/Hoc/checkAuth";
import { Container } from "../../style";
import { getEntity } from "../../network/entity/get-entity";
import { Spinner } from "../../components/Spinner/Spinner";
import { Button } from "../../components/Button/Button";
import { UserContainer } from "./style";
import { deleteEntity } from "../../network/entity/delete-entity";
import { updateEntity } from "../../network/entity/update-entity";

export const UserEntity = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");

  const { id }: any = useParams();
  const navigate = useNavigate();
  const url = window.location.href;
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const mode = urlParams.get("mode");

  useEffect(() => {
    getEntity(id)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.data);
          setName(res.data.data.name);
          setLastName(res.data.data.last_name);
          setMiddleName(res.data.data.middle_name);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = () => {
    if (id) {
      deleteEntity(id)
        .then((res: any) => {
          if (res.status === 200) {
            navigate("/");
          }
        })
        .catch((err: any) => console.log(err));
    }
  };

  const changeEntity = () => {
    updateEntity(id, { name, last_name: lastName, middle_name: middleName })
      .then((res) => {
        if (res.status === 200) {
          getEntity(id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {!user ? (
        <Spinner />
      ) : (
        <UserContainer>
          ID: {user?.id}
          <br />
          Имя:{" "}
          {mode === "change" ? (
            <input value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            user?.name
          )}{" "}
          <br />
          Фамилия:{" "}
          {mode === "change" ? (
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            user?.last_name
          )}{" "}
          <br />
          Отчество:{" "}
          {mode === "change" ? (
            <input
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          ) : (
            user?.middle_name
          )}{" "}
          <br />
          {(() => {
            switch (mode) {
              case "change":
                return <Button onClick={changeEntity}>Изменить</Button>;
              case "delete":
                return <Button onClick={deleteUser}>Удалить</Button>;
              default:
                return null;
            }
          })()}
        </UserContainer>
      )}
    </Container>
  );
};

export const UserPage = checkAuth({ to: "/login", mustBeAuthed: true })(
  UserEntity
);
