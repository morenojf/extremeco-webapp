function gettingUserList(){
    let userList = JSON.parse(localStorage.getItem('userListLs'));

    if (userList == null){
        userList = 
        [

            // Id, Nombre,     Apellido,    Correo,                  Contraseña,  Bitrhday,    Rol
            ["1",  "Francisco" , "Moreno", "fjmoreno2101@gmail.com", "moreno123", "21/01/2002", "1" ]
            ["2",  "Zulmay" , "Solano", "zulma@gmail.com", "solano123", "22/02/2003", "2" ]
        ]
    }return userList
}

const validating = () =>{
    
}