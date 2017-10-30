//侧导航
$(function () {

    $('.navmin').on('click' ,function () {
        $(this).animate({opacity:'0'})
        $('aside').animate({left:'0px'});
    })
    $('.nav>ul>li').on('mouseover',function () {
        $(this).find('.yqc').css({display:'block'})
    })
    $('.nav>ul>li').on('mouseout',function () {
        $(this).find('.yqc').css({display:'none'})
        // $(this).remove('mouseover');
    })
//图片
    $('.bigImg>li').on('mouseenter',function () {
        console.log($(this));
        $(this).css
        $(this).animate({'left':'0'}).finish().mouseleave(function () {
            $(this).animate({'left':'0'}).finish();
        })
    })





})
