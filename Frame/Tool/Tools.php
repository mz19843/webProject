<?php
/**
 * Created by PhpStorm.
 * User: YimingMa
 * Date: 2017/4/18
 * Time: AM12:25
 */

namespace Frame\Tool;


class Tools
{
    public static function stitchURL($ina){
        $res="";
        foreach ($ina as $in){
            $res .= "/".$in;
        }
        return $res;
    }
}