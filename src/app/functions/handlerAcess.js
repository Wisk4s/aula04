import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 }) && localStorage.setItem('nome', JSON.stringify(userAuth.name)); //armazenando o nome do usuario autenticado no localstorage -> primeira requisição do trabalho
    }
}
export default handlerAcessUser;

