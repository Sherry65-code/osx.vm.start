document.getElementById('terin').addEventListener('keydown' ,givemeans , true);

function givemeans(key)
{
    
    if (key.keyCode == "13")
    {
        console.log("Success1");
        if (terin.value == "build")
        {
document.getElementById('terans').innerHTML = `Terminal Version: 1.4
<br>System Name: Invento OSX<br>Version: 1.5<br>Device: Invento VM 1.1
`;
        }
        else if (terin.value == "~pass~")
        {
document.getElementById('terans').innerHTML = `Password : `+localStorage.getItem('pass');
        }
        else{
            document.getElementById("terans").innerHTML = `'`+terin.value+`' was an unknown command. <br>Go to <button target="resultsss" href="https://sherry65-code.github.io/osx.org">This Website</button> For more info.`;
        }
    }
}
function loadme()

{
    setTimeout(1000 , broOpen());
    document.getElementById('results').src = "https://sherry65-code.github.io/osx.org/";
}
