function gettingUserList(){
    var userList = JSON.parse(localStorage.getItem('userListLs'));

    if (userList == null){
        userList = 
        [

            // Id, Nombre,     Apellido,    Correo,                  Contraseña,  Bitrhday,    Rol
            ["1",  "Francisco" , "Moreno", "fjmoreno2101@gmail.com", "moreno123", "21/01/2002", "1" ],
            ["2",  "Zulmay" , "Solano", "zulma@gmail.com", "solano123", "22/02/2003", "2" ]
        ]
    }return userList;
};

function validating (pEmeail, pPassword){
    var userList = gettingUserList(); 
    var bAcces = false;

    for (var i = 0; i < userList.length; i++) {
        if (pEmeail == userList[i][3] && pPassword == userList[i][4]){
            bAcces = true; 
            sessionStorage.setItem('activeUser', userList[i][1] + '' + userList[i][2]);
            sessionStorage.setItem('userRol', userList[i][6]);
        }
        
    };
    return bAcces;
}