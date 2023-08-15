import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   
    return (
        <div>
            <h1>Dashboard</h1>

            <div>
                <p>Nome - {users.name}</p>
                <p>E-mail - {users.email}</p>
                <p>Password - {users.password}</p>
                <p>Token - {users.token}</p>
            </div>
        </div>
    );
};