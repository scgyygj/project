$(function () {
    let hei={};
    let bai={};
    let kongbai={};   //记录空白位置  i_j:{x:i,y:j}
    let sr=$('.sr');
    let rj=$('.rj');
    let  isAI=true;
    // sr.on('click',function () {
    //      isAI=false; //是否人机对战
    // })
    // rj.on('click',function () {
    //      isAI=true; //是否人机对战
    // })

    for(let i=0;i<15;i++){
        $('<div>').addClass('hang').appendTo('.qipan');
        $('<span>').addClass('shu').appendTo('.qipan');
        for(let j=0;j<15;j++){
            kongbai[i+'_'+j]={x:i,y:j};
            $('<li>').addClass('qizi').attr('id',i+'_'+j).data('pos',{x:i,y:j}).appendTo('.qipan');
        }
    }
    //落子
    let flag=true;
    $('.qipan .qizi').on('click',function () {
        if($(this).hasClass('hei')||$(this).hasClass('bai')){
            return;
        }
        let data=$(this).data('pos');     //获取位置
        if(flag){
        $(this).addClass('hei');
        hei[data.x+'_'+data.y]=true;
        delete  kongbai[data.x+'_'+data.y]
            if(panduan(data,hei)>=5){
                $('.qipan .qizi').off();
                alert('黑方胜');
            }

            if(isAI){
                let pos=ai();
                console.log(pos);
                $(`#${pos.x}_${pos.y}`).addClass('bai');
                bai[pos.x+'_'+pos.y]=true;
                delete kongbai[pos.x+'_'+pos.y];
                if(panduan(pos,bai)>=5){
                    $('.qipan .qizi').off();
                    alert('白方胜');
                }
                return;
            }
        }

        else{
            $(this).addClass('bai');
            bai[data.x+'_'+data.y]=true;
            delete kongbai[pos.x+'_'+pos.y];
            if(panduan(data,bai)>=5){
                $('.qipan .qizi').off();         //停止qizi上的事件
                alert('白方胜');
            }

        }
        flag=!flag;
    })
    
    function panduan(pos,obj) {
        let rows=1, line=1, zx=1,yx=1;
        let i=pos.x,j=pos.y+1;
        // 行
        while (obj[i+'_'+j]){
             rows++;
             j++;
        }
        j=pos.y-1;    //判断左边时不需要判断他本身了
        while (obj[i+'_'+j]){
            rows++;
            j--;
        }
        //列
        i=pos.x+1;
        j=pos.y;
        while (obj[i+'_'+j]){
            line++;
            i++;
        }
        i=pos.x-1;
        while (obj[i+'_'+j]){
            line++;
            i--;
        }
        //zx
        i=pos.x+1;
        j=pos.y+1;
        while (obj[i+'_'+j]){
            zx++;
            i++;
            j++;
        }
        i=pos.x-1;j=pos.y-1
        while (obj[i+'_'+j]){
            zx++;
            i--;
            j--;
        }
        //yx
        i=pos.x-1;
        j=pos.y+1;
        while (obj[i+'_'+j]){
            yx++;
            i--;
            j++;
        }
        i=pos.x+1;j=pos.y-1;
        while (obj[i+'_'+j]){
            yx++;
            i++;
            j--;
        }
        return Math.max(rows,line,zx,yx)
    }


    function ai() {
        let max=-Infinity,max1=-Infinity;      //无穷大
        let zb=null,zb1=null;
        for(let i in kongbai){
            let scroe=panduan(kongbai[i],bai);
            console.log(scroe)
            if(scroe>max){
                max=scroe;
                zb=kongbai[i];
            }
        }

        for(let i in kongbai){
            let scroe=panduan(kongbai[i],hei);
            if(scroe>max1){
                max1=scroe;
                zb1=kongbai[i];
            }
        }
        console.log(zb1,zb);
        return (max>=max1)?zb:zb1;

    }
    
    
    
    
    
    
    
    
})