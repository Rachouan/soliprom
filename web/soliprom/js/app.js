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

        $(".projects li").on("click",function(e) {
            $(".detail").removeClass("hide");
            $(".detail").addClass("show");
            scrollFunction(false);

            $(".detail #filter").on("click",function (e) {
                $(".detail").removeClass("show");
                $(".detail").addClass("hide");
                scrollFunction(true);
            })
             
        });

        

    }
    function scrollFunction (scroll) {
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
          ];


          if(scroll == false){
              var html = jQuery('html');
              html.data('scroll-position', scrollPosition);
              html.data('previous-overflow', html.css('overflow'));
              html.css('overflow', 'hidden');
              window.scrollTo(scrollPosition[0], scrollPosition[1]);

          }else{

            var html = jQuery('html');
            var scrollPosition = html.data('scroll-position');
            html.css('overflow', html.data('previous-overflow'));
            window.scrollTo(scrollPosition[0], scrollPosition[1]);
          }
         
    }

    function startSite(){

        $(".intro").remove();
        $("#intro").removeClass("blur");
        $("body").removeClass("overflow");

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