//侧导航
$(function () {

//侧边按扭
    let black = $('.black ul li');
    let neirong = $('.white');
   black.each(function (index,value) {
       $(value).on('click',function () {
           for(let i=0;i<neirong.length;i++){
               $(neirong[i]).animate({opacity:0})
           }
           $(neirong[index]).animate({opacity:1});
       })

   })

    // for (let j = 0; j < black.length; j++) {
    //    $( black[j]).on('click' , function () {
    //        animate(neirong[now], {right: 697})
    //        for(let i=0;i<neirong.length;i++){
    //
    //            neirong[i].style.opacity=0;
    //            neirong[i].style.right=-2091;
    //
    //        }
    //        animate(neirong[j], {right: 2})
    //        animate(neirong[j], {opacity: 1})
    //        now=j;
    //
    //     })
    // }


})