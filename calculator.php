<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num1 = intval(htmlspecialchars($_POST["num1"]));
        $num2 = intval(htmlspecialchars($_POST["num2"]));
        $operacion = htmlspecialchars(($_POST["operacion"]));

        if ($operacion == "+") {
            $resualtado = $num1 + $num2;  
            echo"<h1>El resultado de la suma es $resualtado</h1>";
        }
        elseif ($operacion == "-") {
            $resualtado = $num1 - $num2;  
            echo"<h1>El resultado de la resta es $resualtado</h1>";
        }
        elseif ($operacion == "*") {
            $resualtado = $num1 * $num2;  
            echo"<h1>El resultado de la multiplicación es $resualtado</h1>";
        }
        elseif ($operacion == "/") {
                if ($num1 != 0) {
                    $resualtado = $num1 / $num2;  
                echo"<h1>El resultado de la divisón es $resualtado</h1>";
                }else{
                    echo"<h1>No puedes dividir entre 0</h1>";
                }     
        }
        elseif ($operacion == "**") {
            $resualtado = $num1 ** $num2;  
            echo"<h1>El resultado de la potencia es $resualtado</h1>";
        }
        elseif ($operacion == "///") {
            if($num1>0 && $num2 > 0)
            {
                $resualtado1 = sqrt($num1);
            $resualtado2 = sqrt($num2);  
            echo"<h1>El resultado de la raíz del numero $num1 es $resualtado1</h1>";
            echo"<h1>El resultado de la raíz del numero $num2 es $resualtado2</h1>";
            }else{
                echo"<h1>Sólo raices positivas</h1>";
            }
        }
    }else{
        print("no se encontro nada");
        echo"<h1>No se encontró nada</h1>";
    }

?>