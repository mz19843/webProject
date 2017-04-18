/**
 * Created by YimingMa on 2017/4/16.
 */
function loaded() {
    window.console.log(document.cookie);


    document.getElementById("loginLink").addEventListener("click",login,false);
}
function login() {
    var url="url=login";
    ajaxPost("",url,document.getElementById('jsTest'));
}
function ajaxPost(postData,url,faterNode) {
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function () {
        if(this.readyState===4 && this.status === 200){
            var mynode=xhttp.responseText;
            faterNode.innerHTML=mynode;
            faterNode.appendChild(parseToDOM(mynode)[0]);
        }
    }
    xhttp.open("POST",url,true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.send(postData);
}
function parseToDOM(str){
    var div = document.createElement("div");
    if(typeof str === "string")
        div.innerHTML = str;
    return div.childNodes;
}
document.addEventListener("DOMContentLoaded",loaded,false);
