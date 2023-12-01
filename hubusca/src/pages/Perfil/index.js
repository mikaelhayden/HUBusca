import styles from './Perfil.module.css'
import { useLocation } from 'react-router-dom';


function Perfil()
{  
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const name = params.get('name');
    const login = params.get('login');
    const location = params.get('location');
    const avatar_url = params.get('avatar_url');

    console.log("Eu ", name);
    return (
      <><div className='container-app'>
          <main>
                <div className='center'>
                    <br/>
                    <div className='content'>
                    <div>
                        <img className= 'avatar' src={avatar_url} alt='Perfil' />
                        <h1 className='name'>{name}</h1>
                        <p>{login}</p>
                        <p>{location}</p>
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

export default Perfil;