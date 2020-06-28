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

var videoStem = "https://www.youtube.com/embed/";

function changeVid(URL, video) {
    var videoURL = videoStem + URL;
    var resourceVideo = document.getElementById(video);
    resourceVideo.src = videoURL;
}