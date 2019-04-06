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
            //drawTwitterProfile();
            drawTwitterProfileLivePreview();
        } else if(canvasType=="tweet") {

        }
    }
}

var myTwitterProfile = false;
var twIsFollowing = false;

function drawTwitterProfile() {
    var canvas = new fabric.Canvas("mockupCanvas", {
        backgroundColor: 'rgb(86, 86, 86)'
    });

    // set background color
    canvas.setBackgroundColor("rgb(255, 255, 255");

    // navbar
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-navbar.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        canvas.add(img);
    });

    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-tabs.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        canvas.add(img);
    });
}

function drawTwitterProfileLivePreview() {
    var canvas = new fabric.Canvas("liveCanvas", {
        backgroundColor: 'rgb(86, 86, 86)'
    });

    // configure
    canvas.selection = false;

    // set background color
    canvas.setBackgroundColor("rgb(255, 255, 255");

    // back button
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-backbtn.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", 5);
        img.set("left", 5);
        img.set("selectable", false);
        canvas.add(img);
    });

    if(myTwitterProfile) {
        // edit profile
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-editprofile.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("top", 25);
            img.set("selectable", false);
            canvas.add(img);
        });
    } else {
        // dm
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-dm.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("top", 25);
            img.set("selectable", false);
            canvas.add(img);
        });

        // notification
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-notification.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("top", 25);
            img.set("selectable", false);
            canvas.add(img);
        });

        if(twIsFollowing) {
            // following
            fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-following.png", function(img) {
                img.scaleToWidth(canvas.getWidth());
                img.set("top", 25);
                img.set("selectable", false);
                canvas.add(img);
            });
        } else {
            // follow
            fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-follow.png", function(img) {
                img.scaleToWidth(canvas.getWidth());
                img.set("top", 25);
                img.set("selectable", false);
                canvas.add(img);
            });
        }
    }

    // header
    var header = new fabric.Rect({
        top: 0,
        left: 0,
        width: canvas.getWidth(),
        height: 125,
        fill: "#1da1f2"
    });
    header.set("selectable", false);
    canvas.add(header);

    // status bar
    fabric.Image.fromURL("assets/mockups/iphone/gui/iphone-x-cellular.png", function(img) {
        img.scale(0.4);
        img.set("top", 6);
        img.set("left", 5);
        img.set("selectable", false);
        canvas.add(img);
    });

    var telecom = new fabric.Text("Globe", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#fff",
        top: 5,
        left: 22,
    });
    canvas.add(telecom);
    fontLoader(canvas, telecom, "Helvetica Neue Light");

    fabric.Image.fromURL("assets/mockups/iphone/gui/iphone-x-lockrotate.png", function(img) {
        img.scale(0.5);
        img.set("top", 6);
        img.set("left", 220);
        img.set("selectable", false);
        canvas.add(img);
    });

    fabric.Image.fromURL("assets/mockups/iphone/gui/iphone-x-alarm.png", function(img) {
        img.scale(0.5);
        img.set("top", 6);
        img.set("left", 233);
        img.set("selectable", false);
        canvas.add(img);
    });

    fabric.Image.fromURL("assets/mockups/iphone/gui/iphone-x-wifi.png", function(img) {
        img.scale(0.4);
        img.set("top", 6);
        img.set("left", 55);
        img.set("selectable", false);
        canvas.add(img);
    });

    var batteryPercent = new fabric.Text("100%", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#fff",
        top: 5,
        left: 245,
    });
    canvas.add(batteryPercent);
    fontLoader(canvas, batteryPercent, "Helvetica Neue Light");

    fabric.Image.fromURL("assets/mockups/iphone/gui/iphone-x-batterywhite.png", function(img) {
        img.scale(0.4);
        img.set("top", 6);
        img.set("left", 275);
        img.set("selectable", false);
        canvas.add(img);
    });

    // user icon border
    var userIconBorder = new fabric.Circle({
        top: 100,
        left: 10,
        radius: 30,
        fill: "#fff"
    });
    userIconBorder.set("selectable", false);
    canvas.add(userIconBorder);

    // user icon
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-icon.png", function(img) {
        img.scaleToWidth(50).set({
            top: 105,
            left: 15.5,
            clipTo: function (ctx) {
                ctx.arc(0, 0, 200, 0, Math.PI * 2, true);
            }
        });
        img.lockMovementX = true;
        img.lockMovementY = true;
        img.lockScalingX = true;
        img.lockScalingY = true;
        img.lockUniScaling = true;
        img.lockRotation = true;

        img.hasControls = false;
        canvas.add(img);
    });

    // name
    var name = new fabric.IText("name", {
        fontSize: 20,
        fontWeight: "bold",
        fill: "#565656",
        top: 160,
        left: 16,
    });
    canvas.add(name);
    //canvas.setActiveObject(name);
    fontLoader(canvas, name, "Helvetica Neue Medium");
    
    // username
    var username = new fabric.IText("@username", {
        fontSize: 13,
        fontWeight: "normal",
        fill: "#565656",
        top: 185,
        left: 16,
    });
    canvas.add(username);
    fontLoader(canvas, username, "Helvetica Neue Light");

    // description
    var description = new fabric.Textbox("user bio, 160 character limit", {
        width: 280,
        fixedWidth: 280,
        top: 205,
        left: 16,
        fontSize: 13,
        fontWeight: "normal",
        fill: "#565656"
    });
    description.lockMovementX = true;
    description.lockMovementY = true;
    description.lockScalingX = true;
    description.lockScalingY = true;
    description.lockUniScaling = true;
    description.lockRotation = true;
    description.hasControls = false;
    canvas.add(description);
    canvas.setActiveObject(description);
    fontLoader(canvas, description, "Helvetica Neue Light");

    // location icon
    var locationIcon;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-location.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", description.calcTextHeight() - 28);
        img.set("left", 8);
        img.set("selectable", false);
        locationIcon = img;
        canvas.add(img);
    });

    // location
    var location = new fabric.IText("location", {
        fontSize: 12,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 215,
        left: 35,
    });
    canvas.add(location);
    //canvas.setActiveObject(location);
    fontLoader(canvas, location, "Helvetica Neue Light");

    // link icon
    var linkIcon;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-link.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", description.calcTextHeight() - 28);
        img.set("left", -12);
        img.set("selectable", false);
        linkIcon = img;
        canvas.add(img);
    });

     // link
     var website = new fabric.IText("website.com", {
        fontSize: 12,
        fontWeight: "normal",
        fill: "#1da1f2",
        top: description.calcTextHeight() + 215,
        left: 120,
    });
    canvas.add(website);
    //canvas.setActiveObject(website);
    fontLoader(canvas, website, "Helvetica Neue Light");

    // following count
    var followingCount = new fabric.IText("690", {
        fontSize: 12,
        fontWeight: "bold",
        fill: "#565656",
        top: description.calcTextHeight() + 240,
        left: 16,
    });
    followingCount.lockMovementX = true;
    followingCount.lockMovementY = true;
    followingCount.lockScalingX = true;
    followingCount.lockScalingY = true;
    followingCount.lockUniScaling = true;
    followingCount.lockRotation = true;

    followingCount.hasControls = false;
    canvas.add(followingCount);
    //canvas.setActiveObject(followingCount);
    fontLoader(canvas, followingCount, "Helvetica Neue Medium");

    // following
    var following = new fabric.Text("Following", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 240,
        left: followingCount.measureLine(0).width + 23,
    });
    canvas.add(following);
    fontLoader(canvas, following, "Helvetica Neue Light");

    // follower count
    var followerCount = new fabric.IText("6,969", {
        fontSize: 12,
        fontWeight: "bold",
        fill: "#565656",
        top: description.calcTextHeight() + 240,
        left: followingCount.measureLine(0).width + following.measureLine(0).width + 36,
    });
    followerCount.lockMovementX = true;
    followerCount.lockMovementY = true;
    followerCount.lockScalingX = true;
    followerCount.lockScalingY = true;
    followerCount.lockUniScaling = true;
    followerCount.lockRotation = true;

    followerCount.hasControls = false;
    canvas.add(followerCount);
    canvas.setActiveObject(followerCount);
    fontLoader(canvas, followerCount, "Helvetica Neue Medium");

    // follower
    var follower = new fabric.Text("Followers", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 240,
        left: followingCount.measureLine(0).width + following.measureLine(0).width + followerCount.measureLine(0).width + 44,
    });
    canvas.add(follower);
    fontLoader(canvas, follower, "Helvetica Neue Light");

    followingCount.on("changed", function(e) {
        following.set("left", followingCount.measureLine(0).width + 23);
        followerCount.set("left", followingCount.measureLine(0).width + following.measureLine(0).width + 36);
        follower.set("left", followingCount.measureLine(0).width + following.measureLine(0).width + followerCount.measureLine(0).width + 44);
    });

    followerCount.on("changed", function(e) {
        follower.set("left", followingCount.measureLine(0).width + following.measureLine(0).width + followerCount.measureLine(0).width + 44);
    });

    // tabs
    var tabs;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-tabs.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", description.calcTextHeight() - 28);
        img.set("selectable", false);
        tabs = img;
        canvas.add(img);
    });

    // pinned tweet icon
    var pinnedTweetIcon;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-pin.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", description.calcTextHeight() - 23);
        img.set("selectable", false);
        pinnedTweetIcon = img;
        canvas.add(img);
    });

    // pinned tweet
    var pinnedTweet = new fabric.Text("Pinned Tweet", {
        fontSize: 12,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 300,
        left: 70,
    });
    canvas.add(pinnedTweet);
    fontLoader(canvas, pinnedTweet, "Helvetica Neue Light");

    // user icon tweet
    var userIconTweet;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-icon.png", function(img) {
        img.scaleToWidth(45).set({
            top: description.calcTextHeight() + 315,
            left: 15.5,
            clipTo: function (ctx) {
                ctx.arc(0, 0, 200, 0, Math.PI * 2, true);
            }
        });
        img.lockMovementX = true;
        img.lockMovementY = true;
        img.lockScalingX = true;
        img.lockScalingY = true;
        img.lockUniScaling = true;
        img.lockRotation = true;

        img.hasControls = false;
        userIconTweet = img;
        canvas.add(img);
    });

    // tweet name
    var tweetName = new fabric.IText("name", {
        fontSize: 14,
        fontWeight: "bold",
        fill: "#565656",
        top: description.calcTextHeight() + 315,
        left: 70,
    });
    canvas.add(tweetName);
    fontLoader(canvas, tweetName, "Helvetica Neue Medium");

    // tweet username
    var tweetUsername = new fabric.IText("@username", {
        fontSize: 13,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 316,
        left: tweetName.measureLine(0).width + 80,
    });
    canvas.add(tweetUsername);
    fontLoader(canvas, tweetUsername, "Helvetica Neue Light");

    // tweet date
    var tweetDate = new fabric.IText("・07/04/2019", {
        fontSize: 12,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 317,
        left: tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90,
    });
    canvas.add(tweetDate);
    fontLoader(canvas, tweetDate, "Helvetica Neue Light");

    // tweet
    var tweet = new fabric.Textbox("this is name's pinned tweet. default has an image attached to it", {
        width: 210,
        fixedWidth: 210,
        fontSize: 13,
        fontWeight: "normal",
        fill: "#565656",
        top: description.calcTextHeight() + 332,
        left: 70,
    });
    tweet.lockMovementX = true;
    tweet.lockMovementY = true;
    tweet.lockScalingX = true;
    tweet.lockScalingY = true;
    tweet.lockUniScaling = true;
    tweet.lockRotation = true;
    tweet.hasControls = false;
    canvas.add(tweet);
    //canvas.setActiveObject(tweet);
    fontLoader(canvas, tweet, "Helvetica Neue Light");

    // tweet image
    var tweetImage;
    fabric.Image.fromURL("assets/mockups/twitter/profile/sample-img2.jpg", function(img) {
        img.set({
            top: description.calcTextHeight() + tweet.getScaledHeight() + 338,
            left: 70,
            width: 680,
            height: 400,
            scaleX: 0.3,
            scaleY: 0.3,
            clipTo: roundedCorners.bind(true)
        });
        img.lockMovementX = true;
        img.lockMovementY = true;
        img.lockScalingX = true;
        img.lockScalingY = true;
        img.lockUniScaling = true;
        img.lockRotation = true;

        img.hasControls = false;
        tweetImage = img;
        canvas.add(img);

        // navbar
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-navbar.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("selectable", false);
            canvas.add(img);
        });
    });

    description.on("changed", function(e){
        locationIcon.set("top", description.calcTextHeight() - 28);
        location.set("top", description.calcTextHeight() + 215);
        linkIcon.set("top", description.calcTextHeight() - 28);
        website.set("top", description.calcTextHeight() + 215);
        followingCount.set("top", description.calcTextHeight() + 240);
        following.set("top", description.calcTextHeight() + 240);
        followerCount.set("top", description.calcTextHeight() + 240);
        follower.set("top", description.calcTextHeight() + 240);
        tabs.set("top", description.calcTextHeight() - 28);
        pinnedTweetIcon.set("top", description.calcTextHeight() - 23);
        pinnedTweet.set("top", description.calcTextHeight() + 300);
        userIconTweet.set("top", description.calcTextHeight() + 315);
        tweetName.set("top", description.calcTextHeight() + 315);
        tweetUsername.set("top", description.calcTextHeight() + 316);
        tweetDate.set("top", description.calcTextHeight() + 317);
        tweet.set("top", description.calcTextHeight() + 332);
        tweetImage.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 338);
        canvas.requestRenderAll();
    });
}

function fontLoader(canvas, text, font) {
    var customFont = new FontFaceObserver(font);
    customFont.load()
        .then(function() {
            text.set("fontFamily", font);
            canvas.requestRenderAll();
        }).catch(function(e) {
            console.log(e);
        });
}

function roundedCorners(ctx) {
    var rect = new fabric.Rect({
        left: 0,
        top: 0,
        rx: 20 / 0.8,
        ry: 20 / 0.8,
        width: 680,
        height: 400,
        fill: "#1da1f2"
    });

    rect._render(ctx, false);
}

function downloadMockup() {
    document.getElementById("liveCanvas").toBlob(function(blob) {
        saveAs(blob, mockUpFileName + ".png");
    });
}

// root
$(document).ready(function () {
    //drawTwitterProfile();
});