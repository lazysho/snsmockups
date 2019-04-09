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

var myTwitterProfile = true;
var profileVerified = false;
var pinnedTweetImage = true;
var twIsFollowing = false;
var twIsFollowingYou = true;

function drawTwitterProfile() {
    var canvas = new fabric.Canvas("mockupCanvas", {
        backgroundColor: 'rgb(86, 86, 86)'
    });

    // canvas configs
    canvas.allowTouchScrolling = true;

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
    // canvas.selection = false;

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
            img.set("top", 0);
            img.set("selectable", false);
            canvas.add(img);
        });
    } else {
        // dm
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-dm.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("top", 0);
            img.set("selectable", false);
            canvas.add(img);
        });

        // notification
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-notification.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("top", 0);
            img.set("selectable", false);
            canvas.add(img);
        });

        if(twIsFollowing) {
            // following
            fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-following.png", function(img) {
                img.scaleToWidth(canvas.getWidth());
                img.set("top", 0);
                img.set("selectable", false);
                canvas.add(img);
            });
        } else {
            // follow
            fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-follow.png", function(img) {
                img.scaleToWidth(canvas.getWidth());
                img.set("top", 0);
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
        height: 100,
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

    var telecom = new fabric.Text("Globo", {
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
        img.set("top", 6.5);
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
        top: 75,
        left: 10,
        radius: 30,
        fill: "#fff"
    });
    userIconBorder.set("selectable", false);
    canvas.add(userIconBorder);

    // user icon
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-icon.png", function(img) {
        img.scaleToWidth(54).set({
            top: 79,
            left: 13.6,
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
        fill: "#14171a",
        top: 135,
        left: 16,
    });
    name.lockMovementX = true;
    name.lockMovementY = true;
    name.lockScalingX = true;
    name.lockScalingY = true;
    name.lockUniScaling = true;
    name.lockRotation = true;
    name.hasControls = false;
    name.hiddenTextArea.style.fontSize = 16;
    name.enterEditing();
    canvas.add(name);
    canvas.setActiveObject(name);
    fontLoader(canvas, name, "Helvetica Neue Medium");

    // verified
    var verifiedIcon;
    if(profileVerified) {
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-verified.png", function(img) {
            img.scaleToWidth(70);
            img.set("top", description.calcTextHeight() + 97);
            img.set("left", name.measureLine(0).width - 6);
            img.set("selectable", false);
            verifiedIcon = img;
            canvas.add(img);
        });

        name.on("changed", function(e) {
            verifiedIcon.set("left", name.measureLine(0).width - 6);
        });
    }
    
    
    // username
    var username = new fabric.IText("@username", {
        fontSize: 13,
        fontWeight: "normal",
        fill: "#14171a",
        top: 160,
        left: 16,
    });
    username.lockMovementX = true;
    username.lockMovementY = true;
    username.lockScalingX = true;
    username.lockScalingY = true;
    username.lockUniScaling = true;
    username.lockRotation = true;
    username.hasControls = false;
    canvas.add(username);
    //canvas.setActiveObject(username);
    fontLoader(canvas, username, "Helvetica Neue Light");

    // follows you
    if(!myTwitterProfile) {
        if(twIsFollowingYou) {
            var followsYouBadge = new fabric.Text(" Follows you ", {
                backgroundColor: "#e1e8ed",
                fontSize: 12,
                fontWeight: "normal",
                fill: "#14171a",
                rx: 2,
                ry: 2,
                top: 160,
                left: username.measureLine(0).width + 26,
            });
            canvas.add(followsYouBadge);
            fontLoader(canvas, followsYouBadge, "Helvetica Neue Light");

            username.on("changed", function(e) {
                followsYouBadge.set("left", username.measureLine(0).width + 26);
            });
        }
    }

    // description
    var description = new fabric.Textbox("description, all about name", {
        width: 260,
        fixedWidth: 260,
        top: 185,
        left: 16,
        fontSize: 12,
        fontWeight: "normal",
        fill: "#14171a"
    });
    description.lockMovementX = true;
    description.lockMovementY = true;
    description.lockScalingX = true;
    description.lockScalingY = true;
    description.lockUniScaling = true;
    description.lockRotation = true;
    description.hasControls = false;
    canvas.add(description);
    //canvas.setActiveObject(description);
    fontLoader(canvas, description, "Helvetica Neue Light");

    // location icon
    var locationIcon;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-location.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", description.calcTextHeight() - 48);
        img.set("left", 8);
        img.set("selectable", false);
        locationIcon = img;
        canvas.add(img);
    });

    // location
    var location = new fabric.IText("Location", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#14171a",
        top: description.calcTextHeight() + 195,
        left: 35,
    });
    location.lockMovementX = true;
    location.lockMovementY = true;
    location.lockScalingX = true;
    location.lockScalingY = true;
    location.lockUniScaling = true;
    location.lockRotation = true;

    location.hasControls = false;
    canvas.add(location);
    //canvas.setActiveObject(location);
    fontLoader(canvas, location, "Helvetica Neue Light");

    // link icon
    var linkIcon;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-link.png", function(img) {
        img.scaleToWidth(canvas.getWidth());
        img.set("top", description.calcTextHeight() - 48);
        img.set("left", location.measureLine(0).width - 50);
        img.set("selectable", false);
        linkIcon = img;
        canvas.add(img);
    });

     // link
     var website = new fabric.IText("website.com", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#1da1f2",
        top: description.calcTextHeight() + 195,
        left: location.measureLine(0).width + 83,
    });
    website.lockMovementX = true;
    website.lockMovementY = true;
    website.lockScalingX = true;
    website.lockScalingY = true;
    website.lockUniScaling = true;
    website.lockRotation = true;

    website.hasControls = false;
    canvas.add(website);
    //canvas.setActiveObject(website);
    fontLoader(canvas, website, "Helvetica Neue Light");

    location.on("changed", function(e) {
        linkIcon.set("left", location.measureLine(0).width - 50);
        website.set("left", location.measureLine(0).width + 83);
    });

    // date joined icon
    var dateJoinedIcon;
    fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-datejoined.png", function(img) {
        img.scaleToWidth(60);
        img.set("top", description.calcTextHeight() + 185);
        img.set("left", -8);
        img.set("selectable", false);
        dateJoinedIcon = img;
        canvas.add(img);
    });

    // date joined
    var dateJoined = new fabric.IText("Joined Apirl 2019", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#14171a",
        top: description.calcTextHeight() + 215,
        left: 35,
    });
    dateJoined.lockMovementX = true;
    dateJoined.lockMovementY = true;
    dateJoined.lockScalingX = true;
    dateJoined.lockScalingY = true;
    dateJoined.lockUniScaling = true;
    dateJoined.lockRotation = true;

    dateJoined.hasControls = false;
    canvas.add(dateJoined);
    //canvas.setActiveObject(dateJoined);
    fontLoader(canvas, dateJoined, "Helvetica Neue Light");

    // following count
    var followingCount = new fabric.IText("690", {
        fontSize: 12,
        fontWeight: "bold",
        fill: "#14171a",
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
        fill: "#14171a",
        top: description.calcTextHeight() + 240,
        left: followingCount.measureLine(0).width + 23,
    });
    canvas.add(following);
    fontLoader(canvas, following, "Helvetica Neue Light");

    // follower count
    var followerCount = new fabric.IText("6,969", {
        fontSize: 12,
        fontWeight: "bold",
        fill: "#14171a",
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
    //canvas.setActiveObject(followerCount);
    fontLoader(canvas, followerCount, "Helvetica Neue Medium");

    // follower
    var follower = new fabric.Text("Followers", {
        fontSize: 11,
        fontWeight: "normal",
        fill: "#14171a",
        top: description.calcTextHeight() + 240,
        left: followingCount.measureLine(0).width + following.measureLine(0).width + followerCount.measureLine(0).width + 45,
    });
    canvas.add(follower);
    fontLoader(canvas, follower, "Helvetica Neue Light");

    followingCount.on("changed", function(e) {
        following.set("left", followingCount.measureLine(0).width + 23);
        followerCount.set("left", followingCount.measureLine(0).width + following.measureLine(0).width + 36);
        follower.set("left", followingCount.measureLine(0).width + following.measureLine(0).width + followerCount.measureLine(0).width + 45);
        canvas.requestRenderAll();
    });

    followerCount.on("changed", function(e) {
        follower.set("left", followingCount.measureLine(0).width + following.measureLine(0).width + followerCount.measureLine(0).width + 45);
        canvas.requestRenderAll();
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
        fill: "#14171a",
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
        fontSize: 13,
        fontWeight: "bold",
        fill: "#14171a",
        top: description.calcTextHeight() + 315,
        left: 70,
    });
    tweetName.lockMovementX = true;
    tweetName.lockMovementY = true;
    tweetName.lockScalingX = true;
    tweetName.lockScalingY = true;
    tweetName.lockUniScaling = true;
    tweetName.lockRotation = true;

    tweetName.hasControls = false;
    canvas.add(tweetName);
    //canvas.setActiveObject(tweetName);
    fontLoader(canvas, tweetName, "Helvetica Neue Light");

    // tweet username
    var tweetUsername = new fabric.IText("@username", {
        fontSize: 13,
        fontWeight: "normal",
        fill: "#14171a",
        top: description.calcTextHeight() + 316,
        left: tweetName.measureLine(0).width + 80,
    });
    tweetUsername.lockMovementX = true;
    tweetUsername.lockMovementY = true;
    tweetUsername.lockScalingX = true;
    tweetUsername.lockScalingY = true;
    tweetUsername.lockUniScaling = true;
    tweetUsername.lockRotation = true;

    tweetUsername.hasControls = false;
    canvas.add(tweetUsername);
    fontLoader(canvas, tweetUsername, "Helvetica Neue Light");

    // tweet date
    var tweetDate = new fabric.IText("・07/04/2019", {
        fontSize: 12,
        fontWeight: "normal",
        fill: "#14171a",
        top: description.calcTextHeight() + 317,
        left: tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90,
    });
    tweetDate.lockMovementX = true;
    tweetDate.lockMovementY = true;
    tweetDate.lockScalingX = true;
    tweetDate.lockScalingY = true;
    tweetDate.lockUniScaling = true;
    tweetDate.lockRotation = true;

    tweetDate.hasControls = false;
    canvas.add(tweetDate);
    fontLoader(canvas, tweetDate, "Helvetica Neue Light");

    tweetName.on("changed", function(e){
        tweetUsername.set("left", tweetName.measureLine(0).width + 80);
        tweetDate.set("left", tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90);
    });

    tweetUsername.on("changed", function(e){
        tweetDate.set("left", tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90);
    });

    // tweet
    var tweet = new fabric.Textbox("this is name's pinned tweet. default has an image attached to it", {
        width: 210,
        fixedWidth: 210,
        fontSize: 13,
        fontWeight: "normal",
        fill: "#14171a",
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
    var replyIcon, replyCount, rtIcon, rtCount, likeIcon, likeCount, msgIcon;
    var horizontalLine01, horizontalLine02;

    var userIconTweet02, tweetName02, tweetUsername02, tweetDate02, anotherTweet;
    if(pinnedTweetImage) {
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

        tweet.on("changed", function(e) {
            tweetImage.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 338);
        });
    } else {
        // reply
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-reply.png", function(img) {
            img.scaleToWidth(80);
            img.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 314);
            img.set("left", 36);
            img.set("selectable", false);
            replyIcon = img;
            canvas.add(img);
        });

        // reply count
        replyCount = new fabric.IText("290", {
            fontSize: 11,
            fontWeight: "normal",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 339,
            left: 85,
        });
        replyCount.lockMovementX = true;
        replyCount.lockMovementY = true;
        replyCount.lockScalingX = true;
        replyCount.lockScalingY = true;
        replyCount.lockUniScaling = true;
        replyCount.lockRotation = true;

        replyCount.hasControls = false;
        canvas.add(replyCount);
        fontLoader(canvas, replyCount, "Helvetica Neue Light");

        // rt
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-rt.png", function(img) {
            img.scaleToWidth(45);
            img.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 322);
            img.set("left", 112);
            img.set("selectable", false);
            rtIcon = img;
            canvas.add(img);
        });

        // rt count
        rtCount = new fabric.IText("69K", {
            fontSize: 11,
            fontWeight: "normal",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 339,
            left: 145,
        });
        rtCount.lockMovementX = true;
        rtCount.lockMovementY = true;
        rtCount.lockScalingX = true;
        rtCount.lockScalingY = true;
        rtCount.lockUniScaling = true;
        rtCount.lockRotation = true;

        rtCount.hasControls = false;
        canvas.add(rtCount);
        fontLoader(canvas, rtCount, "Helvetica Neue Light");

        // like
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-like.png", function(img) {
            img.scaleToWidth(75);
            img.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 310);
            img.set("left", 156);
            img.set("selectable", false);
            likeIcon = img;
            canvas.add(img);
        });

        // like count
        likeCount = new fabric.IText("4.2K", {
            fontSize: 11,
            fontWeight: "normal",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 339,
            left: 202,
        });
        likeCount.lockMovementX = true;
        likeCount.lockMovementY = true;
        likeCount.lockScalingX = true;
        likeCount.lockScalingY = true;
        likeCount.lockUniScaling = true;
        likeCount.lockRotation = true;

        likeCount.hasControls = false;
        canvas.add(likeCount);
        fontLoader(canvas, likeCount, "Helvetica Neue Light");

        // msg
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-msg.png", function(img) {
            img.scaleToWidth(80);
            img.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 306);
            img.set("left", 220);
            img.set("selectable", false);
            msgIcon = img;
            canvas.add(img);
        });

        fabric.Image.fromURL("assets/mockups/twitter/profile/horizontal-separator.png", function(img) {
            img.scaleToWidth(canvas.getWidth() + 100);
            img.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 322);
            img.set("left", -30);
            img.set("selectable", false);
            horizontalLine01 = img;
            canvas.add(img);
        });

        fabric.Image.fromURL("assets/mockups/twitter/profile/horizontal-separator.png", function(img) {
            img.scaleToWidth(canvas.getWidth() + 100);
            img.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 332);
            img.set("left", -30);
            img.set("selectable", false);
            horizontalLine02 = img;
            canvas.add(img);
        });

        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-icon.png", function(img) {
            img.scaleToWidth(45).set({
                top: description.calcTextHeight() + tweet.getScaledHeight() + 382,
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
            userIconTweet02 = img;
            canvas.add(img);
        });

        tweetName02 = new fabric.IText("name", {
            fontSize: 13,
            fontWeight: "bold",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 382,
            left: 70,
        });
        tweetName02.lockMovementX = true;
        tweetName02.lockMovementY = true;
        tweetName02.lockScalingX = true;
        tweetName02.lockScalingY = true;
        tweetName02.lockUniScaling = true;
        tweetName02.lockRotation = true;

        tweetName02.hasControls = false;
        canvas.add(tweetName02);
        fontLoader(canvas, tweetName02, "Helvetica Neue Light");
    
        // tweet username
        tweetUsername02 = new fabric.IText("@username", {
            fontSize: 13,
            fontWeight: "normal",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 382,
            left: tweetName.measureLine(0).width + 80,
        });
        tweetUsername02.lockMovementX = true;
        tweetUsername02.lockMovementY = true;
        tweetUsername02.lockScalingX = true;
        tweetUsername02.lockScalingY = true;
        tweetUsername02.lockUniScaling = true;
        tweetUsername02.lockRotation = true;

        tweetUsername02.hasControls = false;
        canvas.add(tweetUsername02);
        fontLoader(canvas, tweetUsername02, "Helvetica Neue Light");
    
        // tweet date
        tweetDate02 = new fabric.IText("・3h", {
            fontSize: 12,
            fontWeight: "normal",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 382,
            left: tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90,
        });
        tweetDate02.lockMovementX = true;
        tweetDate02.lockMovementY = true;
        tweetDate02.lockScalingX = true;
        tweetDate02.lockScalingY = true;
        tweetDate02.lockUniScaling = true;
        tweetDate02.lockRotation = true;

        tweetDate02.hasControls = false;
        canvas.add(tweetDate02);
        fontLoader(canvas, tweetDate02, "Helvetica Neue Light");

        tweetName02.on("changed", function(e){
            tweetUsername02.set("left", tweetName.measureLine(0).width + 80);
            tweetDate02.set("left", tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90);
        });
    
        tweetUsername02.on("changed", function(e){
            tweetDate02.set("left", tweetName.measureLine(0).width + tweetUsername.measureLine(0).width + 90);
        });
    
        // tweet
        anotherTweet = new fabric.Textbox("this is name's normal tweet. this will show if you opt for a pinned tweet without image", {
            width: 210,
            fixedWidth: 210,
            fontSize: 13,
            fontWeight: "normal",
            fill: "#14171a",
            top: description.calcTextHeight() + tweet.getScaledHeight() + 398,
            left: 70,
        });
        anotherTweet.lockMovementX = true;
        anotherTweet.lockMovementY = true;
        anotherTweet.lockScalingX = true;
        anotherTweet.lockScalingY = true;
        anotherTweet.lockUniScaling = true;
        anotherTweet.lockRotation = true;
        anotherTweet.hasControls = false;
        canvas.add(anotherTweet);
        //canvas.setActiveObject(anotherTweet);
        fontLoader(canvas, anotherTweet, "Helvetica Neue Light");
    
        tweet.on("changed", function(e) {
            replyIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 314);
            replyCount.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 339);
            rtIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 322);
            rtCount.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 339);
            likeIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 310);
            likeCount.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 339);
            msgIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 306);
            horizontalLine01.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 322);
            horizontalLine02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 332);
            userIconTweet02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            tweetName02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            tweetUsername02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            tweetDate02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            anotherTweet.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 398);
        });

        // navbar
        fabric.Image.fromURL("assets/mockups/twitter/profile/tw-mobile-navbar.png", function(img) {
            img.scaleToWidth(canvas.getWidth());
            img.set("selectable", false);
            canvas.add(img);
        });
    }

    description.on("changed", function(e){
        locationIcon.set("top", description.calcTextHeight() - 48);
        location.set("top", description.calcTextHeight() + 195);
        linkIcon.set("top", description.calcTextHeight() - 48);
        website.set("top", description.calcTextHeight() + 195);
        dateJoinedIcon.set("top", description.calcTextHeight() + 185);
        dateJoined.set("top", description.calcTextHeight() + 215);
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
        tweet.set("top", description.calcTextHeight() + 331);
        
        if(pinnedTweetImage) {
            tweetImage.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 338);
        } else {
            replyIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 314);
            replyCount.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 339);
            rtIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 322);
            rtCount.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 339);
            likeIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 310);
            likeCount.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 339);
            msgIcon.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 306);
            horizontalLine01.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 322);
            horizontalLine02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 332);
            userIconTweet02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            tweetName02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            tweetUsername02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            tweetDate02.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 382);
            anotherTweet.set("top", description.calcTextHeight() + tweet.getScaledHeight() + 398);
        }
        
        canvas.requestRenderAll();
    });
}

function responsiveCanvas(canvas) {
    console.log(window.innerWidth > 0);
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    var widthRatio = 300 / width;
    var heightRatio = 543 / height;
    canvas.setWidth(canvas.getWidth() * widthRatio);
    canvas.setHeight(canvas.getHeight() * heightRatio);
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