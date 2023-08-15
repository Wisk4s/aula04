'use server'

const users = [
    {
        "name": "victor",
        "email": "vito@gmail.com",
        "password": "123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    },
    {
        "name": "jose",
        "email": "jose@hotmail.com",
        "password": "123",
        "token": "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
    },
    {
        "name": "caio",
        "email": "caio@yahoo.com",
        "password": "123",
        "token": "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
]

const getUserAuthenticated = (user) => {
    
    let userAuth = {}
    
    users.map(userr => {
        if(user.email == userr.email && user.password == userr.password){
           
            console.log(userr);
            userAuth = userr 
            
        }
    });

    return userAuth
}

const getUsers = () =>{
    return users;'  '
}

export { getUsers, getUserAuthenticated };