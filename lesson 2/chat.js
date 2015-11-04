window.onload = function(){
    var button = document.getElementById('send');
    button.onclick = function (event) {
        var message = document.getElementById('message').value;
        getAnswer(message);
        event.preventDefault();
    }
}

function getAnswer(message)
{
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost/test/ajax.php?input=' + message);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var answer = document.getElementById('answer');
            answer.innerText = request.responseText;
        }
    }
}