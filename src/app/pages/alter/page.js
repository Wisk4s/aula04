'use client'
import { useState } from "react";
import handlerAcessUser from "../../functions/handlerAcess"
import { useRouter } from "next/navigation";
import styles from '../../../page.module.css';

export default function Alterar() {
  const [altera, setAltera] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { push, refresh } = useRouter();

  const handlerAlterar = async (e) => {

    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/alterar');
    } catch {
      refresh();
    }
  }
  return (
    <div class={styles.div}>
      <h1 className={styles.h1}>Alterar</h1>
      <form className={styles.form} onSubmit={handlerAlterar}>
        <input
          className={styles.input}
          placeholder='Nome'
          type="name"
          onChange={(e) => { setAltera({ ...altera, name: e.target.value }) }}>
        </input>

        <input
          className={styles.input}
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setAltera({ ...altera, email: e.target.value }) }}>
        </input>

        <input
          className={styles.input}
          placeholder='Senha'
          type='password'
          onChange={(e) => { setAltera({ ...altera, password: e.target.value }) }}>
        </input>
        <button className={styles.button}>Atualizar</button>
      </form>
    </div>
  )
}
