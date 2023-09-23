// shows list name
function ShowName() {
    var name1 = document.getElementById("ListInput").value;
    var resultDiv = document.getElementById("result1");
    resultDiv.innerHTML = "<p>List Name: " + name1 + "</p>" + "<p>Now Enter Your Name Below:</p>";
}
//shows user name
        function displayName() {
            var name = document.getElementById("nameInput").value;
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "<p>Enter Name: " + name + "</p>";

            var name1 = document.getElementById("ListInput").value;
            var resultDiv = document.getElementById("result1");
            resultDiv.innerHTML = "<p>List Name: " + name1 + "</p>" + "<p>Now Enter Your Name Below:</p>";

            // Redirect to another page with the name as a parameter
            window.location.href = "Page3.html?name=" + encodeURIComponent(name) + "!"  + "   -   " + "List Name: " + encodeURIComponent(name1);  
        }
        const input = document.getElementById('myInput');
        input?.addEventListener('keydown', (event) => {
          if (event.key === "Enter") {
            document.getElementById("next").click();
          }
        });