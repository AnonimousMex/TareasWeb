<?php
    session_start();
    if (isset($_SESSION["error_nombre"])) {
        $error_nombre = $_SESSION["error_nombre"];
        echo"<h2>$error_nombre</h2>";
        unset($_SESSION["error_nombre"]);
    }
    if (isset($_SESSION["error_contrasena"])) {
        $error_contrasena = $_SESSION["error_contrasena"];
        echo"<h2>$error_contrasena</h2>";
        unset($_SESSION["error_contrasena"]);
    }
    if (isset($_SESSION["error_contrasena2"])) {
        $error_contrasena2 = $_SESSION["error_contrasena2"];
        echo"<h2>$error_contrasena2</h2>";
        unset($_SESSION["error_contrasena2"]);
    }
    if (isset($_SESSION["error_email"])) {
        $error_email = $_SESSION["error_email"];
        echo"<h2>$error_email</h2>";
        unset($_SESSION["error_email"]);
    }
    if (isset($_SESSION["error_conf_contrasena"])) {
        $error_conf_contrasena = $_SESSION["error_conf_contrasena"];
        echo"<h2>$error_conf_contrasena</h2>";
        unset($_SESSION["error_conf_contrasena"]);
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Básica</title>
</head>
<body>
    <form action="restrictions.php" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" ><br>
        
        <label for="email">Emial</label>
        <input type="text" id="email" name="email" ><br>
        
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" ><br>
        
        <label for="connf">Confirmar Contraseña</label>
        <input type="password" id="conf_contrasena" name="conf_contrasena" ><br>
 
        <button type="submit">Calcular</button>
    </form>
</body>
</html>