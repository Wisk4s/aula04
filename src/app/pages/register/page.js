'use client'
import { useState } from "react";
import handlerAcessUser from "../../functions/handlerAcess"
import { useRouter } from "next/navigation";
import styles from '../../../page.module.css';

export default function Registro() {
  const [registra, setRegistra] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { push, refresh } = useRouter();

  const handlerRegistro = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }
  return (
    <div class={styles.div}>
      <h1 className={styles.h1}>Registro</h1>
      <form className={styles.form} onSubmit={handlerRegistro}>
        <input
          className={styles.input}
          placeholder='Nome'
          type="name"
          onChange={(e) => { setRegistra({ ...registra, name: e.target.value }) }}>
        </input>

        <input
          className={styles.input}
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setRegistra({ ...registra, email: e.target.value }) }}>
        </input>

        <input
          className={styles.input}
          placeholder='Senha'
          type='password'
          onChange={(e) => { setRegistra({ ...registra, password: e.target.value }) }}>
        </input>
        <button className={styles.button}>Entrar</button>
      </form>
    </div>
  )
}
