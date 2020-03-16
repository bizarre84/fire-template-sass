function openMenu(){
  let a = document.getElementsByClassName('icon')[0];
  let x = document.getElementById('left-menu-container');
  console.log('Текущий div - '+x.style.display);
  if(x.style.display==="block") {
    console.log('block div true - '+x.style.display);
    x.style.display="none";
    a.setAttribute("class", "icon");
    console.log('Поменяли div на - '+x.style.display);
  } else {
    console.log('block div false - '+x.style.display);
    x.style.display="block";
    a.setAttribute("class", "icon activ-link");
    console.log('Поменяли div на - '+x.style.display);
  }
}