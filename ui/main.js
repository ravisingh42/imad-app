console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft +'px';
    }
img.onclick= function() {
    var interval = setInterval(moveRight, 10);
};

//Counter code
var button = document.getElementById('counter');

button.onclick= function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the responce and change it into a variable
    request.onreadystatechange = function () {
        if (request.readyState=== XMLHttpRequest.DONE) {
            //Take some action
            if(request.status===200) {
                var counter= request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //Not done yet
    };
    
    // Make the request
    request.open('GET','http://ravisingh78927.imad.hasura-app.io/counter', true);
    request.send(null);
};
    
