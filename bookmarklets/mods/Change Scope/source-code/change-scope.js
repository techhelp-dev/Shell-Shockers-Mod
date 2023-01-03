console.log('Shell Shockers Dark Mode --- API');
console.log('Scope Changed');
var valueofinput = prompt('Enter the image url for the scope you want to use. WARNING: If you enter a normal or non-image URL, you will have to refresh the page, or set another image to revert the changes.');
var image = 'url(' + valueofinput + ')';
var rooted = document.querySelector(':root');
rooted.style.setProperty('--scope', image);
alert('Your scope was changed.')