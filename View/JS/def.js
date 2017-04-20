/**
 * Created by YimingMa on 2017/4/16.
 */
function loaded() {
    window.console.log(document.cookie);
    var tem=document.getElementsByClassName("loginLink");
    prepareEventListener();
   // document.getElementById("loginLink").addEventListener("click",login,false);
}

function prepareEventListener() {
    //add login
    addEventListenerToClass('loginLink',login,'click');
    //add sign up
    addEventListenerToClass('signupLink',signUp,'click');

}
function addEventListenerToClass(myClass,fun,event) {
    var classes=document.getElementsByClassName(myClass);
    for( var i= 0 ; i<classes.length;i++){
        classes[i].addEventListener(event,fun,false)
    }
}

function signUp() {
    var url="/";
    ajaxPost("action=SignUp",url,document.getElementById('jsTest'));
}
function login() {
    var url="/";
    ajaxPost("action=Login",url,document.getElementById('jsTest'));
}
function ajaxPost(postData,url,faterNode) {
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function () {
        if(this.readyState===4 && this.status === 200){
            var mynode=xhttp.responseText;
            removeAllChildren(faterNode);
            faterNode.appendChild(parseToDOM(mynode)[0]);
        }
    }
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.send(postData);
}
function removeAllChildren(father) {
    var children=father.childNodes;
    for(var i = 0 ; i < children.length; i ++){
        father.removeChild(children[i]);
    }

}
function parseToDOM(str){
    var div = document.createElement("div");
    if(typeof str === "string")
        div.innerHTML = str;
    return div.childNodes;
}
document.addEventListener("DOMContentLoaded",loaded,false);
