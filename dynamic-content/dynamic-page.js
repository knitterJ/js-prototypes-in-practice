$(function () {

    var newHash = "",
        $mainContent = $("#main-content"),
        $pageWrap = $("#page-wrap"),
        baseHeight = 0,
        $el;

    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();

    //takes everything between nav tag and disables clicking. Nice first example of how to use delegate 
    $("nav").delegate("a", "click", function () {
        window.location.hash = $(this).attr("href");
        return false;
    });
    //Attach the event (called hashchange) to the window itself 
    //This way we're gonna do something, when there's a hashchange (hashchange itself is a function) on a window. 
    $(window).bind('hashchange', function () {

        // $(window).bind('hashchange', function () {
        //     console.log('wow! I can trigger the even OnHashChange');
        // });

        //store the link in new variable and don't take # in #index.html
        newHash = window.location.hash.substring(1);

        if (newHash) {
            // $(selector).fadeOut(speed,easing,callback - A function to be executed after the fadeOut() method is completed)
            $mainContent
                .find("#guts")
                .fadeOut(200, function () {
                    $mainContent.hide()
                        .load(newHash + " #guts", function () {
                            $mainContent.fadeIn(200, function () {
                                $pageWrap.animate({
                                    //animate() changes an element from one state to another with CSS styles.
                                    height: baseHeight + $mainContent.height() + "px"
                                });
                            });

                            //??
                            // $("nav a").removeClass("current");
                            // $("nav a[href=" + newHash + "]").addClass("current");
                        });
                });
        };

    });

    //make sure that hashchange gets triggered, only once the page is ready 
    $(window).trigger('hashchange');

});
