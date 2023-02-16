const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('cyan-theme');
if(document.body.classList.contains('cyan-theme')){
   this.innerText = "Dark Mode";
}
else
{
    this.innerText = "Cyan Mode";
}
});
document.querySelector('.github').addEventListener('click',function(){
    location.href = "https://github.com/chrismoon-code"
});
document.querySelector('.LinkedIn').addEventListener('click',function(){
    location.href = "https://www.linkedin.com/in/christopher-moon-55b076239/"
});