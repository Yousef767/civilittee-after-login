
let notAddedCont = document.querySelector(".notAdded");
let alreadyAddedCont = document.querySelector(".alreadyDow");

function addSub(e){
  let subName = e.lastElementChild.innerHTML;
  alreadyAddedCont.innerHTML += `
  <div class="sItem" onclick="removeSub(this)">
      <i class="fa-light fa-circle-check"></i>
      <i class="fa-light fa-circle-xmark"></i>
      <span>${subName}</span>
  </div>
  `;
  e.remove();
}

function removeSub(e){
  let subName = e.lastElementChild.innerHTML;
  notAddedCont.innerHTML += `
  <div class="sItem" onclick="addSub(this)">
      <i class="fa-light fa-circle-check"></i>
      <i class="fa-light fa-circle-xmark"></i>
      <span>${subName}</span>
  </div>
  `;
  e.remove();
}





