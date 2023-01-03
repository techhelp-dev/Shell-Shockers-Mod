//log api
console.log('Shell Shockers Dark Mode --- API');
console.log('Scope Reset');
//decalire rooted
var rooted = document.querySelector(':root');
var image = 'url(https://colesprojects.ml/SHELL_SHOCKERS_THEME/logo-remake/scope.png)'
rooted.style.setProperty('--scope', image);
//alert progress
alert('Your scope was reset.');