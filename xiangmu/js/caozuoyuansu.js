
//--------------节点----------------------
 // 用childNodes模拟children，先选中所有子元素，再选出元素节点。
 //获取元素中所有的元素节点       
        function children1(parent){
	  	let newarr=[];
	  	let childs=parent.childNodes;
	  	let arrs=Array.from(childs);
	    newarr=arrs.filter(elements=>elements.nodeType==1);
	  	return newarr;
	  }

//找一个元素所有的父元素
	function closed(elements){
		if(elements.nodeName=='BODY'||elements.nodeName=='HTML'){
			return null;
		}
		let arr=[];
		let per=elements.parentNode;
	    while(per.nodeName!='BODY'){
	    	arr.push(per);
	    	per=per.parentNode;
	    	
           
	    }
	    return arr;
	}


//找和他同名的父元素
	function closed(elements,className){
		if(elements.nodeName=='BODY'||elements.nodeName=='HTML'){
			return null;
		}
		let per=elements.parentNode;
	    while(per.nodeName!='BODY'){
	    	if(per.nodeName==className.toUpperCase()){
	    	return per;         
         }
         per=per.parentNode;
	    }
	    return arr;
	}


//原型对象的方法插到元素之后
//调用：谁之后.inserAfter(要插的元素)
//谁之后需要从页面中获取
//要插的元素需要创建一个元素
		HTMLElement.prototype.insertAfter=function(elements){
			let per=this.parentNode;
			let next=this.nextElementSibling;
			if(next){
				per.insertBefore(elements,next);
			}
			else{
			   per.appendChild(elements);
			}
		}

 // 在当前元素同级最前面插入一个元素
      HTMLElement.prototype.prepenchild=function(element){
      	let per=this.parentNode;    //获取要插的元素的父元素
      	let frist=per.firstElementChild;
      	if(frist){
      	per.insertBefore(element,frist);
      }
      else{
      	per.appendChild(element);
      }
      }



//插入到父元素最后一个子元素,和inserBefore作用一样
//调用 子元素(创建的).appendTo(父元素（获取的）)
     HTMLElement.prototype.appendTo=function(element){
     	 element.appendChild(this);
     }

//插入到父元素里的第一个元素
//调用 子元素(创建的).prependTo(父元素（获取的）)
     HTMLElement.prototype.prependTo=function(element){
      element.prepenchild(this);
     }

//清空里面的所有内容
     HTMLElement.prototype.empty=function(){
     	this.innerHTML='';
     }








