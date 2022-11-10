<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.ionos.mx';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'contacto@joseangelrc.com';                     //SMTP username
    $mail->Password   = 'Sallumy_09';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    $mail->setFrom($_POST['email'], $_POST['nombre']);
    $mail->addAddress('contacto@joseangelrc.com', 'Jose A. Rodriguez');

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $_POST['asunto'];
    $mail->Body    = $_POST['msg'] . "<br><br> Enviado desde: <a href='http://joseangelrc.com/' target='_blank'>Portafolio Web</a>";

    $mail->send();
    
    if ($_POST['lang'] === "en") {
        $alerta = [
            "tipo" => "success",
            "msg"  => "Thank's for contact me, wait for my answer soon!"
        ];
    } else {
        $alerta = [
            "tipo" => "success",
            "msg"  => "¡Gracias por contactarme, espera mi respuesta!"
        ];
    }
    echo json_encode($alerta);
} catch (Exception $e) {
    if ($_POST['lang'] === "en") {
        $alerta = [
            "tipo" => "error",
            "msg"  => "The message could not be sent, try again."
        ];
    }else {
        $alerta = [
            "tipo" => "error",
            "msg"  => "El mensaje no se pudo enviar, intentelo de nuevo."
        ];
    }

    echo json_encode($alerta);
}
