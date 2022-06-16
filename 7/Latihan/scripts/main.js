var myImage = document.querySelector('img');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    var name = localStorage.getItem('name');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/op.png');
        myHeading.innerHTML = 'One Piece is cool, ' + name;
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
        myHeading.innerHTML = 'Mozilla is cool, ' + name;
    }

}

function setUserName() {
    var mySrc = myImage.getAttribute('src');
    var myName = prompt('Please enter your name!');
    localStorage.setItem('name', myName);
    if(mySrc === 'images/firefox-icon.png') {
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    } else {
        myHeading.innerHTML = 'One Piece is cool, ' + myName;
    }

}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}