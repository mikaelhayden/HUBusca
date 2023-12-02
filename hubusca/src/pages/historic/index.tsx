import { UseCard } from "../../components/user-card";
import { useHistoricUser } from "../../hooks/storage";

export function Historic() {
const {users} = useHistoricUser()
  return (
    <div>
        {
            users.map(user => <UseCard data={user}/>)
        }
    </div>
  );
}
