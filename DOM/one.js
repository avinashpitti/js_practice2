document.getElementById('title').innerHTML='text is changed';

document.getElementById('title').style.color='red';

const infoElement=document.getElementsByClassName('info')[0];
infoElement.innerHTML=infoElement.innerHTML+' is a programming language';

const myDiv=document.getElementsByTagName('div')[0];

myDiv.onclick=function(){
    myDiv.style.display='none';
};

document.getElementsByTagName('div')[1].innerHTML+=' in javascript';
