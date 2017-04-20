<?php

/**
 * Created by PhpStorm.
 * User: YimingMa
 * Date: 2017/4/16
 * Time: PM12:42
 */
use Frame\GetCons;
use Frame\Tool\Tools;
require_once "Frame/GetCons.class.php";
require_once "Frame/Tool/Tools.php";

session_start();

switch($_SERVER['REQUEST_METHOD']){
    case 'GET' :
        require_once 'View/index.html.php';
        break;
    case 'POST':
        if($_POST['action']){
            require 'Cons/'.$_POST['action'].'.php';
        }
        //echo 'Cons'.$ConsUrl.'.php';
        //require_once 'Cons/Login.php';

        break;
    default: break;
}
