document.addEventListener("DOMContentLoaded", (event) => { 
  captureValue(event);
});

function captureValue(event){
  document.querySelector("form#create-task-form").addEventListener('submit', function(event) {
    document.getElementById("tasks").innerHTML += "<li>" + document.getElementById("new-task-description").value + "</li>";
    document.querySelector("input[type='text']").value = "";
    event.preventDefault();
  });
}