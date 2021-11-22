function wal() {
    document.getElementById('setmain').innerHTML = `
    <h1>Change Wallpaper</h1><br><br>
    <img src="./images/wal2.jpg" height="250px" style="border-radius: 18px;" alt="" onclick="setWal1()">
    <img src="./images/wal.jpg" height="250px" style="border-radius: 18px;" alt="" onclick="setWal2()">
    <img src="./images/live.gif" height="250px" style="border-radius: 18px;" alt="" onclick="setWal3()">
        <img src="./images/wal3.jpg" height="250px" style="border-radius: 18px;" alt="" onclick="setWal4()">
    <img src="./images/wal4.jpg" height="250px" style="border-radius: 18px;" alt="" onclick="setWal5()">
    <img src="./images/4k1.jpg" height="250px" style="border-radius: 18px;" alt="" onclick="setWal6()">
    <img src="./images/4k2.jpg" height="250px" style="border-radius: 18px;" alt="" onclick="setWal7()">

    <br><br><br>
    <h1>Set Custom Wallpaper from link</h1><br><br>
    <input type="url" id="walsetter" placeholder="Type URL Here" spellcheck="false">
    `;
}
function theme() {
    document.getElementById('setmain').innerHTML = `
    <h1>System Information</h1>
    <br><br><br>
    Health = 100%
    <br>
    Build = Invento 1.0.5 OS X (Home)<br>
    Platform = Invento Virtual Machine (Non - Commercial)
    `;
}
function about() {
    document.getElementById('setmain').innerHTML =`
    <h1>Change Name</h1><br>
<input id="setteri" placeholder="Type you name"><br><br><input type="text" placeholder="Set Password" id="pasw"><br><br><button onclick="setit()" class="but">Set Name</button>
    
`;
}

function setit()
{
    localStorage.setItem('name',document.getElementById('setteri').value);
    localStorage.setItem('pass',document.getElementById('pasw').value);
    document.getElementById('setmain').innerHTML = "Password and Username set :)";
}
function task() {
    document.getElementById('setmain').innerHTML = `
    <h1>Taskbar Settings</h1>
    <br><br>
    <h3>Change taskbar color</h3><br>
    <input type="color" id="color">
    <button class="button" onclick="color()">Set</button><br><br>
    <br><h3>Change taskbar type</h3><br>
    <button class="button" onclick="float()">Float</button><br><br>
    <button class="button" onclick="fixed()">Fixed</button><br><br>
    `;
}
document.getElementById('colorbut').addEventListener('click' , color , false);
function color()
{
    document.querySelector('.taskbar').style = "background-color:"+document.getElementById('color').value+";";
}
function float()
{
    document.querySelector('.taskbar').style = `
    background-color: rgba(53, 53, 53, 0.541);    position: absolute;
    bottom: 10px;
    left: 25%;
    right: 25%;
    /* padding-block-start: 5px;
    padding-block-end: 5px; */
    z-index: 20;
    border-radius: 10px;
    padding-inline-start: 10px;
    text-align: center;
    z-index: 30000;
    padding: 10px;
    `;
}
function fixed()
{
    document.querySelector('.taskbar').style = `
    background-color: rgba(53, 53, 53, 0.541);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;`;
}

function setWal3()
{
    document.body.style = `background-image: url('./images/live.gif');`;
    localStorage.setItem('wall','wal3');
}function setWal4()
{
    document.body.style = `background-image: url('./images/wal3.jpg');`;
    localStorage.setItem('wall' , 'wal4');
}function setWal5()
{
    document.body.style = `background-image: url('./images/wal4.jpg');`;
    localStorage.setItem('wall','wal5')
}
function setWal6()
{
    document.body.style = `background-image: url('./images/4k1.jpg');`;
    localStorage.setItem('wall','wal6');
}
function setWal7()
{
    document.body.style = `background-image: url('./images/4k2.jpg');`;
    localStorage.setItem('wall','wal7');
}

