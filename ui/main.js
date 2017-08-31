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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    
    //Capture a list as a name and render it to the list
     var names= ['name1' , 'name2' , 'name3', 'name4'];
     var list='';
     for(i=0; i<names.length ; i++) {
         list +='<li>' + names[i] + '</li>';
     }
     var ul= document.getElementById('namelist');
     ul.innerHTML = list;
};
