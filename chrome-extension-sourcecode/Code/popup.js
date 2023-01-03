window.addEventListener('load', () => {
  // Your script goes here
  const name = window.extern.generateRandomName();

});


function log() {
    console.log('Shell Shockers Dark Mode --- API');
    console.log('Popup Loaded');
}


// Called when popup.html is loaded.
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: log
    });
  });








//--------------HIDE NAME--------------//

document.getElementById('hide-name').onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: hideNameOnLeaderBoard
      });
    });
  }
  
  function hideNameOnLeaderBoard(){
    console.log('Shell Shockers Dark Mode --- API');
    console.log('Name Hidden');
    var hidename = document.createElement("link");
    hidename.rel = "stylesheet";
    hidename.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/hidden-name.css";
    document.head.appendChild(hidename);
    alert('Your name was hidden.');
  }


//--------------SHOW NAME--------------//

document.getElementById('show-name').onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: showNameOnLeaderBoard
      });
    });
  }
  
  function showNameOnLeaderBoard(){
    console.log('Shell Shockers Dark Mode --- API');
    console.log('Name Shown');
    var hidename = document.createElement("link");
    hidename.rel = "stylesheet";
    hidename.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/shown-name.css";
    document.head.appendChild(hidename);
    alert('Your name was shown.');
  }


//--------------DISABLE THEME--------------//

document.getElementById('disabletheme').onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: disableTheme
      });
    });
  }

function disableTheme(){
    console.log('Shell Shockers Dark Mode --- API');
    console.log('Theme Disabled');
    var default1 = document.createElement("link");
    default1.rel = "stylesheet";
    default1.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/defaultgame.css";
    document.head.appendChild(default1);
    var default2 = document.createElement("link");
    default2.rel = "stylesheet";
    default2.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/defaultcode.css";
    document.head.appendChild(default2);
    alert('The theme was disabled.');
  }

//--------------ENABLE THEME--------------//

document.getElementById('enabletheme').onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: enableTheme
      });
    });
  }  

  function enableTheme(){
    console.log('Shell Shockers Dark Mode --- API');
    console.log('Theme Enabled');
    var default1 = document.createElement("link");
    default1.rel = "stylesheet";
    default1.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/code.css";
    document.head.appendChild(default1);
    var default2 = document.createElement("link");
    default2.rel = "stylesheet";
    default2.href = "https://colesprojects.ml/SHELL_SHOCKERS_THEME/game.css";
    document.head.appendChild(default2);
    alert('The theme was enabled.');
  }



//--------------CHANGE SCOPE--------------//
document.getElementById('changescope').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: changeScope
    });
  });
}  


function changeScope() {
  console.log('Shell Shockers Dark Mode --- API');
  console.log('Scope Changed');
  var valueofinput = prompt('Enter the image url for the scope you want to use. WARNING: If you enter a normal or non-image URL, you will have to refresh the page, or set another image to revert the changes.');
  var image = 'url(' + valueofinput + ')';
  //alert(image);
  var rooted = document.querySelector(':root');
  rooted.style.setProperty('--scope', image);
  alert('Your scope was changed.')
}

//--------------RESET SCOPE--------------//
document.getElementById('resetscope').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: resetScope
    });
  });
}  

function resetScope() {
  console.log('Shell Shockers Dark Mode --- API');
  console.log('Scope Reset');
  var rooted = document.querySelector(':root');
  var image = 'url(https://colesprojects.ml/SHELL_SHOCKERS_THEME/logo-remake/scope.png)'
  rooted.style.setProperty('--scope', image);
  alert('Your scope was reset.');
}

//--------------RANDOM NAME GENERATOR--------------//
document.getElementById('randomname').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: randomName
    });
  });
}  

function randomName() {
  window.addEventListener('load', () => {
    // Your script goes here
    alert(name);
  });
  
  //alert('This feature is finished, but not coming to the public for another week. We are sorry, but props that you went into inspect to make the button avaliable.')
 //Fun fact, if you are here, the generate random name alert code was writen by an AI!  LOL!
}


//--------------SET SCOPE TO DEFAULT SHELL SHOCKERS SCOPE--------------//
document.getElementById('shellscope').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      function: shellsScope
    });
  });
}  

function shellsScope() {
  console.log('Shell Shockers Dark Mode --- API');
  console.log('Scope Reset');
  var rooted = document.querySelector(':root');
  var image = 'url(https://shellshock.io/img/scope.png)'
  rooted.style.setProperty('--scope', image);
  alert('Your scope was set.');
}
