import { useLocation } from 'react-router-dom';
import { User } from '../../models';

interface UseLocation{
    state: {user:User}
}
export function Profile()
{  
    const {state: {user}} = useLocation() as UseLocation;
    
    return (
      <><div>
          <main>
                <div>
                    <br/>
                    <div>
                    <div>
                        <img src={user.avatar_url?? ''} alt='Perfil' />
                        <h1>{user.name}</h1>
                        <p>{user.login}</p>
                        <p>{user.location}</p>
                    </div>
                    </div>
                </div>
            </main>
        </div>
      <footer className='rodape'>
      <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
      </footer></>
    );
}