$(document).ready(function(){

    // Start JS Codes

    // Navbar
    $(window).on("scroll",function(){
        if( this.scrollY > 20 ){
            $(".header").css({
                "background-color":"#13131a",
                "transition":"all .4s ease",
                "box-shadow":"#d3ad7f 0px 1px 6px"
            });
        }
    });
    // Start Search
    $(".img-search").on("click",function(){
        $(".search  input").slideToggle(1000);
    });
    // End search

    // start buying
    $(".img-buying").on("click",function(){
        $(".buying").slideToggle(1000);
    });
    // End buying
 
    // Start menu-mob

    // menu tools
    $(".tools .menu-mob").on("click",function(){
        $(".header .menu-mobile").slideDown(1000);
        $(".tools .menu-mob").css("display","none");
        $(".tools .mul-mob").css("display","inline-block");
    });
    // mul tools
    $(".tools .mul-mob").on("click",function(){
        $(".header .menu-mobile").slideUp(1000);
        $(".tools .menu-mob").css("display","inline-block");
        $(".tools .mul-mob").css("display","none");
    });
    // click => up

    $(".header .menu-mobile nav ul li a").on("click",function(){
        $(".header .menu-mobile").slideUp(1000);
        $(".tools .mul-mob").css("display","none");
        $(".tools .menu-mob").css("display","inline-block");
    });

    // End menu-mob

    // Start menu
    // 1
    $(".parent-menu .menu-child1 button").on("click",function(){
        $(".buying").html($(".buying-shap1"));
        $(".buying-shap1").css({
            "transition":"all .3s",
            "display":"grid"
        });
    });
    $(".buying-shap1 button").on("click",function(){
        $(".buying-shap1").css("display","none");
    });
    // 2
    $(".parent-menu .menu-child2 button").on("click",function(){
        $(".buying").html($(".buying-shap2"));
        $(".buying-shap2").css({
            "transition":"all .3s",
            "display":"grid"
        });
    });
    $(".buying-shap2 button").on("click",function(){
        $(".buying-shap2").css("display","none");
    });
    // 3 
    $(".parent-menu .menu-child3 button").on("click",function(){
        $(".buying").html($(".buying-shap3"));
        $(".buying-shap3").css({
            "transition":"all .3s",
            "display":"grid"
        });
    });
    $(".buying-shap3 button").on("click",function(){
        $(".buying-shap3").css("display","none");
    });
    // 4
    $(".parent-menu .menu-child4 button").on("click",function(){
        $(".buying").html($(".buying-shap4"));
        $(".buying-shap4").css({
            "transition":"all .3s",
            "display":"grid"
        });
    });
    $(".buying-shap4 button").on("click",function(){
        $(".buying-shap4").css("display","none");
    });
    // 5
    $(".parent-menu .menu-child5 button").on("click",function(){
        $(".buying").html($(".buying-shap5"));
        $(".buying-shap5").css({
            "transition":"all .3s",
            "display":"grid"
        });
    });
    $(".buying-shap5 button").on("click",function(){
        $(".buying-shap5").css("display","none");
    });
    // 6
    $(".parent-menu .menu-child6 button").on("click",function(){
        $(".buying").html($(".buying-shap6"));
        $(".buying-shap6").css({
            "transition":"all .3s",
            "display":"grid"
        });
    });
    $(".buying-shap6 button").on("click",function(){
        $(".buying-shap6").css("display","none");
    });
    //hover

    // 1
    $(".parent-menu .menu-child1").hover(function(){
        $(".parent-menu .menu-child1 img").css({
            "transform":"rotate(360deg)",
            "transition":"all .3s"
        });
    },function(){
        $(".parent-menu .menu-child1 img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s"
        });
    });
    // 2
    $(".parent-menu .menu-child2").hover(function(){
        $(".parent-menu .menu-child2 img").css({
            "transform":"rotate(360deg)",
            "transition":"all .3s"
        });
    },function(){
        $(".parent-menu .menu-child2 img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s"
        });
    });
    // 3
    $(".parent-menu .menu-child3").hover(function(){
        $(".parent-menu .menu-child3 img").css({
            "transform":"rotate(360deg)",
            "transition":"all .3s"
        });
    },function(){
        $(".parent-menu .menu-child3 img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s"
        });
    });
    // 4
    $(".parent-menu .menu-child4").hover(function(){
        $(".parent-menu .menu-child4 img").css({
            "transform":"rotate(360deg)",
            "transition":"all .3s"
        });
    },function(){
        $(".parent-menu .menu-child4 img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s"
        });
    });
    // 5
    $(".parent-menu .menu-child5").hover(function(){
        $(".parent-menu .menu-child5 img").css({
            "transform":"rotate(360deg)",
            "transition":"all .3s"
        });
    },function(){
        $(".parent-menu .menu-child5 img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s"
        });
    });
    // 6
    $(".parent-menu .menu-child6").hover(function(){
        $(".parent-menu .menu-child6 img").css({
            "transform":"rotate(360deg)",
            "transition":"all .3s"
        });
    },function(){
        $(".parent-menu .menu-child6 img").css({
            "transform":"rotate(0deg)",
            "transition":"all .3s"
        });
    });
    // End menu

    // Start Products

    // 7
    $(".product-parent .Product-child1 .img-product .shoop").on("click",function(){
        $(".buying").html($(".buying-shap7"));
        $(".buying-shap7").css({
            "display":"grid"
        });
        $(".product-parent .Product-child1 .img-product .shoop").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // heart
    $(".product-parent .Product-child1 .img-product .heart").on("click",function(){
        $(".product-parent .Product-child1 .img-product .heart").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // eye
    $(".product-parent .Product-child1 .img-product .eye").on("click",function(){
        $(".product-parent .Product-child1 .img-product .eye").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // remove from card btn
    $(".buying-shap7 button").on("click",function(){
        $(".buying-shap7").css("display","none");
        $(".product-parent .Product-child1 .img-product .shoop").css({
            "backgroundColor":"#212529"
        });
    })
    // 8
    $(".product-parent .Product-child2 .img-product .shoop").on("click",function(){
        $(".buying").html($(".buying-shap8"));
        $(".buying-shap8").css({
            "display":"grid"
        });
        $(".product-parent .Product-child2 .img-product .shoop").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // heart
    $(".product-parent .Product-child2 .img-product .heart").on("click",function(){
        $(".product-parent .Product-child2 .img-product .heart").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // eye
    $(".product-parent .Product-child2 .img-product .eye").on("click",function(){
        $(".product-parent .Product-child2 .img-product .eye").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // remove from card btn
    $(".buying-shap8 button").on("click",function(){
        $(".buying-shap8").css("display","none");
        $(".product-parent .Product-child2 .img-product .shoop").css({
            "backgroundColor":"#212529"
        });
    })
    // 9
    $(".product-parent .Product-child3 .img-product .shoop").on("click",function(){
        $(".buying").html($(".buying-shap9"));
        $(".buying-shap9").css({
            "display":"grid"
        });
        $(".product-parent .Product-child3 .img-product .shoop").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // heart
    $(".product-parent .Product-child3 .img-product .heart").on("click",function(){
        $(".product-parent .Product-child3 .img-product .heart").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // eye
    $(".product-parent .Product-child3 .img-product .eye").on("click",function(){
        $(".product-parent .Product-child3 .img-product .eye").css({
            "backgroundColor":"#aa7d45"
        });
    });
    // remove from card btn
    $(".buying-shap9 button").on("click",function(){
        $(".buying-shap9").css("display","none");
        $(".product-parent .Product-child3 .img-product .shoop").css({
            "backgroundColor":"#212529"
        });
    })
    // End Products

    // End JS Codes

});