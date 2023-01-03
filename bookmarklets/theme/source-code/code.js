//ANY DISTRIBUTION OF THIS CODE IS NOT ALLOWED

alert('You are using the bookmarklet version of our theme. We advise using the chrome extension. URL to CHROME EXTENSION: https://chrome.google.com/webstore/detail/dark-mode-a-mod-and-shell/mbbolbckjdjlfpjahlbhcodgagdpcdnf');

alert('PSST! You get extra mod settings and cool features by adding more mods from the github repository!');

//root url https://chrome.google.com/webstore/detail/dark-mode-a-mod-and-shell/mbbolbckjdjlfpjahlbhcodgagdpcdnf

//Rename root of document to Dark Mode


document.title = "Dark Mode";

// https://shellshock.io/js/vue/vue.min.2.6.10.js support coming for any extern requests.



//default styles/style.css request override

var style = document.createElement("link");
style.rel = "stylesheet";
style.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/code.css";
document.head.appendChild(style);


//default styles/game.css request override

var gamestyle = document.createElement("link");
gamestyle.rel = "stylesheet";
gamestyle.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/game.css";
document.head.appendChild(gamestyle);