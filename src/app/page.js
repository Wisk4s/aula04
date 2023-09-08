'use client'
import Link from 'next/link';
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import styles from '../page.module.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }
  return (
    <div>
      <h1 className={styles.h1}>Login</h1>
      <form onSubmit={handlerLogin}>
        <input
          className={styles.input}
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          className={styles.input}
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className={styles.button}>Entrar</button>
      </form>
      <h3 className={styles.h3}>Não tem uma conta? Vá para a <Link href='/pages/register'>página de cadastro</Link></h3>
    </div>
  )
}
