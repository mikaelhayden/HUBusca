import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { User } from "../../models";

async function fetcher(username: string) {
    const{data} = await axios.get<User>(`https://api.github.com/users/${username}`)
    return data;
}

interface Props {
    username: string;
    onSuccess: (data: User) => void;
    onError: (error: AxiosError | Error) => void;
}

export function useGetUser({username, onError, onSuccess} : Props)
{
    return useQuery({
        queryKey: ['USER', username], queryFn:() => fetcher(username),
        enabled: username !== '' , 
        onSuccess: (data: User) => onSuccess(data),
        onError,
    })
}