function wal() {
    document.getElementById('setmain').innerHTML = `
    <h1>Change Wallpaper</h1><br><br>
    <img class="waldisplay" src="./images/wal2.jpg" alt="" onclick="setWal1()">
    <img class="waldisplay" src="./images/wal.jpeg" alt="" onclick="setWal2()">
    <img class="waldisplay" src="./images/live.gif" alt="" onclick="setWal3()">
    <img class="waldisplay" src="./images/wal3.jpg" alt="" onclick="setWal4()">
    <img class="waldisplay" src="./images/wal4.jpg" alt="" onclick="setWal5()">
    <img class="waldisplay" src="./images/4k1.jpg" alt="" onclick="setWal6()">
    <img class="waldisplay" src="./images/4k2.jpg" alt="" onclick="setWal7()">

    <br><br><br>
    <h1>Set Custom Wallpaper from link</h1><br><br>
    <input type="url" id="walsetter" placeholder="Type URL Here" spellcheck="false"><button class="setcus" onclick="set_cus_wal()"></button><br><br><br><br>
    `;
}
function theme() {
    document.getElementById('setmain').innerHTML = `
    <h1>System Information</h1>
    <br><br><br>
    <br>
    Name = `+os_name+`<br>
    Version = `+os_version+`<br>
    Build Name = `+os_build_name+`<br>
    Description = `+os_full+`
    `;
}
function about() {
    document.getElementById('setmain').innerHTML =`
    <h1>Change Name</h1><br>
<input id="setteri" placeholder="Type you name" spellscheck="false"><br><br><input spellcheck="false" type="password" placeholder="Set Password" id="pasw"><br><br><button onclick="setit()" class="but">Set Name</button>
    
`;
}

function setit()
{
    localStorage.setItem('name',document.getElementById('setteri').value);
    localStorage.setItem('pass',document.getElementById('pasw').value);
    document.getElementById('setteri').value = "";
    document.getElementById('pasw').value = "";
    notify('Username & Password set.', 2000);
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


function set_cus_wal()
{
    wal_url_344 = document.getElementById('walsetter').value;
    document.body.style = "background-image:url('"+wal_url_344+"')";
    notify("Set Wallpaper", 1000);
}