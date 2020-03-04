var messages = document.getElementById("messages");
var testbox = document.getElementById("testbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){ 
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value="";

});