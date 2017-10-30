//轮播图
let bannerImg=$('.banner>li');
let imgw=bannerImg.width();
let next=0;
let now=0;
let t=setInterval(move,3000);
function move() {
    next++;
    if(next==bannerImg.length){
        next=0;
    }
    $(bannerImg[next]).css({left:imgw});
    $(bannerImg[next]).animate({left:0});
    $(bannerImg[now]).animate({left:-imgw});
    now=next;
}
//上下
let big=$('.big');
let uls=$('.big>ul');
let ulH=uls.height();
let yti=$('.yti');
let dian=document.querySelectorAll('.bannerDian>li');
console.log(dian);
dian.forEach((element,index)=>{
    $(element).on('click',function () {
       big.css('transform',`translateY(${-ulH*index}px)`);
          for(let i=0;i<yti.length;i++){
              $(yti[i]).animate({'left':-1011,'top':0}).finish();
          }
        $(yti[index-1]).animate({'left':0,'top':0});


    })

})
//滚轮
// big[0].onmousewheel=function (e) {
//     console.log(e);
//     console.log(e.wheelDelta);
//     if(e.wheelDelta<0){
//         if()
//         big.animate({top:'-=700',left:'0'});
//     }else{
//         // big.style.top=tops+700;
//     }
// }

//导航
$('.topdao').on('click',function () {
    $('.topdaohang').animate(top,0);
})