import { useRef, useState } from 'react';
import * as S from "./style"
import { useGetUser } from '../../hooks';
import { Loading } from '../../components';
import { useHistoricUser } from '../../hooks/storage';
import { UseCard } from '../../components/user-card';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const [search, setSearch] = useState("");
  const inputSearchRef = useRef<HTMLInputElement>(null)
  const {add} = useHistoricUser()
  const {data:user, isLoading, isError, isSuccess} = useGetUser({username: search, 
    onSuccess(data) 
    {
      add(data)
    },
    onError(error) 
    {
      console.log(error)
    }
  })
  
  return (
    <><S.ContainerApp>
        <Link to="/historic"><p>Usuários Recentes</p></Link>
        <S.nav>
          <img src="src/components/imgs/logo.png"></img>
          <h1>HUBusca</h1>
        </S.nav>
        <S.Main>
            <S.Form>
              <h1>Busque pelo Perfil</h1>
              <input type='text'
                placeholder='Digite um username'
                ref={inputSearchRef}
                />
                <S.Search>
                  <button onClick={() => {
                    if(!inputSearchRef.current){
                      return;
                    }
                    setSearch(inputSearchRef.current.value)
                  }}>Buscar</button>
                </S.Search>
            </S.Form>
            <br/>
            {
              isError && <p>Usuário não encontrado ;(</p>
            }

            {
              isLoading && <Loading />
            }

            {isSuccess && user.id &&(
              <UseCard data={user}/>
            )}
            
           
        </S.Main>
      <S.Footer>
        <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
      </S.Footer>
    </S.ContainerApp></>
  );
}
