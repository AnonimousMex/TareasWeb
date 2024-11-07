<?php
    session_start();
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = htmlspecialchars($_POST["nombre"]);
        $email = htmlspecialchars($_POST["email"]);
        $contrasena = htmlspecialchars($_POST["contrasena"]);
        $confirmacion = htmlspecialchars($_POST["conf_contrasena"]);
        $min_length = 8;
        $pattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/';

        if (empty($nombre)) {
            $_SESSION['error_nombre'] = "El campo nombre le falta datos";
            header("Location:index.php");
        }
        if (empty($contrasena) || !preg_match($pattern, $password) || $contrasena < $min_length) {
            $_SESSION['error_contrasena'] = "La contraseña es Inválida, necesita números, mayúsculas ó es muy corta";
            header("Location:index.php");
        } 
        if($contrasena != $confirmacion){
            $_SESSION['error_contrasena2'] = "Las contraseñas no son identicas revisalas";
            header("Location:index.php");
        }
        if (empty($email)) {
            $_SESSION['error_email'] = "El campo email le falta datos";
            header("Location:index.php");
        }
        if (empty($confirmacion)) {
            $_SESSION['error_conf_contrasena'] = "El campo confirmar contraseña le falta datos";
            header("Location:index.php");
        }

    }else{
        print("no se encontro nada");
        echo"<h1>No se encontró nada</h1>";
    }

?>