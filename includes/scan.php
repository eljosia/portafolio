<?php
$directorio = 'proyects';
$ficheros   = array_diff(scandir($directorio, 1), array('..', '.'));


print_r(json_encode($ficheros));
