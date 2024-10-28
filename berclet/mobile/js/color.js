
 $("#switch").click( function(){

   if($(this).is(':checked')){
      document.getElementById("titre").style.color = "#d864bc";
      document.getElementById("titre2").style.color = "#d864bc";
      document.getElementById("btnpreco1").style.background = "#d864bc";
      document.getElementById("btnpreco2").style.background = "#d864bc";
      document.getElementById("icon1").style.color = "#d864bc";
      document.getElementById("icon2").style.color = "#d864bc";
      document.getElementById("icon3").style.color = "#d864bc";
      document.getElementById("icon4").style.color = "#d864bc";
      document.getElementById("machinebleu").src = "images/Rendu_rose.png"
      document.getElementById("ligne1").style.background = "#d864bc";
      document.getElementById("ligne2").style.background = "#d864bc";
      document.getElementById("ligne3").style.background = "#d864bc";
      document.getElementById("ligne4").style.background = "#d864bc";
   }else{
      document.getElementById("titre").style.color = "#08C4F8";
      document.getElementById("titre2").style.color = "#08C4F8";
      document.getElementById("btnpreco1").style.background = "#08C4F8";
      document.getElementById("btnpreco2").style.background = "#08C4F8";
      document.getElementById("icon1").style.color = "#08C4F8";
      document.getElementById("icon2").style.color = "#08C4F8";
      document.getElementById("icon3").style.color = "#08C4F8";
      document.getElementById("icon4").style.color = "#08C4F8";
      document.getElementById("machinebleu").src = "images/Rendu_bleu.png";
      document.getElementById("ligne1").style.background = "#08C4F8";
      document.getElementById("ligne2").style.background = "#08C4F8";
      document.getElementById("ligne3").style.background = "#08C4F8";
      document.getElementById("ligne4").style.background = "#08C4F8";
   }
     
});