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

const timelineVariable = gsap.timeline();

const animationFromLeft = timelineVariable.from(".anim-from-left", {
    xPercent: -20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-left',
    animation: animationFromLeft
});

const timelineVariable2 = gsap.timeline();

const animationFromRight = timelineVariable2.from(".anim-from-right", {
    xPercent: 20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-right',
    animation: animationFromRight
});

const timelineVariable3 = gsap.timeline();

const animationFromDown = timelineVariable3.from(".anim-from-down", {
    yPercent: 20,
    opacity: 0,
    delay: 1,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-down',
    animation: animationFromDown
});

/*const timelineVariable4 = gsap.timeline();

const animationFromUp = timelineVariable4.from(".anim-from-up", {
    yPercent: -20,
    opacity: 0,
    delay: 1,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-up',
    animation: animationFromUp
});*/

const timelineVariable5 = gsap.timeline();

const animationFromLeft2 = timelineVariable5.from(".anim-from-left2", {
    xPercent: -20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-left2',
    animation: animationFromLeft2
});

const timelineVariable6 = gsap.timeline();

const animationFromRight2 = timelineVariable6.from(".anim-from-right2", {
    xPercent: 20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-right2',
    animation: animationFromRight2
});

const timelineVariable7 = gsap.timeline();

const animationFromDown2 = timelineVariable7.from(".anim-from-down2", {
    yPercent: 20,
    opacity: 0,
    delay: 1,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-down2',
    animation: animationFromDown2
});

const timelineVariable8 = gsap.timeline();

const animationFromDown3 = timelineVariable8.from(".anim-from-down3", {
    yPercent: 20,
    opacity: 0,
    delay: 1,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-down3',
    animation: animationFromDown3
});

const timelineVariable9 = gsap.timeline();

const animationFromLeft3 = timelineVariable9.from(".anim-from-left3", {
    xPercent: -20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-left3',
    animation: animationFromLeft3
});

const timelineVariable10 = gsap.timeline();

const animationFromRight3 = timelineVariable10.from(".anim-from-right3", {
    xPercent: 20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-right3',
    animation: animationFromRight3
});

const timelineVariable11 = gsap.timeline();

const animationFromLeft4 = timelineVariable11.from(".anim-from-left4", {
    xPercent: -20,
    opacity: 0,
    duration: 1,
start: 20% top,
    stagger: 0.5
});

ScrollTrigger.create({
    trigger: '.anim-from-left4',
    animation: animationFromLeft4
});