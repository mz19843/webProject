<?php
/**
 * Created by PhpStorm.
 * User: YimingMa
 * Date: 2017/4/17
 * Time: PM9:16
 */

namespace Frame;


class GetCons
{
    protected $conArray;
    public function getConsArray(){
        if($_SERVER["HTTP_REFERER"]){
            $conString=str_replace($_SERVER['HTTP_ORIGIN'].'/','',$_SERVER['HTTP_REFERER']);
            $this -> conArray = explode('/',$conString);
        }else{

        }
        return $this->conArray;
    }

}