var url = "/accueil.html";
    var delay = "3000";
    window.onload = function ()
    {
        setTimeout(GoToURL, delay);
    }
    function GoToURL()
    {
         window.location.replace(url);
    }