function fpoint1(){
	document.getElementById("bg").src = "img/bg.jpg";
	ra.removeEventListener('click',fpoint1);
    ra.addEventListener('click',fpoint2);
    la.removeEventListener('click',fpoint1);
  	la.addEventListener('click',fpoint4);
}
function fpoint2(){
	document.getElementById("bg").src = "img/bg2.jpg";
	ra.removeEventListener('click',fpoint2);
    ra.addEventListener('click',fpoint3);
    la.removeEventListener('click',fpoint2);
  	la.addEventListener('click',fpoint1);
}
function fpoint3(){
	document.getElementById("bg").src = "img/bg3.jpg";
	ra.removeEventListener('click',fpoint3);
    ra.addEventListener('click',fpoint4);
    la.removeEventListener('click',fpoint3);
  	la.addEventListener('click',fpoint2);
}
function fpoint4(){
	document.getElementById("bg").src = "img/bg4.jpg";
	ra.removeEventListener('click',fpoint4);
  	ra.addEventListener('click',fpoint1);
  	la.removeEventListener('click',fpoint4);
  	la.addEventListener('click',fpoint3);
}
let ra=document.getElementById("ra");
ra.addEventListener('click', fpoint2);
let la=document.getElementById("la");
la.addEventListener('click', fpoint4);

