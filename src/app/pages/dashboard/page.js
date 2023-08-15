import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   
    const chama = getUsers(); //criando uma const e chamando a function "getUsers()" lá do "handleAcessAPI"

    return (
        <div>
            <h1>Dashboard</h1>

            <div>
                {chama.map((users) => //mapeando o "banco de dados" e chamando apenas o nome do usuário 
                    <p>Nome ➡ {users.name}</p>
                )}
            </div>
        </div>
    );
};