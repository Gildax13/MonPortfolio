$("#switch").click( function(){

    if($(this).is(':checked')){
       // document.querySelector(".btn").setAttribute("style","background-color:#DC84D0"); 
        document.getElementById("imgSlide").src="/img/AnimationFaderRose.gif";
        document.getElementById("machine").src="/img/specs_rose4k.png";
        document.getElementById("imgBtn").src="img/AnimationFaderRosePulse.gif";
     
    }else{
        //document.querySelector(".btn").setAttribute("style","background-color:#08C4F8");
        document.getElementById("imgSlide").src="/img/AnimationFaderBleu.gif";
        document.getElementById("machine").src="/img/specs_bleu4k.png";
        document.getElementById("imgBtn").src="img/AnimationFaderBleuPulse.gif";
    }
      
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});