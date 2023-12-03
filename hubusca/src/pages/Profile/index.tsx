// Importa o hook useLocation do react-router-dom para obter informações da localização (URL)
import { useLocation } from 'react-router-dom';
// Importa o modelo User do arquivo models
import { User } from '../../models';
// Importa estilos definidos em outro arquivo
import * as S from "./style";
import { ReactElement } from 'react';
import { useGetRepos } from '../../hooks/query/repos';
import { CardRepo } from '../../components';

// Interface para descrever a estrutura esperada do objeto state retornado pelo useLocation
interface UseLocation {
    state: { user: User }
}

// Define o componente funcional Profile
export function Profile(): ReactElement {
    // Utiliza o hook useLocation para obter o estado da localização, especificando a estrutura esperada usando a interface UseLocation
    const { state: { user } } = useLocation() as UseLocation;
    const {
		data: repos,
		isSuccess,
		isLoading,
		isError,
	} = useGetRepos({ username: user.login });

    // Retorna a estrutura do componente JSX
    return (
        <>
            <S.ContainerApp>
                <S.nav>
                    <p>Profile</p>
                </S.nav>
                <S.Main>
                    <div>
                        {/* Exibe a imagem do perfil do usuário */}
                        <S.imagem src={user.avatar_url ?? ''} alt='Perfil' />
                        {/* Exibe o nome do usuário */}
                        <h1>{user.name}</h1>
                        {/* Exibe a localização do usuário */}
                        <p>{user.location}</p>
                        <S.Container>
                            {/* Exibe o ID do usuário */}
                            <p>ID: {user.id}</p>
                            {/* Exibe o número de seguidores do usuário */}
                            <p>Followers: {user.followers} </p>
                            {/* Exibe o número de repositórios públicos do usuário */}
                            <p>Repositórios: {user.public_repos} </p>
                            {/* Exibe o nome de usuário do usuário */}
                            <p>Username: {user.login} </p>
                        </S.Container>
                    </div>
                </S.Main>
                <br/><br/>
                {isSuccess && repos.length > 0 && (
				<S.RepoRoot>
					<h3>Repositórios</h3>
					<S.RepoListRoot>
						{repos.map((repo) => (
							<CardRepo
								key={repo.id}
								data={repo}
							/>
						))}
					</S.RepoListRoot>
				</S.RepoRoot>
			)}

			{isLoading && <p>Buscando repositórios.</p>}

			{isSuccess && !(repos.length > 0) && (
				<p>Ops, nenhum repositório foi encontrado.</p>
			)}

			{isError && <p>Ops, algum erro aconteceu.</p>}

                {/* Rodapé do aplicativo */}
                <S.Footer>
                    <p>&copy; 2023 Mikael Hayden | contatoshayden@gmail.com</p>
                </S.Footer>
            </S.ContainerApp>
        </>
    );
}
