// Data
var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');

// Initialize the task completion counter
var taskCounter = 0;

// Retrieve tasks from localStorage and populate the task list
var savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
  document.getElementById("myUL").innerHTML = savedTasks;
}

// Retrieve task completion status from localStorage and update the counter
var savedCounter = localStorage.getItem('taskCounter');
if (savedCounter) {
  taskCounter = parseInt(savedCounter);
  updateTaskCounter();
}

// Display the welcome message if 'name' is provided
if (name) {
  var nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.textContent = "Welcome, " + decodeURIComponent(name);
  document.body.appendChild(nameDiv);
} else {
  document.body.innerHTML += "<p>nobody.</p>";
}

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

  // Add an event listener to handle task completion
  myNodelist[i].addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      updateTaskCounter();
      saveTasks(); // Save tasks when a task is completed
    }
  }, false);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    updateTaskCounter();
    saveTasks(); // Save tasks when a task is deleted
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Nothing To Write?, Kindly Write something to add in the list");
  } else {
    document.getElementById("myUL").appendChild(li);
    saveTasks(); // Save tasks when a new task is added
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      updateTaskCounter();
      saveTasks(); // Save tasks when a task is deleted
    };
  }

  // Add an event listener to handle task completion
  li.addEventListener('click', function(ev) {
    ev.target.classList.toggle('checked');
    updateTaskCounter();
    saveTasks(); // Save tasks when a task is completed
  }, false);
}

function closeAllTasks() {
  var list = document.querySelectorAll('ul#myUL li'); // Select all list items
  for (var i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }
  taskCounter = 0;
  updateTaskCounter();
  saveTasks(); // Save tasks when all tasks are deleted
}

// Function to update the task completion counter
function updateTaskCounter() {
  var completedTasks = document.querySelectorAll('ul#myUL li.checked').length;
  taskCounter = completedTasks;
  document.getElementById("taskCounter").textContent = "Tasks Completed so far by " + decodeURIComponent(name) + " = " + taskCounter;
  localStorage.setItem('taskCounter', taskCounter.toString()); // Save the counter to localStorage
}

// Function to save the tasks to localStorage
function saveTasks() {
  var taskListHTML = document.getElementById("myUL").innerHTML;
  localStorage.setItem('tasks', taskListHTML);
}

const input = document.getElementById('myInput');
input?.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});
//By Ayushman Kalta and a bit from Darshan



