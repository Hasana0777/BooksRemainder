var overlay = document.querySelector(".popup-overlay");
var box = document.querySelector(".popup-box");
var add = document.querySelector(".plus");
add.addEventListener("click",function(){
    overlay.style.display="block";
    box.style.display="block";
})

 var  cancel = document.getElementById("delete-book")
 cancel.addEventListener("click",function(event){
    event.preventDefault();
    overlay.style.display="none";
    box.style.display="none";

 })

 var Book = document.querySelector(".Book");
 var Bname = document.getElementById("name");
 var Aname = document.getElementById("aname");
 var describe = document.getElementById("des");
 var addi =  document.getElementById("addbook");
 addi.addEventListener("click",function(event){
    event.preventDefault();
   

    var div = document.createElement("div")
    div.setAttribute("class","Book-container")
  div.innerHTML=`<h2>${Bname.value}</h2>
  <h3>${Aname.value}</h3>
  <p>${describe.value}</p>
  <button onclick="dbook(event)">Delete</button>`


  
  Book.append(div);
  overlay.style.display="none";
  box.style.display="none";


 })
function dbook(event){
    event.target.parentElement.remove();
}


 