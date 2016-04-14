<?php
    $videos = [
        "1" => "bertonni",
        "2" => "joao paulo",
        "3" => "flaviana",
        "4" => "sergio",
        "5" => "gleybson",
        "6" => "bea",
        "7" => "adauto",
        "8" => "mateus",
        "9" => "bruno",
        "10" => "pedro"
    ];
?>
<html>
    <body>
        <h1>
<?php
    echo "Vídeo " .
    $_GET["video"];
?>
        </h1>
        <div>
            Aqui vai estar o vídeo de
<?php
    $video = $_GET["video"];
    echo $videos[$video];
?>
        </div>
    </body>
</html>