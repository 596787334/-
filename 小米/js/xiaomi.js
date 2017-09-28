/*
* @Author: shuangshuang
* @Date:   2017-09-20 14:14:01
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-09-28 11:10:29
*/
 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d+b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c*(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }
 /*
   动画函数 animate (obj,attrObj,dur,fun,callback)
   obj   要动画的对象
   attrobj   要动画的属性对象{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   持续时间
   fun   动画方式
   callback 回调函数 
   */
  
   function animate (obj,attrObj,dur,fun,callback) {
	 clearInterval(obj.t);
	if(arguments.length==2){
	  dur=500;
	  fun=Tween.Linear;
	  callback=null;
	}
	if(arguments.length==3){
	  if(typeof dur=="number"){
	  dur=dur;
	  fun=Tween.Linear;
	  callback=null;
	  }
	  if(typeof dur=="function"){
	    if(dur.length>=4){ 
			  fun=dur;
			  callback=null;
			  dur=500;
		}else{  
			  fun=Tween.Linear;
			  callback=dur;
			  dur=500;
		}
	  
	  }
	}
	if(arguments.length==4){
	   if(typeof dur=="number"){
	     dur=dur;
		 if(fun.length>=4){
			  fun=fun;
			  callback=null;
			  
		}else{
	     	  callback=fun;
			  fun=Tween.Linear;
		   
		}
		 
	   }else{	  
				  callback=fun;
				  fun=dur;
				  dur=500
				 
			
	  }
	}
    var time=0;
	var start={};var change={};
    for (var i in attrObj) {
	 start[i]=setCss(obj,i);
	 change[i]=attrObj[i]-start[i];
    }

	obj.t=setInterval(function(){
	  if(time>=dur){
	   clearInterval(obj.t);
	   for (var i in attrObj) {
		 setCss(obj,i,attrObj[i]);
	   }
	   if(callback){
	     callback.call(obj);
	   }
	  }else{
	  for (var i in attrObj) {
	   setCss(obj,i,fun(time,start[i],change[i],dur));
	  }
	  time+=60
	  }
	},60)
  }




 function setCss (obj,attr,val) {
   if(obj.nodeType!==1){
     return;
   }

   //初始化参数
  var attr=attr.replace(/^\s*|\s*$/g,"");
     //获取值
   if(arguments.length==2){
       //位置和尺寸
      if(attr=="height"||attr=="width"||attr=="top"||attr=="left"||attr=="right"|| attr=="bottom"){
	var val=obj.currentStyle?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,null)[attr]);
		if(!val){
		 var str="offset"+attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());

		 val=obj[str];
		}
		return val;
	  }

	  
	   if(attr=="padding"||attr=="margin"||attr=="paddingTop"||attr=="paddingLeft"||attr=="paddingRight"||attr=="paddingBottom"||attr=="marginTop"||attr=="marginLeft"||attr=="marginRight"||attr=="marginBottom"){
	    var cc= parseInt(obj.currentStyle? ((obj.currentStyle[attr]==undefined||obj.currentStyle[attr]=="auto")?0:obj.currentStyle[attr]):(getComputedStyle(obj,null)[attr]==undefined?0:getComputedStyle(obj,null)[attr]));

	     return cc;
	   }
        //透明度
	  if(attr=="opacity"){
	    return obj.currentStyle?parseFloat(obj.currentStyle[attr]||1):parseFloat(getComputedStyle(obj,null)[attr]||1);
	  }
	  //颜色
	  if(attr=='color'||attr=="background"|| attr=="backgroundColor"||attr=='borderBottomColor'||attr== 'borderLeftColor'||    attr=='borderRightColor'||attr=='borderTopColor'){
		   var colors=obj.currentStyle?(obj.currentStyle[attr]||"#000000"):(getComputedStyle(obj,null)[attr]||"#000000");
		   //获取对象
		
		   return getColor(colors);
         
		}
		if(attr=="scrollTop"){
		   return obj.scrollTop;
		}

	  return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];


   }else if(arguments.length==3){
     switch (attr) {
     case "width":
	 case "height":
	 case "top":
	 case "left":
	 case "bottom":
	 case "right":
	 case "padding":
	 case "margin":
	 case "paddingLeft":
	 case "paddingRight":
	 obj.style[attr]=val+"px";
	 break;
     case "opacity":
	 obj.style[attr]=val;
	 obj.style.filter="alpha(opacity="+val*100+")"
	 break;
	 case "scrollTop":
	 obj.scrollTop=val;
	 break;
	 case 'color':
		case "background":
		case "backgroundColor":
		case 'borderBottomColor':
		case 'borderLeftColor':
		case 'borderRightColor':
		case 'borderTopColor':
    case "borderColor":
		obj.style[attr]=val;
	 break;
	 default:
	 obj.style[attr]=val;
     }

   }
 }

 //颜色渐变动画
 //获得颜色
function getColor (color) {
  var str,r,g,b,arr;
  if(typeof color=="string"){
    //16 进制
    if(color.charAt(0)==="#"){
	  str=color.substring(1)
	  r=parseInt(str.substr(0,2),16);
	  g=parseInt(str.substr(2,2),16);
	  b=parseInt(str.substr(4,2),16);
	  arr=[r,g,b]
	  return arr;
	}else{
	  str=color.substring(4,color.length-1)
	  return str.split(",")
	}
  }
  if(color instanceof Array){
    return color;
  }
}

/*
  函数 colorAnimate (obj,attr,val,dur,fn,callback)
  obj   要处理的对象
  attr  要处理的属性  background   color
  val   最终颜色 rbg  #
  fn    动画的方式
  callback  变化完成之后要处理的内容
*/
function colorAnimate (obj,attr,val,dur,fn,callback) {
if(obj.time){
  clearInterval(obj.time);
}
 
  var fn=fn||Tween.Linear;
  var start=setCss(obj,attr);
  var end=getColor(val);
  var times=0,r,g,b;
 obj.time= setInterval(function  () {
	 if(times>=dur){
	   clearInterval(obj.time)
       obj.time=null;
		   if(callback){
	        callback()
	      }
		  
	 }else{
     r=fn(times,parseInt(start[0]),parseInt(end[0])-parseInt(start[0]),dur)
     g=fn(times,parseInt(start[1]),parseInt(end[1])-parseInt(start[1]),dur)
	 b=fn(times,parseInt(start[2]),parseInt(end[2])-parseInt(start[2]),dur)	
		
	 setCss(obj,attr,"rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")")
      times+=60;
	   }
  },60)

}

function $(select,ranger){
    ranger = ranger || document;
    var first = select.charAt(0);
    if(first=='.'){
       return getClass(select.substring(1),ranger);
    }
    else if(first=='#'){
       return ranger.getElementById(select.substring(1));
    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
      return ranger.getElementsByTagName(select);
    }
   }
function getClass(classname,ranger){
    ranger = ranger?ranger:document;
    if(document.getElementsByClassName){
        return ranger.getElementsByClassName(classname);
    }else{
        var newarr = [];
    var all=ranger.getElementsByTagName('*');
    for(var i=0;i<all.length;i++){
      if(checkClass(all[i].className,classname)){
        newarr.push(all[i]);
            }
        }
      return newarr;
    }
}
function checkClass(className,classname){
    var arr = className.split(' ');
    for(var i=0;i<arr.length;i++){
        if(arr[i]==classname){
            return true;
        }
    }
  return false;
}
let boxli = $('.boxli');
let box = $('.box')[0];
console.log(boxli);
let now = 0;
let next = 0;
let w = parseInt(window.getComputedStyle(box,null).width);
let lefts=$('.left')[0];
console.log(lefts);
let rights=$('.right')[0];
let t = setInterval(move,3000);
let mm = true;
let dia = $('.dia');
box.onmouseover=function(){
	clearInterval(t);
}
box.onmouseout=function(){
	t = setInterval(move,3000);
}
lefts.onclick=function(){
	if(!mm){
		return;
	}
    movel();
    mm=false;
}
rights.onclick=function(){
	if(!mm){
		return;
	}
	move();
	mm=false;
}
function move(){
	     next++;
	     if(next==boxli.length){
	     	next=0;
	     }
         boxli[next].style.left = w+'px';
         animate(boxli[now],{left:-w},function(){
         	mm=true;
         });
         animate(boxli[next],{left:0});
         dia[next].style.border=' 2px solid #17171c';
         dia[now].style.border=' 2px solid #fff';
         now=next;
}
function movel(){
	     next--;
	     if(next<0){
	     	next=boxli.length-1;
	     }
         boxli[next].style.left = `${-w}px`;
         animate(boxli[now],{left:w});
         animate(boxli[next],{left:0},function(){
         	mm=true;
         });
         dia[next].style.border=' 2px solid #17171c';
         dia[now].style.border=' 2px solid #fff';
         now=next;
}
for(let i = 0;i<dia.length;i++){
	dia[i].onclick=function(){
         boxli[i].style.left = w+'px';
         animate(boxli[now],{left:-w},function(){
         	mm=true;
         });
         animate(boxli[i],{left:0});
         dia[i].style.border=' 2px solid #17171c';
         dia[now].style.border=' 2px solid #fff';
         now=next=i;
         //move();
	}

}
let cee = $('.cee');
let c1c = $('.c1c');
for(let i = 0;i<cee.length;i++){
	cee[i].onmouseover=function(){
		c1c[i].style.display='block';
	}
	cee[i].onmouseout=function(){
		c1c[i].style.display='none';
	}
}
let xiaomili = $('.xiaomili');
let x1x = $('.x1x');
let x4x = $('.x4x');
console.log(x4x);
for(let i = 0;i<xiaomili.length;i++){
    xiaomili[i].onmouseover=function(){
        x1x[i].style.height='200px';
        for(let j = 0;j<x4x.length;j++){
            x4x[j].style.height='120px';
        }
        x1x[i].style.display='block';
    }
    xiaomili[i].onmouseout=function(){
        x1x[i].style.height='0px';
        for(let j = 0;j<x4x.length;j++){
            x4x[j].style.height='0';
        }
        x1x[i].style.display='none';
    }
}
let haha = $('.jianz');
let mingtu = $('.mingtu')[0];
console.log(mingtu);
haha[0].onclick=function(){
    mingtu.style.left = '-1226px';
    haha[0].style.color = '#ff6700';
}
haha[1].onclick=function(){
    mingtu.style.left = '0';
    haha[1].style.color = '#ff6700';

}
haha[1].onmouseout = function(){
    haha[1].style.color = ' #b0b0b0';
}
haha[0].onmouseout = function(){
    haha[0].style.color = ' #b0b0b0';
}
// setInterval(function(){
//     let y =0;
//     if(y==-1226){
//         y=0;
//     }
//     if(y==0){
//       y =-1226;
//     }
//    mingtu.style.left = y+'px';
//     }
// },3000);


let gouwu = $('.gouwu')[0];
let g1g = $('.g1g')[0];
gouwu.onmouseover = function(){
    g1g.style.display = 'block';
}
gouwu.onmouseout = function(){
    g1g.style.display = 'none';
}
let neiei = $('.neiei');
console.log(neiei);
let zj = $('.zj');
console.log(zj);
let zj1 = $('.zj1');
let nei1 = $('.nei1')[0];
let now1 = 0;
let next1 = 0;
for(let i=0;i<zj1.length;i++){
   let nei1 = $('.nei1')[i];
   let neiei = $('.neiei',nei1);
   console.log(nei1);
   zj1[i].onclick = function(){
   if(next1<3){
   next1++;
   animate(neiei[next1],{left:296});
   animate(neiei[now1],{left:-296});
   animate(neiei[next1],{left:0});
   now1 = next1;}
}}
for(let i=0;i<zj.length;i++){
   let nei1 = $('nei1')[i];
   let neiei = $('.neiei',nei1);
 zj[i].onclick = function(){
   if(next1>0){
   next1--;
   animate(neiei[next1],{left:-296});
   animate(neiei[now1],{left:296});
   animate(neiei[next1],{left:0});
   now1 = next1;}
}}







