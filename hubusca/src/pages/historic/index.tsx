// Importa o componente UseCard do arquivo user-card
import { UseCard } from "../../components/user-card";
// Importa o hook useHistoricUser do arquivo storage
import { useHistoricUser } from "../../hooks/storage";
// Importa estilos definidos em outro arquivo
import * as S from "./style";

// Define o componente funcional Historic
export function Historic() {
  // Utiliza o hook useHistoricUser para obter a lista de usuários históricos
  const { users } = useHistoricUser();

  // Retorna a estrutura do componente JSX
  return (
    <S.ContainerApp>
      <S.nav>
            <p>Histórico</p>
            </S.nav>
      <S.Main>
        {/* Mapeia a lista de usuários históricos e renderiza um componente UseCard para cada usuário */}
        {users.map(user => <UseCard data={user} />)}
      </S.Main>
      {/* Rodapé do aplicativo */}
      <S.Footer>
        <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
      </S.Footer>
    </S.ContainerApp>
  );
}
