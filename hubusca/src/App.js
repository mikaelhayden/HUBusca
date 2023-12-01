import axios from 'axios';
import './App.css';
import { useState } from 'react';
import MinhaComponente from './esconder';

function App() {

  const [search, setSearch] = useState("");
  const [name, setName] = useState("Loading...");
  const [login, setLogin] = useState("Loading...");
  const [location, setLocation] = useState("Loading...");
  const [avatar_url, setAvatarURL] = useState("Loading...");
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const handleSearch = () => {
    axios.get(`https://api.github.com/users/${search}`)
.then((res) => {
        console.log(res.data)
        setName(res.data.name);
        setLogin(res.data.login);
        setLocation(res.data.location);
        setAvatarURL(res.data.avatar_url);
        setMostrarDiv(!mostrarDiv);
        
      })

      .catch((error) => {
        console.error("Erro na busca do perfil:", error);
        // Lidar com o erro
      });

  }
  
  return (
    <><div className='container-app'>

      <div className='container'>
        <header className='header-top'>
        </header>
        <nav>
          <p>App para buscar perfis do GitHub</p>
        </nav>

        <main>
          <div className='center'>
            <div className='form'>
              <h1>Busque pelo Perfil</h1>
              <input type='text'
                placeholder='Digite um username'
                onChange={(e) => setSearch(e.target.value)} />
                <div>
                  <button className='buscar' onClick={handleSearch}>Buscar</button>
                </div>
              
            </div>
            <br/>
            {mostrarDiv && (
              <div className='content'>
                <div>
                  <img className= 'avatar' src={avatar_url} alt='Perfil' />
                  <h1 className='name'>{name}</h1>
                  <p>{login}</p>
                  <p>{location}</p>
                </div>
              </div>
            )}
          </div>

        </main>

      </div>
    </div>
    <footer className='rodape'>
    <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
    </footer></>

  );
}

export default App;
