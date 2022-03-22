function notify(text_to_show, time_to_wait_in_ms)
{
    document.getElementById('notification').innerHTML = text_to_show;
    document.getElementById('notification').style.transform = "translate(0%)";
    setTimeout(hide_notify, time_to_wait_in_ms);
    new Audio('../assets/n.mp3').play();
}
function hide_notify()
{
    document.getElementById('notification').style.transform = "translate(120%)";
}
function shutdown_now()
{
    notify("Logging Off & Shutting Down", 3000);
    setTimeout(shut_n , 3000);
}
function shut_n()
{
    new Audio('../assets/shutdown_sound.mp3').play();
    document.querySelector('.boot').style.visibility = "visible";
    document.querySelector('.boot').innerHTML = `<br><br><br><br><br><br><br><br><br>
    <h1 id="bootime">X</h1>
    <div class="strech">
    <div class="loading"></div></div>
`;
setTimeout(done_n, 4000);
}
function done_n()
{
    document.querySelector('.boot').innerHTML = "System Exit Code 1";
    window.close();
}

function browse(link)
{
    document.getElementById('bromain').innerHTML = `<iframe name="resultsss" id="result" src="`+link+`"></iframe>`;
    broOpen();
}