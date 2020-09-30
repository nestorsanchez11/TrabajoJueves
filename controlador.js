function valida() {

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("area").value;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);


    //Guardar cookies
    document.cookie = "nombre=" + nombre + "; ";
    document.cookie = "email=" + email + "; ";
    document.cookie = "mensaje=" + mensaje + "; ";

    var nom_cookie, valor_cookie, temp;
    var array_cookies = document.cookie.split('; ');
    for (var i = 0; i < array_cookies.length; i++) {
        temp = array_cookies[i].split('=');
        nom_cookie = temp[0];
        valor_cookie = temp[1];
        console.log("Nombre de la cookie: " + nom_cookie + "; valor de la cookie: " + valor_cookie);
    }

    //Guardar en localstorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email",email);
    localStorage.setItem("mensaje",mensaje);

    alert("Su mensaje se ha recibido correctamente");
}