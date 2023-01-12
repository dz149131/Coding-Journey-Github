//Nav Toggle Button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//Onscroll Nav Opacity 
function changeOpacity() {
    let scrollValue = window.scrollY;
    let navbar = document.getElementById('navbar');
    if(scrollValue < 100){
        navbar.classList.remove('navOpacity');
    } else {
        navbar.classList.add('navOpacity');
    }
}

window.addEventListener('scroll', changeOpacity);