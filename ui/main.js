//submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
     // Capture the responce and change it into a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status===200) {
                alert('Logged in successfully');
            } else if (request.status === 403) {
                alert('username/password is incorrect');
            } else if (request.status === 500) {
                alert('Something went wrong on the server');
            }
        }

              //Not done yet
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://ravisingh78927.imad.hasura-app.io/login', true);
    request.send(JSON.stringify({username: username, password: password}));
};

