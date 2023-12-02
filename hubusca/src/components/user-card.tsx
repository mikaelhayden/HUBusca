import { styled } from 'styled-components';
import { User } from '../models';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: User;
}

const CardContainer = styled.div`
  background-color: #09101c;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%; /* Make the card take up the full width */
  max-width: 300px; /* Set a max-width to limit the width on larger screens */
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 12vh;
  height: 12vh;
  border-radius: 50%; /* Make the avatar image round */
  cursor: pointer;
`;

const Name = styled.h1`
  font-size: 15pt;
  margin: 10px 0 5px;
`;

export function UseCard({ data }: Props) {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <Content>
        <Avatar
          src={data.avatar_url}
          onClick={() => navigate('/profile', { state: { user: data } })}
          alt="Perfil"
        />
        <Name>{data.name}</Name>
        <p>{data.login}</p>
        <p>{data.location}</p>
      </Content>
    </CardContainer>
  );
}

