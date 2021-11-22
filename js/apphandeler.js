var sett = "min";
var not = "min";
var bro = "min";
var cdr = "min";
var ter = "min";
var str = "min";
// visibility: visible;
function setClose() {
    document.getElementById('set').style = "visibility: hidden;";
    console.log('max close');
}
function setMax() {
    if (sett == "min"){
        sett = "max";
    document.getElementById('set').style = "visibility: visible;border-radius: 0; visibility: visible;width: 100%;height: 100%;top:0;left: 0;";
    console.log('before value = min')
    }
else if (sett == "max"){
        sett = "min";
        document.getElementById('set').style = "visibility: visible;";
        console.log('before value = max');
    }
console.log('max set')
}
function setOpen() {
    document.getElementById('set').style = "visibility: visible;";
}

function notClose() {
    document.getElementById('not').style = "visibility: hidden;";
}
function notOpen() {
    document.getElementById('not').style = "visibility: visible;";

}
function notMax() {
    if (not == "min"){
        not = "max";
    document.getElementById('not').style = "visibility: visible;width: "+window.innerWidth+"px;height: 100%;left:0;top:0;border-radius: 0;";
}
else if (not == "max"){
    not = "min";
    document.getElementById('not').style = "visibility: visible;border-radius: 18px;";
}

}

function broOpen() {
    document.getElementById('bro').style = "visibility: visible;";
}
function broClose() {
    document.getElementById('bro').style = "visibility: hidden;";
}
function broMax()
{
    if (bro == "min"){
        bro = "max";
    document.getElementById('bro').style = "visibility: visible;width: "+window.innerWidth+"px;height: 100%;left:0;top:0;border-radius: 0;";
}
else if (bro == "max"){
    bro = "min";
    document.getElementById('bro').style = "visibility: visible;border-radius: 18px;";
}
}

function cdrClose()
{
    document.querySelector('#dcoder').style = "visibility: hidden;";
}
function cdrOpen()
{
    document.querySelector('#dcoder').style = "visibility: visible;";
}
function cdrMax()
{
    if (cdr == "min"){
        cdr = "max";
    document.getElementById('dcoder').style = "visibility: visible;width: "+window.innerWidth+"px;height: 100%;left:0;top:0;border-radius: 0;";
}
else if (cdr == "max"){
    cdr = "min";
    document.getElementById('dcoder').style = "visibility: visible;border-radius: 18px;";
} 
}
function terClose()
{
    document.getElementById('ter').style = "visibility: hidden;";
}function terOpen()
{
    document.getElementById('ter').style = "visibility: visible;";
}
function terMax()
{
    if (ter == "min"){
        ter = "max";
    document.getElementById('ter').style = "visibility: visible;width: "+window.innerWidth+"px;height: 100%;left:0;top:0;border-radius: 0;";
}
else if (ter == "max"){
    ter = "min";
    document.getElementById('ter').style = "visibility: visible;border-radius: 18px;";
} 
}
function strClose()
{
    document.getElementById('str').style = "visibility: hidden;";
}function strOpen()
{
    document.getElementById('str').style = "visibility: visible;";
}
function strMax()
{
    if (str == "min"){
        str = "max";
    document.getElementById('str').style = "visibility: visible;width: "+window.innerWidth+"px;height: 100%;left:0;top:0;border-radius: 0;";
}
else if (str == "max"){
    str = "min";
    document.getElementById('str').style = "visibility: visible;border-radius: 18px;";
} 
}