import { UseCard } from "../../components/user-card";
import { useHistoricUser } from "../../hooks/storage";
import * as S from "./style";
export function Historic() {
const {users} = useHistoricUser()
  return (
    <S.ContainerApp>
      <S.Main>
      {
            users.map(user => <UseCard data={user}/>)
      }
      </S.Main>
      <S.Footer>
          <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
      </S.Footer>
    </S.ContainerApp>

  );
}
