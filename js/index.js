document.addEventListener('DOMContentLoaded', function(){
  //add chevron
  let chevron = document.querySelectorAll('#vertical-multilevel-menu > li');
  let count = 0;
  chevron.forEach(element => {
    let sub = element.querySelector('ul');
    if(sub !== null){
      let linkForSubMenu = element.querySelector('a.root-item');
      linkForSubMenu.insertAdjacentHTML("beforeend", '<i class="fas fa-chevron-down"></i>');
      let subMenuBox = element.querySelector('ul');
      subMenuBox.setAttribute("class", "root-item container--is--not--visible");
      //show and hide subMenuBox
      linkForSubMenu.addEventListener('click', function(e){
        e.preventDefault();
        let classElement = subMenuBox.getAttribute("class");
        if(classElement=="root-item container--is--not--visible") {
          subMenuBox.setAttribute("class", "root-item");
        }
        else {
          subMenuBox.setAttribute("class", "root-item container--is--not--visible");
        }
      });
    }
  }); 
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