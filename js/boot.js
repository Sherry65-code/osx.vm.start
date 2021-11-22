let version = '1.3';
window.addEventListener('load' , ()=>{
var element = document.body;
if (localStorage.getItem('wall') == null)
{
    document.body.style = "background-image:url('images/wal2.jpg');";
}
else if (localStorage.getItem('wall') == "wal1")
{
    document.body.style = "background-image:url('images/wal2.jpg');";
}
else if (localStorage.getItem('wall') == "wal2")
{
    document.body.style = "background-image:url('images/wal.jpg');";
}
else if (localStorage.getItem('wall') == "wal3")
{
    document.body.style = "background-image:url('images/live.gif');";
}
else if (localStorage.getItem('wall') == "wal4")
{
    document.body.style = "background-image:url('images/wal3.jpg');";
}
else if (localStorage.getItem('wall') == "wal5")
{
    document.body.style = "background-image:url('images/wal4.jpg');";
}
else if (localStorage.getItem('wall') == "wal6")
{
    document.body.style = "background-image:url('images/4k1.jpg');";
}
else if (localStorage.getItem('wall') == "wal7")
{
    document.body.style = "background-image:url('images/4k2.jpg');";
}
else
{
    document.body.style = "background-image:url('images/4k2.jpg');";
}
element.requestFullscreen()
	.then(function() {
console.log("In Fullscreen");
    })
    .catch(function(error) {
    console.log("Failed to enter fullscreen");
     });
    man();
});
document.getElementById('nameer').innerText = localStorage.getItem('name');

function man() {
    document.querySelector('.boot').innerHTML = `    <br><br><br><br><br>
        <img src="./images/user.png" width="180px" alt=""><br><br><h3 id="nameer">`+localStorage.getItem('name')+`</h3><br><br>
    <br><br>
    <input type="password" placeholder="Type Password" id="pass"><button class="s" onclick="unlockr()"><img height="13" src="images/next.svg"></button>`;
}
function unlockr() {
    if (document.getElementById('pass').value == localStorage.getItem('pass'))
    {
        document.querySelector('.boot').style = "visibility: hidden;";
    }
    else if (localStorage.getItem('pass') == null)
    {
        document.querySelector('.boot').style = "visibility: hidden;";        
    }
    else
    {
        document.getElementById('pass').style = "background-color: red;";
    }
}
document.getElementById('ver').innerHTML = version;
document.getElementById('pass').addEventListener('keydown' , modr , true);
function modr(key)
{
    if (key.keyCode == "13")
    {
        if (document.getElementById('pass').value == localStorage.getItem('pass'))
        {
            document.querySelector('.boot').style = "visibility: hidden;";
        }
        else if (localStorage.getItem('pass') == null)
        {
            document.querySelector('.boot').style = "visibility: hidden;";        
        }
        else
        {
            document.getElementById('pass').style = "background-color: red;";
        }    }
}
if (localStorage.getItem('name') == "null" || localStorage.getItem('name') == null)
{
    document.getElementById('nameer').innerHTML = "User";
}