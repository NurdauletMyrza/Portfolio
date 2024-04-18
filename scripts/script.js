// for progress indicator in left menu
const indicators = document.getElementsByClassName("indicator");

for (var i = 0; i < indicators.length; i++) {
    var value = indicators[i].children[0].children[1].innerHTML;
    indicators[i].children[1].children[0].style.width = value;
}

// for button hover
const blackButtons = document.getElementsByClassName("black-button");

// for page mode change
const modeChanger = document.getElementById("page-mode-changer");
var isLightMode = true;

modeChanger.addEventListener("click", function() {
    if (isLightMode) {
        addStylesheet("./styles/dark-mode.css", "dark-mode-style");
    } else {
        removeStylesheet("dark-mode-style");
    }
    isLightMode = !isLightMode;
});

// var isDarkModeAdded = false;
//
// modeChanger.addEventListener("click", onClickModeChanger);
// function onClickModeChanger() {
//     isLightMode = !isLightMode;
// }
//
// modeChanger.addEventListener("mouseenter", onMouseenterModeChanger);
// function onMouseenterModeChanger() {
//     console.log("mouse enter");
//     console.log("isLightMode:" + isLightMode);
//     console.log("isDarkModeAdded:" + isDarkModeAdded);
//
//     if (isLightMode && !isDarkModeAdded) {
//         addStylesheet("./styles/dark-mode.css", "dark-mode-style");
//         isDarkModeAdded = true;
//     } else if (!isLightMode && isDarkModeAdded) {
//         removeStylesheet("dark-mode-style");
//         isDarkModeAdded = false;
//     }
//     console.log("isDarkModeAdded:" + isDarkModeAdded);
// }
//
// modeChanger.addEventListener("mouseleave", onMouseleaveModeChanger);
// function onMouseleaveModeChanger() {
//     console.log("mouse leave");
//     console.log("isLightMode:" + isLightMode);
//     console.log("isDarkModeAdded:" + isDarkModeAdded);
//
//     if (isLightMode && isDarkModeAdded) {
//         removeStylesheet("dark-mode-style");
//         isDarkModeAdded = false;
//     } else if (!isLightMode && !isDarkModeAdded) {
//         addStylesheet("./styles/dark-mode.css", "dark-mode-style");
//         isDarkModeAdded = true;
//     }
//
//     console.log("isDarkModeAdded:" + isDarkModeAdded);
// }

function addStylesheet(href, id) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    link.id = id;
    document.head.appendChild(link);
}

function removeStylesheet(id) {
    var stylesheet = document.getElementById(id);
    if (stylesheet) {
        stylesheet.parentNode.removeChild(stylesheet);
    }
}