import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");
  const [name, setName] = useState("Loading...");
  const [login, setLogin] = useState("Loading...");
  const [location, setLocation] = useState("Loading...");
  const [avatar_url, setAvatarURL] = useState("Loading...");

  const handleSearch = () => {
    axios.get(`https://api.github.com/users/${search}`)
.then((res) => {
        console.log(res.data)
        setName(res.data.name);
        setLogin(res.data.login);
        setLocation(res.data.location);
        setAvatarURL(res.data.avatar_url);
      })

      .catch((error) => {
        console.error("Erro na busca do perfil:", error);
        // Lidar com o erro
      });

  }
  
  return (
    <div className='container-app'>
      <div className='container'>
        <header className='header-top'>
          <ul>
            <li>Jovem Programador</li>
          </ul>
        </header>

        <main>
          <div className='form'>
            <h1>Buscador de Perfis do Github</h1>
            <input type='text' 
            placeholder='Digite um username' 
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className='content'>
            <div>
              <img src={avatar_url} alt='Perfil'/>
              <h1>{name}</h1>
              <p>{login}</p>
              <p>{location}</p>
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default App;
