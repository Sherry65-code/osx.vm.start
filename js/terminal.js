document.getElementById('terin').addEventListener('keydown' ,givemeans , true);

function givemeans(key)
{
    
    if (key.keyCode == "13")
    {
        console.log("Success1");
        if (terin.value == "build")
        {
            document.getElementById('terans').innerHTML = `
            Name = `+os_name+`<br>
            Version = `+os_version+`<br>
            Build Name = `+os_build_name+`<br>
            Description = `+os_full+`
            `;
        }
        else if (terin.value == "~pass~")
        {
document.getElementById('terans').innerHTML = `Password : `+localStorage.getItem('pass');
        }
        else if (terin.value == "shutdown")
{
    shutdown_now();
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
