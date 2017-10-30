$(function () {
    let uls=$('.haoping-bottom');
    let lis=$('.haoping-bottom>li');
    let left=$('.haoping-left');
    let right=$('.haoping-right');
    for(let i=0;i<lis.length;i++){
        $(lis[i]).on('mouseover',function () {
            $(left[i]).css('box-shadow','0px 0px 10px 5px rgba(102,110,242,0.3)');
            $(right[i]).css('box-shadow','0px 0px 5px 5px rgba(102,110,242,0.3)');
        })
        $(lis[i]).on('mouseleave',function () {
            $(left[i]).css('box-shadow','0px 0px 0px 0px rgba(255,255,255,1)');
            $(right[i]).css('box-shadow','0px 0px 0px 0px rgba(255,255,255,1)');
        })
    }
})