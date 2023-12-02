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

                    <br/>
                    <div>
                    <div>
                        <img src={user.avatar_url?? ''} alt='Perfil' />
                        <h1>{user.name}</h1>
                        <p>{user.login}</p>
                        <p>{user.location}</p>
                    </div>
                    </div>

            </S.Main>
      <S.Footer>
      <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
      </S.Footer>
      </S.ContainerApp></>
    );
}