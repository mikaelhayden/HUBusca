# Hubusca: Uma Aplicação React + TypeScript + Vite

O **Hubusca** é um aplicativo desenvolvido utilizando as tecnologias **React**, **TypeScript** e **Vite**, proporcionando uma experiência eficiente e moderna para os usuários. Vamos entender o conceito de cada uma dessas tecnologias:

- **React:** Uma biblioteca JavaScript declarativa e eficiente para construir interfaces de usuário. React utiliza componentes reutilizáveis para criar uma estrutura organizada e fácil de manter.

- **TypeScript:** Uma extensão do JavaScript que adiciona tipagem estática opcional. O TypeScript permite detectar erros durante o desenvolvimento e melhorar a manutenção do código, tornando-o mais robusto.

- **Vite:** Um construtor de aplicações JavaScript moderno e rápido que oferece uma configuração inicial mais ágil em comparação com outras ferramentas. Vite utiliza a tecnologia ES modules para proporcionar um ambiente de desenvolvimento eficiente.

A proposta do aplicativo é permitir aos usuários buscar informações de outros usuários do GitHub. Logo na tela inicial, é possível realizar pesquisas pelo nome de usuário do GitHub. Os dados apresentados incluem o nome, nome de usuário e localização do perfil pesquisado.

Ao clicar na foto de perfil, os usuários são redirecionados para a página de perfil (*Profile*), onde encontram informações mais detalhadas sobre o usuário pesquisado, como ID, número de seguidores, quantidade de repositórios, nome de usuário, localização, e uma lista de repositórios. Esses dados proporcionam uma visão abrangente do perfil GitHub.

A estilização das páginas foi implementada utilizando a biblioteca *Styled Components*. Essa abordagem permite criar estilos de maneira mais dinâmica e modular, incorporando CSS diretamente nos componentes React.

Para acessar a API do GitHub, o aplicativo utiliza o *Axios*, uma biblioteca para realizar requisições HTTP de forma simplificada. Isso possibilita a obtenção rápida e eficiente dos dados necessários para alimentar as páginas do *Hubusca*.

A navegação entre as páginas é gerenciada pelo *React Router Dom*, que utiliza o conceito de roteamento para permitir a transição suave entre diferentes componentes da aplicação. Essa abordagem é essencial para criar uma experiência de usuário fluida e intuitiva.

**Em resumo**, o *Hubusca* é uma aplicação moderna que combina tecnologias poderosas para proporcionar uma busca eficiente e detalhada de perfis do GitHub, enfatizando a importância da usabilidade e performance. 🚀
