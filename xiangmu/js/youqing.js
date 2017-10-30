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
//banner
    let bannerLeft=$('.bannerLeft');
    let bannerRight=$('.bannerRight');
    console.log(bannerRight ,bannerLeft);
    let jia=$('.jia');
    let jie=$('.jie');
    console.log(jie)
    bannerLeft.on('mouseenter',function () {
        jie.animate({opacity:1})
    })
    bannerLeft.on('mouseleave',function () {
        jie.animate({opacity:0})
    })
    bannerRight.on('mouseenter',function () {
        jia.animate({opacity:1})
    })
    bannerRight.on('mouseleave',function () {
        jia.animate({opacity:0})
    })
    let t=setInterval(function () {
        jia.trigger('click');
    },3000)
    let bannerlis=$('.bannerlis');
    let lisW=bannerlis.width;
    let now=next=0;
    jia.on('click',function () {
        let next=$('.active').next();
        if(next.length){
            move(next,'bannerL')
        }else{
            next=bannerlis.eq(0);
            move(next,'bannerL');
        }
    })
    jie.on('click',function () {
        let next=$('.active').prev();
        if(next.length){
            // next=0;
            move(next,'bannerR')
        }else{
            next=bannerlis.eq(next.length-1);
            move(next,'bannerR');
        }
    })
function move(obj,dir) {
        let active=$('.active')
    active.addClass(dir).delay(1000).queue(function () {
        $(this).removeClass(dir).removeClass('active');
        $(this).dequeue();
    })
    let d=dir=='bannerL'?'bannerR':'bannerL';
        obj.addClass(d);
        obj[0].offsetWidth;
        obj.removeClass(d).addClass('active');
}

    //照片墙
    // let potoul=$('.poto>ul');
    // let t=setInterval(poto,2000);
    // function poto() {
    //     potoul.animate({'transform':'translateX(-1040)' })
    //
    // }












})
