const { selectedFile } = require('/post.js')

var img = document.createElement('img');
img.src = 'fb.png'

window.onload = function() {
        document.body.appendChild(img)
}