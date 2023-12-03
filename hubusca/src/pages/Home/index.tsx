// Importa os hooks e componentes necessários do React e de outros arquivos
import { useEffect, useRef, useState } from 'react';
import * as S from "./style" // Importa estilos definidos em outro arquivo
import { useGetUser } from '../../hooks'; // Importa um hook personalizado para buscar informações de usuário
import { Loading } from '../../components'; // Importa um componente de loading
import { useHistoricUser } from '../../hooks/storage'; // Importa um hook personalizado para gerenciar histórico de usuários
import { UseCard } from '../../components/user-card'; // Importa um componente para exibir informações do usuário
import { Link, useNavigate } from 'react-router-dom'; // Importa componente de Link e hook de navegação

// Define o componente funcional Home
export function Home() {
  // Estado para armazenar o valor da busca
  const [search, setSearch] = useState("");
  // Referência para o input de busca
  const inputSearchRef = useRef<HTMLInputElement>(null);
  // Hook para adicionar usuários ao histórico
  const { add } = useHistoricUser();
  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(false);
  // Hook para obter informações do usuário com base na busca
  const { data: user, isError, isSuccess } = useGetUser({
    username: search,
    // Callback chamado quando a busca é bem-sucedida
    onSuccess(data) {
      add(data); // Adiciona o usuário ao histórico
    },
    // Callback chamado em caso de erro na busca
    onError(error) {
      console.log(error); // Registra o erro no console
    }
  });

  // Função chamada quando o botão de busca é clicado
  const handleSearch = () => {
    // Verifica se a referência para o input existe
    if (!inputSearchRef.current) {
      return;
    }
    // Atualiza o estado de busca com o valor do input
    setSearch(inputSearchRef.current.value);
    // Define isLoading como verdadeiro para indicar que a busca está em andamento
    setIsLoading(true);
  };

  // Efeito que é executado quando isSuccess ou isError mudam
  useEffect(() => {
    // Define isLoading como falso quando a busca é concluída (seja sucesso ou erro)
    if (isSuccess || isError) {
      setIsLoading(false);
    }
  }, [isSuccess, isError]);
  
  // Retorna a estrutura do componente JSX
  return (
    <>
      <S.ContainerApp>
        <S.nav>
        <p>Home</p>
        <p>|</p>
          <Link to="/historic"><p> Histórico</p></Link> {/* Link para a página de histórico */}
        </S.nav>
        <S.logo>
          <img src="src/components/imgs/logo.png" alt="Logo"></img> {/* Imagem do logo */}
          <h1>HUBusca</h1>
        </S.logo>
        <S.Main>
          <S.Form>
            <h1>Busque pelo Perfil</h1>
            <input
              type='text'
              placeholder='Digite um username'
              ref={inputSearchRef}
            />
            <S.Search>
              <button id="send" onClick={handleSearch}>Buscar</button> {/* Botão de busca */}
            </S.Search>
          </S.Form>
          <br />
          {
            isError && <p>Usuário não encontrado ;(</p> // Exibe mensagem de erro se o usuário não for encontrado
          }

          {
            isLoading && <Loading /> // Exibe componente de loading durante a busca
          }

          {isSuccess && user.id && (
            <UseCard data={user} /> // Exibe as informações do usuário se a busca for bem-sucedida
          )}

        </S.Main>
        <S.Footer>
          <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p> {/* Informações do rodapé */}
        </S.Footer>
      </S.ContainerApp>
    </>
  );
}
