setInterval(ref , 1000);

function ref() {
var time = new Date;
var hour = time.getHours();
var minute = time.getMinutes();
var am = "am";

if (hour > 12)
{
    am = "pm";
    hour -= 12;
}
else if (hour <= 12)
{
    am = "am";
}
document.getElementById('time').innerHTML = hour+":"+minute+" "+am;
}