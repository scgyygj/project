// 属性：
//    哪些字母、个数、速度、位置、生命、分数
// 方法:
//     产生字符、下落、消除、重新开始、下一关、重复、重叠

function  Game() {
    this.charArr=[
        ['A','img/A.png'],
        ['B','img/B.png'],
        ['C','img/C.png'],
        ['D','img/D.png'],
        ['E','img/E.png'],
        ['F','img/F.png'],
        ['G','img/G.png'],
        ['H','img/H.png'],
        ['I','img/I.png'],
        ['J','img/J.png'],
        ['K','img/K.png'],
        ['L','img/L.png'],
        ['M','img/M.png'],
        ['N','img/N.png'],
        ['O','img/O.png'],
        ['P','img/P.png'],
        ['Q','img/Q.png'],
        ['R','img/R.png'],
        ['S','img/S.png'],
        ['T','img/T.png'],
        ['U','img/U.png'],
        ['V','img/V.png'],
        ['W','img/W.png'],
        ['X','img/X.png'],
        ['Y','img/Y.png'],
        ['Z','img/Z.png']
        ];
    this.current=[];//页面元素
    this.position=[];//放每个元素的位置
    this.number=3;      //页面中一次出现几个
    this.speed=5;  //速度
    this.gk=10;    //关卡   够10分可以到下一关
    this.score=2;   //分数
    this.numarr=[];//重复
    this.life=10;
    this.n=1;//关卡数
    this.scoreObj=document.querySelector('.jf>span');
    this.lifeObj=document.querySelector('.sm>span');
    this.gkObj=document.querySelector('.gk>span');
}
Game.prototype={
    start: function(){
        this.getChars();
        this.drop();
        this.key();
    },

    //获取多个元素
    getChars:function () {
        for(let i=0;i<this.number;i++){
            this.getChar();
        }
    },
    //获取一个元素
    getChar:function(){
        let num=Math.floor(Math.random()*this.charArr.length);
        let divs=document.createElement('div');
        divs.classList.add('cha');
        //定位
        divs.style.top=`${Math.random()*100}px`;
        lefts=(innerWidth-400)*Math.random()+200;

        while (this.checkposition(lefts)){
            lefts=(innerWidth-400)*Math.random()+200;
        }
        divs.style.left=`${lefts}px`;
        while(this.repeat(num)){
            num=Math.floor(Math.random()*this.charArr.length);
        }
        //传值
        divs.style.backgroundImage=`url('${this.charArr[num][1]}')`;
        divs.innerText=this.charArr[num][0];
        document.body.appendChild(divs);
        this.current.push(divs);   //把每个divs放入他的属性
        this.position.push(lefts);
        this.numarr.push(num);
    },
    //检查位置
    checkposition:function (left) {
        let flag;
        flag=this.position.some(function (element) {
            return   Math.abs(left-element)<80;

        });
        return flag;
    },
    //重复
   repeat:function(num1){
    let flag1;
    flag1=this.numarr.some(function(element){
        return element==num1;
    });
    return flag1;
   },
    //下落
    drop:function () {
        let that=this;
        this.t=setInterval(function () {
                that.current.forEach((emelent,i)=>{
                    let tops=emelent.offsetTop+that.speed;
                    emelent.style.top=`${tops}px`;
                    // emelent.style.background=`url('${that.charArr[i][1]}')`;

                    if(tops>=400){
                        document.body.removeChild(emelent);
                        that.life--;
                        that.lifeObj.innerText=that.life;    //每次下落生命值-1
                        that.current.splice(i,1);
                        that.position.splice(i,1);
                        that.numarr.splice(i,1);
                        that.getChar();
                        }
                        else{
                        that.key()
                    }
                    if(that.life===0){
                        let flag=confirm('游戏结束，是否重新开始');
                        if(flag){
                            that.restar();
                        }
                        else{
                            close();   //关闭浏览器
                        }




                    }
                })
            },300)
    },
    //按键消失
    key:function () {
        let that=this;
        document.addEventListener('keydown',function (e) {
            that.current.forEach((element,i)=>{
                if(element.innerText===e.key.toUpperCase()){
                    document.body.removeChild(element);

                    that.current.splice(i,1);
                    that.position.splice(i,1);
                    that.numarr.splice(i,1);
                    that.getChar();
                    that.score+=2;
                    that.scoreObj.innerText=that.score;
                }
                    if (that.score % (that.gk*that.n)===0) {
                        let flag1=confirm('是否进入下一关');
                        if(flag1){
                            that.next();
                            that.n+=1;
                            that.gkObj.innerText=that.n;
                        }else{
                            close();   //关闭浏览器
                        }



}

            })
        })
    },
    //下一关
    next:function () {
        clearInterval(this.t);
        for(let i=0;i<this.current.length;i++){
            document.body.removeChild(this.current[i])
        }
       this.current.length=0;
       this.position.length=0;
       this.position=[];
       this.numarr=[];
       // this.score=0;
       this.number+=1;
       this.speed+=5;
       this.start();
   },
   //重新开始
   restar:function(){
     clearInterval(this.t);
       for(let j=0;j<this.current.length;j++){
           document.body.removeChild(this.current[j]);
       }
       this.current.length=0;
       this.position.length=0;
       this.position=[];
       this.speed=5;
       this.number=3;
       this.numarr.length=0;
       this.score=2;
       this.life=10;
       this.n=1;
       this.scoreObj.innerText=this.score;
       this.lifeObj.innerText=this.life;
       this.gkObj.innerText=1;
       this.start();
       this.next();

   }


}

   // let  re=document.querySelector('.re');
   // re.addEventListener('click',function(){
   //  if(confirm('是否重新开始')){
   //      this.restar;
   //  }
   // });