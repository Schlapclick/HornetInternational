const fileInput = document.getElementById('input');
var selectedFile
fileInput.onchange = () => {
  selectedFile = fileInput.files[0];
  console.log(selectedFile);
}

module.exports = { selectedFile }