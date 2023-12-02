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

    </S.ContainerApp>
  );
}
