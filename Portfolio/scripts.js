console.log("Hello");
var divs = document.getElementsByClassName('dummy');
for (var i = 0; i < divs.length; i++) {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '0px 0px 30px 0px ' + color;
    console.log(color)
    divs[i].style['background-color'] = color;
}