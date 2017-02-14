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

    // Handle request state change events
    // xhr.onreadystatechange = function() { 
    //     // If the request completed
    //     if (xhr.readyState == 4) {
    //         statusDisplay.innerHTML = '';
    //         if (xhr.status == 200) {
    //             // If it was a success, close the popup after a short delay
    //             statusDisplay.innerHTML = 'Saved!';
    //             window.setTimeout(window.close, 1000);
    //         } else {
    //             // Show what went wrong
    //             statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
    //         }
    //     }
    // };

    xhr.send(params);
    // statusDisplay.innerHTML = 'Saving...';
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    // statusDisplay = document.getElementById('status-display');
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('addQuestion').addEventListener('submit', addQuestion);
});
