var lastSelectedCanvas = null;
var canvasIdArr = ['#twCanvasTypes', '#fbCanvasTypes', '#msgCanvasTypes', '#igCanvasTypes'];
var platformIcons = ['<i class="fab fa-twitter mr-2"></i>',
                     '<i class="fab fa-facebook-square mr-2"></i>',
                     '<i class="fab fa-facebook-messenger mr-2"></i>',
                     '<i class="fab fa-instagram mr-2"></i>'];

var mockUpFileName = "";

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
            mockUpFileName = "twitterProfileMockup";
            drawTwitterProfile();
            //drawTwitterProfileLivePreview();
        } else if(canvasType=="tweet") {

        }
    }
}

function drawTwitterProfile() {
    var canvas = new fabric.Canvas("liveCanvas", {
        backgroundColor: 'rgb(86, 86, 86)'
    });

    // set background color
    canvas.setBackgroundColor("rgb(255, 255, 255");

    // navbar
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-navbar.png", function(oImg) {
        oImg.scaleToWidth(canvas.getWidth());
        canvas.add(oImg);
    });

    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-tabs.png", function(oImg) {
        oImg.scaleToWidth(canvas.getWidth());
        canvas.add(oImg);
    });
}

/*function drawTwitterProfile() {
    var canvas = document.getElementById("mockupCanvas");
    var ctx = canvas.getContext("2d");

    // background and header elements
    var bgImg = new Image();
    bgImg.addEventListener('load', function() {
        ctx.drawImage(bgImg, 0, 0, 750, 1334);

        // header
        ctx.fillStyle = "#a9a9a9";
        ctx.fillRect(0, 0, 750, 250);

        // header text
        ctx.font = "40px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("header image here", 220, 130);

        // icon border
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(100, 250, 80, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#a9a9a9";
        ctx.beginPath();
        ctx.arc(100, 250, 75, 0, 2 * Math.PI);
        ctx.fill();

        // name
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("user", 28, 375);

        // username
        ctx.font = "26px Arial";
        ctx.fillStyle = "#AAB8C2";
        ctx.fillText("@username", 28, 410);

        // description
        ctx.font = "22px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("description here wooh", 28, 460);

        // following
        ctx.font = "bold 22px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("323", 28, 680);
    }, false);
    bgImg.src = "assets/mockups/twitter/profile/tw-mobile-bg-white.png";

    var editProfile = new Image();
    editProfile.addEventListener('load', function() {
        ctx.drawImage(editProfile, 0, 0, 750, 1334);
    }, false);
    editProfile.src = "assets/mockups/twitter/profile/tw-mobile-editprofile.png";

    var backButton = new Image();
    backButton.addEventListener('load', function() {
        ctx.drawImage(backButton, 0, 0, 750, 1334);
    }, false);
    backButton.src = "assets/mockups/twitter/profile/tw-mobile-backbtn.png";

    var locationIcon = new Image();
    locationIcon.addEventListener('load', function() {
        ctx.drawImage(locationIcon, 0, 0, 750, 1334);
    }, false);
    locationIcon.src = "assets/mockups/twitter/profile/tw-mobile-location.png";

    var linkIcon = new Image();
    linkIcon.addEventListener('load', function() {
        ctx.drawImage(linkIcon, 0, 0, 750, 1334);
    }, false);
    linkIcon.src = "assets/mockups/twitter/profile/tw-mobile-link.png";

    // navbar
    var navbarImg = new Image();
    navbarImg.addEventListener('load', function() {
        ctx.drawImage(navbarImg, 0, 0, 750, 1334);
    }, false);
    navbarImg.src = "assets/mockups/twitter/profile/tw-mobile-navbar.png";
    
    // tabs
    var tabsImg = new Image();
    tabsImg.addEventListener('load', function() {
        ctx.drawImage(tabsImg, 0, 0, 750, 1334);
    }, false);
    tabsImg.src = "assets/mockups/twitter/profile/tw-mobile-tabs.png";
}*/

/*function drawTwitterProfileLivePreview() {
    var canvas = document.getElementById("liveCanvas");
    var ctx = canvas.getContext("2d");

    // background and header elements
    var bgImg = new Image();
    bgImg.addEventListener('load', function() {
        ctx.drawImage(bgImg, 0, 0, 375, 667);

        // header
        ctx.fillStyle = "#a9a9a9";
        ctx.fillRect(0, 0, 375, 125);

        // header text
        ctx.font = "20px Arial";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("your header here", 110, 65);

        // icon border
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(50, 125, 40, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#a9a9a9";
        ctx.beginPath();
        ctx.arc(50, 125, 35, 0, 2 * Math.PI);
        ctx.fill();

        // name
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("user", 14, 190);

        // username
        ctx.font = "14px Arial";
        ctx.fillStyle = "#AAB8C2";
        ctx.fillText("@username", 14, 210);

        // description
        ctx.font = "14px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("description here wooh", 14, 240);
    }, false);
    bgImg.src = "assets/mockups/twitter/profile/tw-mobile-bg-white.png";

    var editProfile = new Image();
    editProfile.addEventListener('load', function() {
        ctx.drawImage(editProfile, 0, 0, 375, 667);
    }, false);
    editProfile.src = "assets/mockups/twitter/profile/tw-mobile-editprofile.png";

    var backButton = new Image();
    backButton.addEventListener('load', function() {
        ctx.drawImage(backButton, 0, 0, 375, 667);
    }, false);
    backButton.src = "assets/mockups/twitter/profile/tw-mobile-backbtn.png";

    var locationIcon = new Image();
    locationIcon.addEventListener('load', function() {
        ctx.drawImage(locationIcon, 0, 0, 375, 667);
    }, false);
    locationIcon.src = "assets/mockups/twitter/profile/tw-mobile-location.png";

    var linkIcon = new Image();
    linkIcon.addEventListener('load', function() {
        ctx.drawImage(linkIcon, 0, 0, 375, 667);
    }, false);
    linkIcon.src = "assets/mockups/twitter/profile/tw-mobile-link.png";

    // navbar
    var navbarImg = new Image();
    navbarImg.addEventListener('load', function() {
        ctx.drawImage(navbarImg, 0, 0, 375, 667);
    }, false);
    navbarImg.src = "assets/mockups/twitter/profile/tw-mobile-navbar.png";
    
    // tabs
    var tabsImg = new Image();
    tabsImg.addEventListener('load', function() {
        ctx.drawImage(tabsImg, 0, 0, 375, 667);
    }, false);
    tabsImg.src = "assets/mockups/twitter/profile/tw-mobile-tabs.png";
}*/

function downloadMockup() {
    document.getElementById("liveCanvas").toBlob(function(blob) {
        saveAs(blob, mockUpFileName + ".png");
    });
}

// root
$(document).ready(function () {
    //drawTwitterProfile();
});