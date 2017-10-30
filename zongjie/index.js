$(function () {
    let smbg=$('.smbg');
    let bm=$('.big>div');
    let sm=$('.big>div>div');
    let an=$('button');
    let big=$('.big');
    let zi=$('.zi');
    // for(let i=0;i<bm.length;i++){
    //     $(bm[i]).on('mouseover',function () {
    //         for(let j=0;j<bm.length;j++){
    //             $(sm[j]).animate({zIndex:0});
    //             $(smbg[j]).animate({opacity:1});
    //         }
    //         $(sm[i]).animate({zIndex:999});
    //         $(smbg[i]).animate({opacity:0});
    //     })
    // }
    sm.each(function (index,value,e) {
        $(value).on('mouseover',function (e) {
            e.preventDefault();
            for(let i=0;i<sm.length;i++){
                $(sm[i]).animate({zIndex:0});
                $(smbg[i]).animate({opacity:1});
            }
            $(sm[index]).animate({zIndex: 999});
            $(smbg[index]).animate({opacity: 0});
        })
    })
    an.on('click',function () {
        $(this).animate({opacity:0});
        zi.animate({opacity:0});

        big.animate({top:0,left:0});

    })

})