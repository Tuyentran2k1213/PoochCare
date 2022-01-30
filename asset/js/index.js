const lightDarkMode = document.querySelector('.theme');
const mode = document.querySelector('html');

//script for light and dark mode
var isLight = true;
lightDarkMode.onclick = function(){
    lightDarkMode.classList.toggle('sun', isLight);
    isLight = !isLight;
    if(isLight){
        mode.setAttribute('data-theme', 'light');
    } else{
        mode.setAttribute('data-theme', 'dark');
    }
    
}

var Top = document.querySelector('.toTop');
var head = document.querySelector('header');
var sticky = head.offsetTop;
window.onscroll = function() {showingHeader()};
function showingHeader() {
    var isScroll = window.pageYOffset > sticky ? true : false;
    head.classList.toggle('scroll', isScroll);
    Top.classList.toggle('onTop', isScroll);
}
