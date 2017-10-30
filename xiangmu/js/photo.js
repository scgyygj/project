$(function () {
    //banner动画，先添加两个类名，left right

let btnR=$('.topbigright');  //获取左右两个按扭
let btnL=$('.topbigleft');
btnR.on('click',function () {

    let next=$('.active').next();  //下一张（即将要显示的）
    if(next.length){
        move(next,'left');             //调用move函数
    }else{
        next=$('.blo').eq(0);           //如果到最后一张让他等于第0张
        move(next,'left')
    }

})
    btnL.on('click',function () {

        let next=$('.active').prev();  //下一张（即将要显示的）
        if(next.length){
            move(next,'rigth');             //调用move函数
        }else{
            next=$('.blo').eq(next.length-1);           //如果到最后一张让他等于第0张
            move(next,'right')
        }

    })
    function move(obj,dir) {
    //操作当前显示的那一张
        let active=$('.active');        //获取
        active.addClass(dir).delay(1000).queue(function () {   //给他添加一个类名，让他运动
            $(this).removeClass(dir).removeClass('active');     //移除方向，因为有定位，就会回来。移除active类名，让他隐藏。
            $(this).dequeue();      //出库
        })
        //操作即将要显示的那一张
        let d=dir=='left'?'right':'left';
        obj.addClass(d);
        obj[0].offsetWidth;
        obj.removeClass(d).addClass('active');
    }







})