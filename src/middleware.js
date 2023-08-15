'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashBoard = new URL ('/pages/dashboard', request.url) //"criação" da URL para o redirecionamento do usuário 
    const isTokenValidated = validateToken(token);


    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
        
    }

    if (isTokenValidated || token) { //fazendo a validação do token do usuário logado
        if (request.nextUrl.pathname === '/') { //verifica se o usuário que possui o token está na página padrão
            return NextResponse.redirect(urlDashBoard); //redirecionando o usuário da página de "login" para a página de "dashboard"
        }
    }

    NextResponse.next();
};



export const config = {
    matcher: ['/', '/pages/dashboard']
};

