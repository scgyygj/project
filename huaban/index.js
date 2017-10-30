window.onload=function () {
    let canvas=document.querySelector('canvas');
    let ctx=canvas.getContext('2d');
    let opacity=document.querySelector('.opacity');
    let eraser=document.querySelector('#eraser');
    let xpc=document.querySelector('.eraser')
    let backs=document.querySelector('#backs');
    let tools=document.querySelectorAll('.tools');
    let text=document.querySelector('#text');
    let fillcolor=document.querySelector('.fillcolor');
    let strokecolor=document.querySelector('.strokecolor');
    let styleBtn=document.querySelectorAll('#fill,#stroke');
    let clips=document.querySelector('#clips');
    let clip=document.querySelector('.clip');
    let  save=document.querySelector('#save');
    let save1=document.querySelector('#save1');
    let btn=document.querySelectorAll('.top>button')
    console.log(btn);
    let pal=new palette(canvas,ctx,opacity,xpc,clip);
    console.log(tools);
    tools.forEach(element=>{
        element.onclick=function () {
            let num=0;
            document.querySelector('li[active=true]').setAttribute('active',false);
            this.setAttribute('active',true);
            if (!(this.id == 'polys' || this.id == 'polyJ')) {
            } else {
                num = prompt('边数', 5);
            }
            pal.draw(this.id,num)
        }
        tools[0]
    })

  //橡皮
    console.log(eraser);
    eraser.onclick=function () {
       let  n = prompt('大小', 5);
        pal.eraser(n);
    }
    //撤销
    backs.onclick=function () {
        pal.backs();
    }
//文本
   text.onclick=function () {
       pal.text();
   }

//    // 填充颜色
    fillcolor.onclick=function () {
        fillcolor.onblur=function () {
            ctx.fillStyle=fillcolor.value;
        }
    }
// 描边颜色
    strokecolor.onclick=function () {
        strokecolor.onblur=function () {
            ctx.strokeStyle=strokecolor.value;
        }
    }
    //描边,填充
    styleBtn.forEach(element=>{
        element.onclick=function () {
            pal.style=this.id;
        }
    })
//裁切
    clips.onclick=function () {
        pal.clips();
    }
//保存
save1.onclick=function () {
    canvas.toDataURL('image/png');
    save1.href=data;
    save1.download='tu.png';
}
//清空
    btn[2].onclick=function () {
        pal.clearAll();
    }
//反向
    btn[0].onclick=function () {
        pal.reverse();
    }
//去色
    btn[1].onclick=function () {
        pal.discoloration();
    }















}