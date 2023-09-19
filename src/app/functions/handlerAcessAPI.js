'use server'

const users = [
    {
        "name": "marcelino",
        "email": "joao.santos@gmail.com",
        "password": "123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        "name": "victor",
        "email": "vito@gmail.com",
        "password": "123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        "name": "jose",
        "email": "jose@hotmail.com",
        "password": "123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        "name": "caio",
        "email": "caio@yahoo.com",
        "password": "123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
]

const getUserAuthenticated = (user) => {
    
    let userAuth = {} //armazena o userr (usuário) ou seja, o que está armazenado dentro da userAuth
    
    users.map(userr => {
        if(user.email == userr.email && user.password == userr.password){ //verificando se o email do usuário é igual o email de login do usuario
            userAuth = userr 
            
        }
    });
    console.log(userAuth);
    return userAuth
}

const getUsers = () =>{
    return users;
}

const getUserRegistered = (user) => {
    
    let newUserAuth = {} //armazena o userr (usuário) ou seja, o que está armazenado dentro da userAuth
    
    users.map(userr => {
        if(user.name == userr.name && user.email == userr.email && user.password == userr.password){ //verificando se o email do usuário é igual o email de login do usuario
            newUserAuth = userr 
            
        }
    });
    console.log(newUserAuth);
    return newUserAuth
}

export { getUsers, getUserAuthenticated, getUserRegistered};