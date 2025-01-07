
 

    $(document).ready(function () {
        $(".navbar-nav .nav-item .nav-link").click(function () {
            $(".navbar-nav .nav-item .nav-link").removeClass("active");
            $(this).addClass("active");
           
        });
    });




/*tabs*/

    $(document).ready(function () {

        $(".tab_content").hide();
        $(".tab_content:first").show();
    
        $(".tabs li").click(function () {
            $(".tabs li").removeClass("active");
            $(this).addClass("active");
            $(".tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn();
        });
    });
//how to create nested tabs ?