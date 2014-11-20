$(function ($) {

    var language = "nothing";

    function init () {

        console.log("INIT");
        //$("#slideshow .slide").css("background-image", "url(/myimage.jpg)"); 
        $("#slideshow .slide").each(function( index ) {

            var url = "url(" + $(this).find( "img" ).attr("src") + ")";

            console.log(url);

            $(this).find("img").remove();
            $(this).css("background-image", url);
        });

        $("#languages li a").on("click",function function_name (e) {
            language = $(this).html();
            console.log(language);

            startSite();

            return false;
        });


        

    }

    function startSite(){

        $(".intro").remove();
        $("#intro").removeClass("blur");

        if(language != "nothing"){

            $("#slideshow > .slide:gt(0)").hide();

            setInterval(function() { 
              $('#slideshow > .slide:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
            },  10000);

        }
    }

    init();
});