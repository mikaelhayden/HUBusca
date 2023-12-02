import { styled } from "styled-components";
import { User } from "../models";
import { useNavigate } from "react-router-dom";

interface Props
{
    data: User;
}

export const Content = styled.div`
    background-color: #09101c;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 20%;
    padding: 5vh;
    border-radius: 10px;
`

export const Avatar = styled.img`
    width: 12vh;
    height: 12vh;
`

export const Name = styled.h1`
    font-size: 15pt;
    margin: 0;
    padding: 0;
`

export function UseCard({data} : Props)
{
    const navigate = useNavigate();
    return(
        <Content>
        <div>
          <Avatar src={data.avatar_url} onClick={() => navigate('/profile', {state: { user: data}})} alt='Perfil' />
          <Name>{data.name}</Name>
          <p>{data.login}</p>
          <p>{data.location}</p>
        </div>
      </Content>
    )
}