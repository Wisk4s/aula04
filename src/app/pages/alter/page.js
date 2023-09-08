'use client'
import { useState } from "react";
import handlerAcessUser from "../../functions/handlerAcess"
import { useRouter } from "next/navigation";

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
    <div>
      <h1>Alterar</h1>
      <form onSubmit={handlerAlterar}>
        <input
          placeholder='Nome'
          type="name"
          onChange={(e) => { setAltera({ ...altera, name: e.target.value }) }}>
        </input>

        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setAltera({ ...altera, email: e.target.value }) }}>
        </input>

        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setAltera({ ...altera, password: e.target.value }) }}>
        </input>
        <button>Atualizar</button>
      </form>
    </div>
  )
}
