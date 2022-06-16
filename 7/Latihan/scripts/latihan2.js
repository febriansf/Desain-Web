var buttonMark = document.querySelector('button');

buttonMark.onclick = function() {
    if (document.querySelector('span').className === 'highlight') {
        var highlightText = document.querySelectorAll('span');
        for (let i = 0; i < highlightText.length; i++) {
        highlightText[i].className = "";
        }
    } else {
        var highlightText = document.querySelectorAll('span');
        for (let i = 0; i < highlightText.length; i++) {
        highlightText[i].className = "highlight";
        }
    }
}