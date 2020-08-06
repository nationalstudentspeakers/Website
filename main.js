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

function changeSlides(pdf, title, link, button) {
    var resourceButton = document.getElementById(button);
    var resourceLink = document.getElementById(link);
    resourceButton.innerText = title;
    resourceLink.href = pdf;
}

//GSAP
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, CSSRulePlugin);

//homepage animations

gsap.from(".hmpg-title-anim", {
    duration: 2, 
    xPercent: 50,
    opacity: 0,
    stagger: 0.5
});

const tl = gsap.timeline();

const anim = tl.from(".hmpg-about-anim", {
    xPercent: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.25
});

ScrollTrigger.create({
    trigger: '.hmpg-about-anim',
    animation: anim,
    start: "top 70%",
    end: "bottom bottom"
});

const anim2 = tl.from(".hmpg-vision-anim", {
    xPercent: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.25
});

ScrollTrigger.create({
    trigger: '.hmpg-vision-anim',
    animation: anim2,
    start: "top 70%",
    end: "bottom bottom"
});