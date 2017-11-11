function generate(){
alert("LET IT CONTINUE");
}

var paul = document.querySelector("#Paul")
var john = document.querySelector("#John")
var george = document.querySelector("#George")
var ringo = document.querySelector("#Ringo")

paul.addEventListener("click", function(){
   document.body.classList.toggle("#PaulHover")
    console.log("Paul is Dead");
});
john.addEventListener("click", function(){
   document.body.classList.toggle("#PaulHover")
    console.log("John is Dead");
});
george.addEventListener("click", function(){
   document.body.classList.toggle("#PaulHover")
    console.log("George is Dead");
});
ringo.addEventListener("click", function(){
   document.body.classList.toggle("#PaulHover")
    console.log("Ringo is Dead");
});
