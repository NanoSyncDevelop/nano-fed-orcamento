// Loading Components
window.onload = function() {
    $('#header-boilerplate').load('src/components/header.html');
};

window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        if (window.screen.height < 900) {
            document.getElementById('navbar').style.setProperty('background-color', 'rgb(43,48,53)', 'important');
        }
    } else {
        document.getElementById('navbar').style.setProperty('background-color', 'rgb(43,48,53, 0)', 'important');
    }
});
