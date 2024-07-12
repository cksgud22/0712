$(function(){
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })//hover

    //슬라이드 이미지
    var n = 0;//   0     1     2
    setInterval(function(){
        if(n == 2){
            n = 0;
        }else{
            n++;
        }//if

        $(".top_move").animate({top : n * (-300)+ "px"},500)

    },3000)
    

    //tab
    $(".cont1 h2").click(function(){
        $(".container .cont1 h2").addClass("on")
        $(this).removeClass("on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})
        
    })

    //팝업
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })

}) /* js_end */

