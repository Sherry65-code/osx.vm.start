// if (localStorage.getItem('pass')==null)
// {
//     localStorage.setItem('pass')
// }
if (window.innerWidth <= 150)
{
 alert('Warning you are using a mobile device. Some services of this OS will not work');   
}
function setWal1() {
    document.body.style = `background-image: url('images/wal2.jpg');`;
    localStorage.setItem('wall','wal1');

}
function setWal2() {
    document.body.style = `background-image: url('images/wal.jpg');`;
    localStorage.setItem('wall','wal2');
}
document.getElementById('walsetter').addEventListener('keydown' , () =>{
document.body.style = `background-image: url('`+document.getElementById('walsetter').value+`');`;
});
function cl() {
    document.getElementById('black').style = "visibility: hidden;";
}
function start() {
    document.getElementById('black').style = "visibility: visible;";
}

function setit()
{
    localStorage.setItem('name') = document.getElementById('setteri').value;
    localStorage.setItem('pass') = document.getElementById('pasw').value;
    document.getElementById('setmain').innerHTML = "Password and Username set :)";
}
function sleeper()
{
    document.querySelector('.boot').style = "visibility: visible;";
}