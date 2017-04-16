<?php
/**
 * Created by PhpStorm.
 * User: YimingMa
 * Date: 2017/4/16
 * Time: PM12:42
 */
session_start();
switch($_SERVER['REQUEST_METHOD']){
    case 'GET' :
        require 'View/index.html.php';
    case 'POST':break;
    default: break;
}
