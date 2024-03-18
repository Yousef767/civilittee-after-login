let imgInput = document.getElementById('pImg');
let img = document.getElementById('img');

imgInput.addEventListener('input',()=>{
  let imgSrc = URL.createObjectURL(imgInput.files[0]);
  img.src=imgSrc;
  
})