import { getUsers } from "@/app/functions/handlerAcessAPI";
import Link from 'next/link';
import styles from '../../../page.module.css'

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
            <h3 className={styles.h3}>Deseja alterar algum dado? <Link href='/pages/alter'>Clique aqui</Link></h3>
            <h3 className={styles.h3}>Não tem uma conta? Vá para a <Link href='/pages/register'>página de registro</Link></h3>
        </div>
    );
};