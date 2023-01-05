javascript:(function()%7Bvar scriptsource %3D document.createElement('script')%3B%0Ascriptsource.src%3D'https%3A%2F%2Ftechhelpforanyone.org%2Fshell-UI%2F1.0.0%2F1.0.0.js'%3B%0Adocument.body.appendChild(scriptsource)%3B%0Aalert('To access the UI%2C scroll to the bottom of the page. If you are in a game%2C return to the home (where you are right now) to change settings%2C ENJOY!')%3B%0Adocument.getElementById('gameDescription').innerHTML %3D %60%0A%0A    <link rel%3D"stylesheet" href%3D"https%3A%2F%2Fsite-assets.fontawesome.com%2Freleases%2Fv6.2.1%2Fcss%2Fall.css"><%2Fhead>%0A    <div class%3D"header">%0A        <h1 id%3D"logo_group">%0A            <i class%3D"fa-regular fa-egg-fried" id%3D"logo-icon"><%2Fi>%0A            <h1 class%3D"slogan">Shell Shockers Dark Mode<%2Fh1>%0A        <%2Fh1>%0A    <%2Fdiv>%0A    <div class%3D"welcome">%0A        <h3>This is the settings for the theme%2Fmod. Here you can customize your game even further!<%2Fh3>%0A    <%2Fdiv>%0A    <div class%3D"buttons">%0A        <button onclick%3D"hideNameOnLeaderBoard()">Hide Your Name<%2Fbutton>%0A        <button onclick%3D"showNameOnLeaderBoard()">Show Your Name<%2Fbutton>%0A    <%2Fdiv>%0A    <p>IMPORTANT!! THIS SHOW%2FHIDE YOUR NAME FEATURE ONLY WORKS IN FREE-FOR-ALL%2C ONLY USE WHEN OUR THEME IS ACTIVE!<%2Fp>%0A        <p>Although this looks like a useless feature%2C you need to know the background behind this. Me and my friends play a game where we are in the same public lobby%2C but he has to guess who I am. (My name and skin is different.) He can only tell through my gameplay. But since I have a pc%2C he would often cheat. So%2C I created this feature so you can hide your name on your leaderboard. (to prevent peaking)<%2Fp>%0A    <div class%3D"buttons">%0A            <button onclick%3D"enableTheme()">Enable Theme<%2Fbutton>%0A            <button onclick%3D"disableTheme()">Disable Theme<%2Fbutton>%0A    <%2Fdiv>%0A    <p>These buttons allow you to disable the theme. DOES NOT SAVE! You have to do it every time the page is loaded.<%2Fp>%0A    <div class%3D"buttons">%0A        <button onclick%3D"changeScope()">Change Scope<%2Fbutton>%0A        <button onclick%3D"resetScope()">Reset Scope to Default<%2Fbutton><br><br>%0A        <button onclick%3D"shellsScope()">Set scope to Shell Shockers scope<%2Fbutton>%0A    <%2Fdiv>%0A    <p>Allows you to change your scope from our default theme.<%2Fp>%0A    <div class%3D"buttons">%0A        <button onclick%3D"randomName()">Generate Random Name<%2Fbutton>%0A    <%2Fdiv>%0A    <p>Generates a random Shell Shockers default username. Example%3A CluckPro23. Coming soon in a later update.<%2Fp>%0A    <div class%3D"buttons">%0A        <button onclick%3D"customizeTheme()">Make your own THEME (beta)<%2Fbutton>%0A    <%2Fdiv>%0A    <p>Allows you to make your own theme!<%2Fp>%0A    <div class%3D"buttons">%0A        <button onclick%3D"hideleaderboard()">Hide Leaderboard<%2Fbutton>%0A    <%2Fdiv>%0A    <p>Allows you to hide the leaderboard!<%2Fp>%0A%0A%0A%0A<style>%0A%0A* %7B%0A    font-family%3A system-ui%2C -apple-system%2C BlinkMacSystemFont%2C 'Segoe UI'%2C Roboto%2C Oxygen%2C Ubuntu%2C Cantarell%2C 'Open Sans'%2C 'Helvetica Neue'%2C sans-serif%3B%0A%7D%0A%0A%23logo_group %7B%0A    color%3A black%3B%0A    padding%3A 16px%3B%0A%7D%0A%0A%0A.slogan %7B%0A    font-family%3A system-ui%2C -apple-system%2C BlinkMacSystemFont%2C 'Segoe UI'%2C Roboto%2C Oxygen%2C Ubuntu%2C Cantarell%2C 'Open Sans'%2C 'Helvetica Neue'%2C sans-serif%3B%0A%7D%0A%0A.logo-icon %7B%0A    vertical-align%3A text-bottom%3B%0A    margin-right%3A 12px%3B%0A%7D%0A%0A.header %7B%0A    align-items%3A center%3B%0A    display%3A flex%3B%0A    border-bottom%3A 0.5px solid %23dadada%3B%0A%7D%0A%0A.welcome %7B%0A    text-align%3A center%3B%0A    padding%3A 1px 16px%3B%0A    font-size%3A 17px%3B%0A%7D%0A%0Ahtml %7B%0A    width%3A 500px%3B%0A%7D%0A<%2Fstyle>%0A%0A<%2Fhtml>%0A%0A%60%7D)()%3B