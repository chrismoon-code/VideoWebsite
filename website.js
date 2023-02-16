'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
const classname = document.body.className;
if(classname = "light-theme"){
   this.textContent = "Dark";
}
else
{
    this.textContent = "Light"
}
console.log('current classname' + classname);
});