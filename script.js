const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');
btnElement.onclick = function(){

    const yourName = prompt("Plesase Enter Your Name : ");
    spanElement.textContent = yourName;
    

}
