window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        if (window.screen.width < 1000) {
            document.getElementById('navbar').style.setProperty('background-color', 'rgb(43,48,53)', 'important');
        }
    } else {
        document.getElementById('navbar').style.setProperty('background-color', 'rgb(43,48,53, 0)', 'important');
    }
});
