import { useEffect, useRef, useState } from 'react';
import * as S from "./style"
import { useGetUser } from '../../hooks';
import { Loading } from '../../components';
import { useHistoricUser } from '../../hooks/storage';
import { UseCard } from '../../components/user-card';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const [search, setSearch] = useState("");
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const { add } = useHistoricUser();
  const [isLoading, setIsLoading] = useState(false);
  const { data: user, isError, isSuccess } = useGetUser({
    username: search,
    onSuccess(data) {
      add(data);
    },
    onError(error) {
      console.log(error);
    }
  });

  const handleSearch = () => {
    if (!inputSearchRef.current) {
      return;
    }
    setSearch(inputSearchRef.current.value);
    setIsLoading(true); // Definir como verdadeiro quando a busca inicia
  };

  // Use um efeito para ajustar isLoading quando a busca é concluída
  useEffect(() => {
    if (isSuccess || isError) {
      setIsLoading(false); // Definir como falso quando a busca é concluída (seja sucesso ou erro)
    }
  }, [isSuccess, isError]);

  return (
    <>
      <S.ContainerApp>
        <Link to="/historic"><p>Usuários Recentes</p></Link>
        <S.nav>
          <img src="src/components/imgs/logo.png" alt="Logo"></img>
          <h1>HUBusca</h1>
        </S.nav>
        <S.Main>
          <S.Form>
            <h1>Busque pelo Perfil</h1>
            <input
              type='text'
              placeholder='Digite um username'
              ref={inputSearchRef}
            />
            <S.Search>
              <button onClick={handleSearch}>Buscar</button>
            </S.Search>
          </S.Form>
          <br />
          {
            isError && <p>Usuário não encontrado ;(</p>
          }

          {
            isLoading && <Loading />
          }

          {isSuccess && user.id && (
            <UseCard data={user} />
          )}

        </S.Main>
        <S.Footer>
          <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
        </S.Footer>
      </S.ContainerApp>
    </>
  );
}
