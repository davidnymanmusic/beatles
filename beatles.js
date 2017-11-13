function generate(){
alert("LET IT CONTINUE");
}

var paul = document.querySelector("#Paul")
var john = document.querySelector("#John")
var george = document.querySelector("#George")
var ringo = document.querySelector("#Ringo")

paul.addEventListener("click", function(){
paul.classList.toggle("hover");
      console.log("Paul is Dead");
});
john.addEventListener("click", function(){
john.classList.toggle("hover");
    console.log("John is Dead");
});
george.addEventListener("click", function(){
george.classList.toggle("hover");
    console.log("George is Dead");
});
ringo.addEventListener("click", function(){
ringo.classList.toggle("hover");
    console.log("Ringo is Dead");
});

paul.addEventListener("mouseover", function(){
paul.classList.add("getBack");
});
john.addEventListener("mouseover", function(){
john.classList.add("getBack");
});
george.addEventListener("mouseover", function(){
george.classList.add("getBack");
});
ringo.addEventListener("mouseover", function(){
ringo.classList.add("getBack");
});
