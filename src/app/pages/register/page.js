'use client'
import { useState } from "react";
import handlerAcessUser from "../../functions/handlerAcess"
import { useRouter } from "next/navigation";

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
    <div>
      <h1>Registro</h1>
      <form onSubmit={handlerRegistro}>
        <input
          placeholder='Nome'
          type="name"
          onChange={(e) => { setRegistra({ ...registra, name: e.target.value }) }}>
        </input>

        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setRegistra({ ...registra, email: e.target.value }) }}>
        </input>

        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setRegistra({ ...registra, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
    </div>
  )
}
