let color=['a','b','c','d'];
let poke=[];  //扑克牌,里面放的是对象   poke=[{num:1,hua:h},{num:2,hua:s}]
let flag={}; //flag={hua_num} 去重
//创建poke牌方法一
// for(let i=0;i<52;i++){
//     let hua=color[Math.floor(Math.random()*color.length)];
//     let num=Math.floor(Math.random()*13+1);
//     if(flag[`${hua}_${num}`]){
//         hua=color[Math.floor(Math.random()*color.length)];
//         num=Math.floor(Math.random()*13+1);
//     }
//     poke.push({num,hua});
//     flag[`${hua}_${num}`]=true;
// }
//flag={hua_num} 去重
$(function () {


while (poke.length<52){
    let hua=color[Math.floor(Math.random()*color.length)];   //产生花色
    let num=Math.floor(Math.random()*13+1);  //产生数字
    if(!flag[`${hua}_${num}`]){         //如果数组里没有输入
        poke.push({num,hua});
     flag[`${hua}_${num}`]=true;
    }
}

//牌的位置
    let index=0
    for(let i=0;i<7;i++){
       for(let j=0;j<=i;j++){
        let left=310-55*i+110*j;
        let top=60*i;
        $('<div>').appendTo($('.zhuozi')).attr('id',`${i}_${j}`).data('num',`${poke[index].num}`).addClass('poke').css('background-image',`url(img/${poke[index].num}${poke[index].hua}.png)`).delay(index*10).animate({
            left,top})
           index++;
       }
    }
    //剩余牌

    for(;index<52;index++){
        $('<div>').appendTo($('.zhuozi')).addClass('poke boxL').attr('id','-2_-2').data('num',`${poke[index].num}`).css('background-image',`url(img/${poke[index].num}${poke[index].hua}.png)`).delay(index*10).animate({
            left:0,top:520})
    }


    //点击
    let frist=null;
    let clickobj=[];
    $('.zhuozi').on('click','.poke',function (e) {
          let   element=$(e.target);
          //根据设置只有第一行可以点
          let ids=element.attr('id').split('_');
          //获取当前元素的id，并通过他上面的id判断他上面是否有元素，有的话不可以点击。
          let ele1=`#${ids[0]*1+1}_${ids[1]*1}`;
          let ele2=`#${ids[0]*1+1}_${ids[1]*1+1}`;
          if($(ele1).length||$(ele2).length){
              return;
          }
          //添加一个属性设置选中状态，及第二次选中回来。
          element.toggleClass('active');          //如果有active这个属性就让他删除，没有就添加
          if(element.hasClass('active')){         //判断有没有这个active属性，没有就上去，有就回来
              //也可以用element.is('.active')
              $(element).animate({top:'-=10'})
          }else{
              $(element).animate({top:'+=10'})
          }
          //游戏规则
        if(!frist){          //记录第一次点击和第二次点击，定义一个空的frist,让他和当前点击的（element）如果没有,就是当前取的这一张
              frist=$(e.target);

        }else{
            if(frist.data('num')*1+element.data('num')*1===14){      //判断选中这两张，等于14让他消失，不等于让他清除类名
                $('.active').animate({top:'0',left:'600'},function () {
                    this.remove();                          //清除这个元素
                })
            }else{
                $('.active').animate({top:'+=10'},function () {
                    $(this).removeClass('active');    //清除active这个类名，取消选择状态
                })

            }
            frist=null;
        }

    })
    let zindex=0;
    $('.red').on('click',function () {
        if(!$('.boxL').length){return;}

        $('.boxL').last().animate({left:600}).css('zIndex',zindex++).removeClass('boxL').addClass('boxR');

    })

    $('.green').on('click',function () {

        if(!$('.boxR').length){return;}
        $('.boxR').each(function (index) {
            $(this).last().delay(index*100).animate({left:0}).css('zIndex',zindex++).removeClass('boxR').addClass('boxL');
        })
        // $('.boxR').last().animate({left:0}).css('zIndex',zindex++).removeClass('boxR').addClass('boxL');

    })



})