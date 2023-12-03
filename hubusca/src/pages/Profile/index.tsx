import { useLocation } from 'react-router-dom';
import { User } from '../../models';
import * as S from "./style";

interface UseLocation{
    state: {user:User}
}
export function Profile()
{  
    const {state: {user}} = useLocation() as UseLocation;
    
    return (
      <><S.ContainerApp>
          <S.Main>
                    <div>
                        <S.imagem src={user.avatar_url?? ''} alt='Perfil' />
                        <h1>{user.name}</h1>
                        <p>{user.location}</p>
                        <S.Container>
                            <p>ID: {user.id}</p>
                            <p>Followers: {user.followers} </p>
                            <p>Repositórios: {user.public_repos} </p>
                            <p>Username: {user.login} </p>
                        </S.Container>
                    </div>
            </S.Main>
      <S.Footer>
      <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
      </S.Footer>
      </S.ContainerApp></>
    );
}