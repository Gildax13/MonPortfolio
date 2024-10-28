$(function () { // on attend que la page load

    // on utilise le bloc preloader existant ou on en créé un
    var preloader = $('#preloader') || $('body').append('<div id="preloader"></div>');
    
    // on s'assure que notre bloc de preloading est caché
    preloader.css({display:"none"});
    
    // on y ajoute nos images
    preloader.append('<img src="img/tourbleu.png">');
    preloader.append('<img src="img/tourrose.png">');
    
    });
$("#switch").click( function(){

    if($(this).is(':checked')){
        document.querySelector(".product-sprite").setAttribute("style","background: url(../img/tourrose.png) no-repeat center center; width: 3600%;background-size: 100%;");
        document.querySelector(".btn").setAttribute("style","background-color:#D864BC");
        document.getElementById("logoInfos").src="img/disposeptbleu.png";
        document.querySelector("#titredroit").setAttribute("style","color:#D864BC");
    }else{
        document.querySelector(".product-sprite").setAttribute("style","background: url(../img/tourbleu.png) no-repeat center center; width: 3600%;background-size: 100%; position: absolute;top: 0;height: 100%;  z-index: 1;");
        document.querySelector(".btn").setAttribute("style","background-color:#08C4F8");
        document.querySelector("#titredroit").setAttribute("style","color:#08C4F8");
        document.getElementById("logoInfos").src="img/disposeptrose.png";
    }
  
});