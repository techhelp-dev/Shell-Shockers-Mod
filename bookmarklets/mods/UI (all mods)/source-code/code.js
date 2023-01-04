var scriptsource = document.createElement('script');
scriptsource.src='https://colesprojects.ml/SHELL_SHOCKERS_THEME/github/scriptsource.js';
document.body.appendChild(scriptsource);
alert('To access the UI, scroll to the bottom of the page. If you are in a game, return to the home (where you are right now) to change settings, ENJOY!');
document.getElementById('gameDescription').innerHTML = `

    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css"></head>
    <div class="header">
        <h1 id="logo_group">
            <i class="fa-regular fa-egg-fried" id="logo-icon"></i>
            <h1 class="slogan">Shell Shockers Dark Mode</h1>
        </h1>
    </div>
    <div class="welcome">
        <h3>This is the settings for the theme/mod. Here you can customize your game even further!</h3>
    </div>
    <div class="buttons">
        <button onclick="hideNameOnLeaderBoard()">Hide Your Name</button>
        <button onclick="showNameOnLeaderBoard()">Show Your Name</button>
    </div>
    <p>IMPORTANT!! THIS SHOW/HIDE YOUR NAME FEATURE ONLY WORKS IN FREE-FOR-ALL, ONLY USE WHEN OUR THEME IS ACTIVE!</p>
        <p>Although this looks like a useless feature, you need to know the background behind this. Me and my friends play a game where we are in the same public lobby, but he has to guess who I am. (My name and skin is different.) He can only tell through my gameplay. But since I have a pc, he would often cheat. So, I created this feature so you can hide your name on your leaderboard. (to prevent peaking)</p>
    <div class="buttons">
            <button onclick="enableTheme()">Enable Theme</button>
            <button onclick="disableTheme()">Disable Theme</button>
    </div>
    <p>These buttons allow you to disable the theme. DOES NOT SAVE! You have to do it every time the page is loaded.</p>
    <div class="buttons">
        <button onclick="changeScope()">Change Scope</button>
        <button onclick="resetScope()">Reset Scope to Default</button><br><br>
        <button onclick="shellsScope()">Set scope to Shell Shockers scope</button>
    </div>
    <p>Allows you to change your scope from our default theme.</p>
    <div class="buttons">
        <button onclick="randomName()">Generate Random Name</button>
    </div>
    <p>Generates a random Shell Shockers default username. Example: CluckPro23. Coming soon in a later update.</p>
    <div class="buttons">
        <button onclick="customizeTheme()">Make your own THEME (beta)</button>
    </div>
    <p>Allows you to make your own theme!</p>
    <div class="buttons">
        <button onclick="hideleaderboard()">Hide Leaderboard</button>
    </div>
    <p>Allows you to hide the leaderboard!</p>



<style>

* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#logo_group {
    color: black;
    padding: 16px;
}


.slogan {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.logo-icon {
    vertical-align: text-bottom;
    margin-right: 12px;
}

.header {
    align-items: center;
    display: flex;
    border-bottom: 0.5px solid #dadada;
}

.welcome {
    text-align: center;
    padding: 1px 16px;
    font-size: 17px;
}

html {
    width: 500px;
}
</style>

</html>

`
