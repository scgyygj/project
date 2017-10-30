$(function () {
    // let lis=$('.liebiao>li');
    // let neirong=$('.bottom>li');
    // let now=0;
let lis=document.querySelectorAll('.liebiao>li');
let neirong=document.querySelectorAll('.bottom>li');
let now=0;
let next=0;
// for(let i=0;i<lis.length;i++){
//     lis[i].onclick=function () {
//         neirong[now].style.opacity=0;
//         neirong[now].style.left=-1000;
//         neirong[i].style.left=0;
//         neirong[i].style.opacity=1;
//         now=i;
//         neirong[now].style.left=1000;
//     }
// }
//     lis.each(function (index,value) {
//         $(value).on('click',function (i) {
//              neirong[index].style.left='1200px';
//             $(neirong[now]).animate({left:-1200,opacity:0});
//             // for(let i=0;i<lis.length;i++){
//             //     $(neirong[i]).animate({left:1200,opacity:0});
//             // }
//             $(neirong[index]).animate({left:0,opacity:1});
//             now=index;
//         })
//
//     })
    for(let i=0;i<lis.length;i++){

        // animate(neirong[i],{left:1200});
        lis[i].onclick=function(){
            animate(neirong[now],{opacity:0})
            animate(neirong[now],{left:-1200});
            for(let j=0;j<lis.length;j++){
                neirong[j].style.opacity=0;
                neirong[j].style.left=1200;
            }
            // neirong[i].style.left=`1200px`;

            animate(neirong[i],{left:0,opacity:1});
            now=i;
        }
    }

   })



















