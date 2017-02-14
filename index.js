var statusDisplay = null;

function addQuestion() {
    event.preventDefault();

    var postUrl = 'http://localhost:8000/question/';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', postUrl, true);

    var text = encodeURIComponent(document.getElementById('text').value);
    var tags = encodeURIComponent(document.getElementById('tags').value);

    var params = 'text=' + text + 
                 '&tags=' + tags;

    params = params.replace(/%20/g, '+');

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) {
            statusDisplay.innerHTML = '';
            if (xhr.status == 201) {
                statusDisplay.innerHTML = 'Created question!';
                window.setTimeout(window.close, 2000);
            } else {
                statusDisplay.innerHTML = 'Error creating: ' + xhr.statusText;
            }
        }
    };

    xhr.send(params);
    statusDisplay.innerHTML = 'Posting question...';
}

window.addEventListener('load', function(evt) {
    statusDisplay = document.getElementById('status-display');
    document.getElementById('addQuestion').addEventListener('submit', addQuestion);
});
