document.querySelector("#btnIngresar").addEventListener("click", iniciarSesion);
document.querySelector("#logOut").addEventListener("click", logOut);

function logOut(){
    localStorage.clear()
}


function iniciarSesion(){
    var sEmail; 
    var sPassword;
    var bAcces = false;
 
    sEmail = document.querySelector("#exampleInputEmail1").value;
    sPassword = document.querySelector("#inputPassword6").value;
    

    bAcces = validating(sEmail, sPassword);
    if (bAcces == true) {
        
        ingresar();
    }else{
        alert("El usuario y la contraseña no coinciden");
    };

};

function ingresar(){
    var rol = sessionStorage.getItem('userRol')
 
    switch (rol) {

        case "1":
            window.location.href="indexFrancisco.html";
            break;

        case "2":
            window.location.href="indexZulmay.html";
            break;
        
    
    }; 



}