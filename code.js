function conv(){
    var c=document.getElementById("cel").value;
    var f=(c*1.8)+32;
    document.getElementById("res").innerHTML=`${f} fahrenheit`;
}