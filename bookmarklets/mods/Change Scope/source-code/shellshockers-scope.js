console.log('Shell Shockers Dark Mode --- API');
console.log('Scope Reset');
var rooted = document.querySelector(':root');
var image = 'url(https://shellshock.io/img/scope.png)'
rooted.style.setProperty('--scope', image);
alert('Your scope was set.');