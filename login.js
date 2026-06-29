
const openbtn =document.getElementById("open");
const sidebar =document.getElementById("sidebar");
const closebtn=document.getElementById("close");
openbtn.onclick = function(){
    sidebar.style.left = "0";
};
closebtn.onclick = function(){
    sidebar.style.left = "-250px";
};
