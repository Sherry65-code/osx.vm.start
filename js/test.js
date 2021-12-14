/* <div id="test" class="window">
<div class="header" id="testheader"><div class="title">Terminal</div>
<button class="close" onclick="testClose()">
</button>
<button class="min" onclick="testMax()">
</button></div>
<div class="main">

</div>
</div>
</div> */
var apptitle = "Untitled";
function run_custom_code()
{
    apptitle = document.querySelector('.fly2').value;

    document.querySelector('.leftmain').innerHTML = 
    `<div id="test" class="window" style="visibility: visible;">
    <div class="header" id="testheader"><div class="title">`+apptitle+`</div>
    <button class="close" onclick="testClose()">
    </button>
    <button class="min" onclick="testMax()">
    </button></div>
    <div class="main">`+document.getElementById('codemain').innerText+`</div></div>
    </div> `
    ;
}
