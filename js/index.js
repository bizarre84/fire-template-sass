document.addEventListener('DOMContentLoaded', function(){
  /*add chevron*/
  let chevron = document.querySelectorAll('a.root-item');
  let count = 0;
  chevron.forEach(element => {
    count++;
    element.insertAdjacentHTML("beforeend", '<i class="fas fa-chevron-down"></i>');
    console.log(element);
  }); 
  console.log('Найдено - ' + count);
  /* /add chevron */

  /* mobile show and hide second block menu */
  let secondBlock = document.querySelectorAll('#vertical-multilevel-menu li');
  secondBlock.onclick = function(e){
    //e.preventDefault();
    this.classList.toogle("is-selected");
  }
  /* /mobile show and hide second block menu */
});

function openMenu(){
  let a = document.getElementsByClassName('icon')[0];
  let x = document.getElementById('left-menu-container');
  if(x.style.display==="block") {
    x.style.display="none";
    a.setAttribute("class", "icon");
  } else {
    x.style.display="block";
    a.setAttribute("class", "icon activ-link");
  }
}