function insdcoder(){
    document.getElementById('ins').style = "visibility: visible;";
    document.getElementById('insbody').innerHTML = `Installing Dcoder... <br><br><div class="loader"></div>`;
    setTimeout(clss , 2000);
    document.querySelector('.appmenu').innerHTML += `    <button class="amb" onclick="cdrOpen()"><img class="ambi" src="./images/dcoder.webp" height="100%" alt="" title="Dcoder" >Dcoder</button>`;
    localStorage.setItem('insdcoder' , 'true');
}
function clss()
{
    document.getElementById('ins').style = "visibility: hidden;";
}
window.addEventListener('load' , ()=>{
    if (localStorage.getItem('insdcoder') == "true")
    {
        document.querySelector('.appmenu').innerHTML += `    <button class="amb" onclick="cdrOpen()"><img class="ambi" src="./images/dcoder.webp" height="100%" alt="" title="Dcoder" >Dcoder</button>`;        
    }
});
