//轮播图
// let bannerImg=document.querySelector('.bannerImg');
// let bannerLi=document.querySelectorAll('.bannerImg>li');
// let bannerImgW=parseInt(getComputedStyle(bannerImg,null).width);
// let now=0;
// let next=0;
// let flag=true;
// let t;
// t=window.setInterval(moveR,3000);
// //左滑动
// function moveL() {
//    next--;
//    if(next<0){
//        next=bannerLi.length-1;
//    }
//     bannerLi[next].style.left=`${-bannerImgW}px`;
//     animate(bannerLi[now],{left:bannerImgW});
//     animate(bannerLi[next],{left:0},function(){
//         flag=true;
//     });
//     now=next;
// }
// function  moveR() {
//     next++;
//     if(next==bannerLi.length){
//         next=0;
//     }
//     bannerLi[next].style.left=bannerImgW+'px';
//     animate(bannerLi[now],{left:-bannerImgW});
//     animate(bannerLi[next],{left:0},function(){
//         flag=true;
//     });
//     now=next;
//
// }
//轮播图
let bannerImg=$('.bannerImg>li');
let imgw=bannerImg.width();
let next=now=0;
let t=setInterval(move,3000)
function move() {
    next++;
    if(next==bannerImg.length){
        next=0;
    }
    $(bannerImg[next]).css({left:imgw})
    $(bannerImg[next]).animate({left:0});
    $(bannerImg[now]).animate({left:-imgw})
    now=next;
}











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






})
// //上下滑动
let rightlis=$('.bannerDian>li');
let topbottom=$('.topbottom');
for(let i=0;i<rightlis.length;i++){
    $(rightlis[i]).on('click',function () {
        for(let i=0;i<topbottom.length;i++){
            topbottom[i].style.opacity=0;
        }
        topbottom[i].style.opacity=1;
    })
}












