
//属性
//    线宽、端点样式、填充、描边、样式、边数
//方法：
//画线line、虚线、矩形、多边形、多角形、圆、铅笔、文字
//橡皮
// 撤销  裁切   新建  保存
//



class palette{
    constructor(canvas,ctx,opacity,xpc,clip){
     this.opacity=opacity;
     this.canvas=canvas;
     this.xpc=xpc;
     this.ctx=ctx;
     this.cw=this.canvas.width;
     this.ch=this.canvas.height;
     //样式
    this.lineWidth=1;   //线宽
    this.lineCap='butt';

    this.style='stroke';

    this.colorStyle='#000';


    this.history=[];

    //裁切
    this.clip=clip;
    this.temp=[];
    }
    //给数组对象加一个方法 加入到原型对象的构造函数上
    //初始化
    init(){
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.lineCap=this.lineCap;
        this.ctx.Style=this.Style;
        this.ctx.strokeStyle=this.strokeStyle;
    }
   //画线
    line(cx,cy,ox,oy) {
        // conlose.log(cx);
        // conlose.log(ox);
        this.ctx.beginPath();
        this.ctx.setLineDash([3,0]);
        this.ctx.moveTo(cx, cy);
        this.ctx.lineTo(ox, oy);
        // this.ctx.stroke=this.ctx.stroke;

    }
    //画虚线
     dashes(cx,cy,ox,oy){
         this.ctx.setLineDash([3,10]);
         this.ctx.beginPath();
         this.ctx.moveTo(cx,cy);
         this.ctx.lineTo(ox,oy);
         // this.ctx.stroke();
}
   //画矩形
    square(cx,cy,ox,oy){
        this.ctx.strokeRect(cx,cy,ox-cx,oy-cy);
    }
    //多边形
    polys(cx,cy,ox,oy,n){
       let  rad=2*Math.PI/n;
        let r=Math.sqrt(Math.pow((ox-cx),2)+Math.pow((oy-cy),2));
        this.ctx.beginPath();
        for(let i=0;i<n;i++){
            let x=cx+r*Math.cos(rad*i);
            let y=cy+r*Math.sin(rad*i);
            this.ctx.lineTo(x,y);
        }
        this.ctx.closePath();
    }
    //圆
    circle(cx,cy,ox,oy){
        let rad=2*Math.PI;
        let r=Math.sqrt(Math.pow((ox-cx),2)+Math.pow((oy-cy),2));
        this.ctx.beginPath();
        this.ctx.arc(cx,cy,r,0,rad);
    }
    //多角形
    polyJ(cx,cy,ox,oy,n){
        let rad=Math.PI/n;
        let r=Math.sqrt(Math.pow((ox-cx),2)+Math.pow((oy-cy),2));
        this.ctx.beginPath();
        for(let i=0;i<2*n;i++){
            let r1=i%2? r/2 : r;
            let x=cx+r1*Math.cos(rad*i);
            let y=cy+r1*Math.sin(rad*i);
            this.ctx.lineTo(x,y);
        }
        this.ctx.closePath();
    }
    //铅笔
    pencil(cx,cy,ox,oy){
        this.ctx.lineTo(ox,oy);
    }
    //画
    draw(type,num){
        this.opacity.onmousedown=function (e) {
            e.preventDefault();                       //清除浏览器的默认行为
            let cx=e.offsetX,cy=e.offsetY;
            this.opacity.onmousemove=function (e) {
                e.preventDefault();                       //清除浏览器的默认行为
                let ox=e.offsetX,oy=e.offsetY;
                this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                if(this.history.length){
                    this.ctx.putImageData(this.history[this.history.length-1],0,0)
                }
                this.ctx.setLineDash([3,0]);
                this.init();
                this[type](cx,cy,ox,oy,num);
                this.ctx[this.style]();
            }.bind(this);

            this.opacity.onmouseup=function () {
                this.history.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
                this.opacity.onmousemove=null;
            }.bind(this)
        }.bind(this)
    }
   //橡皮
    eraser(n){
        // let eraser=document.querySelector('.eraser');
        this.opacity.onmousedown=function (e) {
            this.xpc.style.display='block';
            this.xpc.style.width=`${n}px`;
            this.xpc.style.height=`${n}px`;
            this.opacity.onmousemove=function (e) {
            let ox=e.offsetX-25;
            let oy=e.offsetY-25;
            console.log(ox);
            this.xpc.style.left=`${ox}px`;
            this.xpc.style.top=`${oy}px`;
            this.ctx.clearRect(ox,oy,50,50);
        }.bind(this);
        this.opacity.onmouseup=function () {
            this.history.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
            this.xpc.style.display='none';
            this.opacity.onmousemove=null;
        }.bind(this)
        }.bind(this)
    }
    //撤销
    backs(){
        if(!this.history){
            return;
        }
        this.history.pop();
        this.ctx.clearRect(0,0,this.cw,this.ch);
        this.ctx.putImageData(this.history[this.history.length-1],0,0);
    }
   //文字
    text(){
        let that=this;
        // let lefts,tops;
        this.opacity.onmousedown=function (e){
            that.opacity.onmousedown=null;
            let ox=e.offsetX,oy=e.offsetY;
            let lefts=oy,tops=ox;
            let divs=document.createElement('div');
            divs.contentEditable=true;    //可编辑状态
            divs.style.cssText=`
             width: 200px;
             height: 50px;
             border: 1px dashed #7b7b7d;
             position: absolute;
             top:${oy}px;
             left:${ox}px;
             cursor:move;
           `;
            //原来的位置+变化的位
          this.appendChild(divs);

            divs.onmousedown=function (e) {
                let cx=e.clientX,cy=e.clientY;
                let left=divs.offsetLeft,top=divs.offsetTop;
                that.opacity.onmousemove=function (e) {
                    let ox=e.clientX,oy=e.clientY;
                     lefts=left+ox-cx,
                         tops=top+oy-cy;
                    divs.style.left=`${lefts}px`;
                    divs.style.top=`${tops}px`
                }
            };
            divs.onmouseup=function () {
                that.opacity.onmousemove=null;
            };
        divs.onblur=function () {
            let value=this.innerText;     //存文字
            that.opacity.removeChild(divs);  //清除div
            that.ctx.font='bold 20px sans-serif';    //设置文字样式
            that.ctx.textAlign='center';
            that.ctx.textBaseline='middle';
            that.ctx.fillText(value,lefts,tops);      //写文字
            this.history.push(this.ctx.getImageData(0,0,that.cw,));
        }
        }
    }
//裁切
    clips(){
        let that=this;
        this.opacity.onmousedown=function (e) {
            let cx=e.offsetX,cy=e.offsetY;
            that.clip.style.opacity='1';
            let minX,minY,w,h;
            that.opacity.onmousemove=function (e) {
                let ox=e.offsetX,oy=e.offsetY;
                minX=cx>=ox?ox:cx;
                minY=cy>=oy?oy:cy;
                w=Math.abs(ox-cx);
                h=Math.abs(oy-cy);
                that.clip.style.width=`${w}px`;
                that.clip.style.height=`${h}px`;
                that.clip.style.left=`${minX}px`;
                that.clip.style.top=`${minY}px`;
            };
            that.opacity.onmouseup=function(){
                that.temp=that.ctx.getImageData(minX,minY,w,h);
                that.ctx.clearRect(minX,minY,w,h);
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.opacity.onmousemove=null;
                that.drap(minX,minY,that.clip);
            }
        }
    }
    drap(minX,minY,obj){
        let that=this;
        // this.ctx.clearRect(0,0,this.cw,this.ch);
        that.opacity.onmousedown=function (e) {
            let cx=e.offsetX,cy=e.offsetY;
            that.opacity.onmousemove=function (e) {
                let ox=e.offsetX,oy=e.offsetY;
                let leftX=minX+ox-cx,
                    topY=minY+oy-cy;
                obj.style.left=`${leftX}px`;
                obj.style.top=`${topY}px`;
                that.ctx.clearRect(0,0,that.cw,that.ch);
                if(that.history.length){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0)
                }
                that.ctx.putImageData(that.temp,leftX,topY)
            }
            that.opacity.onmouseup=function (){
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.temp=null;
                obj.style.opacity='0';
                that.opacity.onmousemove=null;
            }
        }
    }
//清空
    clearAll(){
        this.ctx.clearRect(0,0,this.cw,this.ch);
        this.history.push(this.ctx.getImageData(0,0,this.cw,this.ch));
    }
//反向
    reverse(){
        let imagedata=this.ctx.getImageData(0,0,this.cw,this.ch);
        for(let i=0;i<imagedata.data.length;i+=4){
            imagedata.data[i]=255-imagedata.data[i];
            imagedata.data[i+1]=255-imagedata.data[i+2];
            imagedata.data[i+2]=255-imagedata.data[i+2];
        }
        this.ctx.putImageData(imagedata,0,0)
    }
//去色
    discoloration(){
        let imagedata=this.ctx.getImageData(0,0,this.cw,this.ch);
        for(let i=0;i<imagedata.data.length;i+=4){
            imagedata.data[i]=imagedata.data[i+1]=imagedata.data[i+2]=(imagedata.data[i]+imagedata.data[i+1]+imagedata.data[i+2])/3;
        }
        this.ctx.putImageData(imagedata,0,0);
    }



}