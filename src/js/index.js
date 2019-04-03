var lastSelectedCanvas = null;
var canvasIdArr = ['#twCanvasTypes', '#fbCanvasTypes', '#msgCanvasTypes', '#igCanvasTypes'];
var platformIcons = ['<i class="fab fa-twitter mr-2"></i>',
                     '<i class="fab fa-facebook-square mr-2"></i>',
                     '<i class="fab fa-facebook-messenger mr-2"></i>',
                     '<i class="fab fa-instagram mr-2"></i>'];

var twNavbar = null;
function choosePlatform(canvasId) {
    // hide last selected platform canvas type if there's any
    if(lastSelectedCanvas != null)
        $(lastSelectedCanvas).addClass("d-none");
    lastSelectedCanvas = canvasIdArr[canvasId];

    // then show canvas types for currently selected platform
    $(canvasIdArr[canvasId]).removeClass("d-none");
}

function chooseCanvas(canvasType, id) {
    // close canvas type option for platform
    $(canvasIdArr[id]).addClass("d-none");

    // change icon and label to platform and canvas type
    var canvasTypeLabel = document.getElementById("canvasTypeLabel");
    canvasTypeLabel.innerHTML = platformIcons[id] + "mock " + canvasType;

    // hide empty canvas sign 
    // show canvas
    $("#noCanvasChosen").addClass("d-none");
    $("#canvasCont").removeClass("d-none");

    // draw mockup
    if(id==0) {
        if(canvasType=="profile") {
            
        } else if(canvasType=="tweet") {

        }
    }
}

function drawTwitterProfile() {
    var canvas = document.getElementById("mockupCanvas");
    var ctx = canvas.getContext("2d");

    // background and header elements
    var bgImg = new Image();
    //bgImg.crossOrigin = "anonymous";
    bgImg.addEventListener('load', function() {
        ctx.drawImage(bgImg, 0, 0, 375, 667);

        // header
        ctx.fillStyle = "#f5f5f5";
        ctx.fillRect(0, 0, 375, 125);

        // icon border
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(60, 125, 40, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#f5f5f5";
        ctx.beginPath();
        ctx.arc(60, 125, 35, 0, 2 * Math.PI);
        ctx.fill();
    }, false);
    bgImg.src = "assets/mockups/twitter/profile/tw-mobile-bg-white.png";

    var editProfile = new Image();
    //editProfile.crossOrigin = "anonymous";
    editProfile.addEventListener('load', function() {
        ctx.drawImage(editProfile, 0, 0, 375, 667);
    }, false);
    editProfile.src = "assets/mockups/twitter/profile/tw-mobile-editprofile.png";

    var backButton = new Image();
    //backButton.crossOrigin = "anonymous";
    backButton.addEventListener('load', function() {
        ctx.drawImage(backButton, 0, 0, 375, 667);
    }, false);
    backButton.src = "assets/mockups/twitter/profile/tw-mobile-backbtn.png";

    var locationIcon = new Image();
    //locationIcon.crossOrigin = "anonymous";
    locationIcon.addEventListener('load', function() {
        ctx.drawImage(locationIcon, 0, 0, 375, 667);
    }, false);
    locationIcon.src = "assets/mockups/twitter/profile/tw-mobile-location.png";

    var linkIcon = new Image();
    //linkIcon.crossOrigin = "anonymous";
    linkIcon.addEventListener('load', function() {
        ctx.drawImage(linkIcon, 0, 0, 375, 667);
    }, false);
    linkIcon.src = "assets/mockups/twitter/profile/tw-mobile-location.png";

    // navbar
    var navbarImg = new Image();
    //navbarImg.crossOrigin = "anonymous";
    navbarImg.addEventListener('load', function() {
        ctx.drawImage(navbarImg, 0, 0, 375, 667);
    }, false);
    navbarImg.src = "assets/mockups/twitter/profile/tw-mobile-navbar.png";
    
    // tabs
    var tabsImg = new Image();
    //tabsImg.crossOrigin = "anonymous";
    tabsImg.addEventListener('load', function() {
        ctx.drawImage(tabsImg, 0, 0, 375, 667);
    }, false);
    tabsImg.src = "assets/mockups/twitter/profile/tw-mobile-tabs.png";

    mergeImages(['assets/mockups/twitter/profile/tw-mobile-bg-white.png', 
                 'assets/mockups/twitter/profile/tw-mobile-navbar.png', 
                 'assets/mockups/twitter/profile/tw-mobile-tabs.png',
                 'assets/mockups/twitter/profile/tw-mobile-backbtn.png',
                 'assets/mockups/twitter/profile/tw-mobile-editprofile.png',
                 'assets/mockups/twitter/profile/tw-mobile-location.png'])
    .then(b64 => document.getElementById('imgMockup').src = b64);
}

function downloadMockup(mockupId) {
    /*var canvas = document.getElementById(imgId)
    var image = canvas.toDataURL("image/png");
    e.href = image;*/

    var image = document.getElementById(mockupId);
    document.getElementById("dl").href= image.src;
    document.getElementById("dl").setAttribute("download", "mockup");
    document.getElementById("dl").click();
}

function downloadMockup(e, canvasId) {
    var canvas = document.getElementById(canvasId)
    var image = canvas.toDataURL("image/png");
    e.href = image;
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if("withCredentails" in xhr) {
        xhr.open(method, url, true);
    } else if(typeof XDomainRequest !="undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }

    return xhr;
}

// root
$(document).ready(function () {
    drawTwitterProfile();
});