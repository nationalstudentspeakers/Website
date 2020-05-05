function toggleNav() {
    var nav = document.getElementById('nav');
    var displaySetting = getComputedStyle(nav).display;
    if (displaySetting == 'block') {
        nav.style.display = 'none';
    } 
    else {
        nav.style.display = 'block';
    }
}