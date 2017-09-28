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
	let a = document.getElementById('aside');
	let b = a.getElementsByClassName('zhaoshuang');
    let c = a.getElementsByTagName('li');
    for(let i=0;i<c.length;i++){
    	c[i].onmouseover=function(){
    		b[i].style.display='block';
    	}
    	c[i].onmouseout=function(){
    		b[i].style.display='none';
    	}
    }
    let ban2 = document.getElementsByClassName('ban2');
    let yuan = document.getElementsByClassName('yuan');
    let yuan1 = yuan[0].getElementsByClassName('yuan2');
    // console.log(yuan1);
    
    let taobao = document.getElementsByClassName('taobao')[0];
    let t1t = document.getElementsByClassName('t1t')[0];
    taobao.onmouseover=function(){
    	t1t.style.display='block';
    }
    taobao.onmouseout=function(){
    	t1t.style.display='none';
    }
    let shoucang = document.getElementsByClassName('shoucang')[0];
    let t3t = document.getElementsByClassName('t3t')[0];
    shoucang.onmouseover=function(){
    	t3t.style.display='block';
    }
    shoucang.onmouseout=function(){
    	t3t.style.display='none';
    }
    let shouji = document.getElementsByClassName('shouji')[0];
    let n1n = document.getElementsByClassName('n1n')[0];
    shouji.onmouseover=function(){
    	n1n.style.display='block';
    }
    shouji.onmouseout=function(){
    	n1n.style.display='none';
    }
    let bb = setInterval(move,1000);          //轮播
    let banner = $('.banner')[0];
    banner.onmouseover=function(){
    	clearInterval(bb);
    }
    banner.onmouseout=function(){
       bb = setInterval(move,1000);
    }

    let num = 0;
    for(let j=0;j<yuan1.length;j++){           //按住
        yuan1[j].onclick=function(){
            //ban2[j].style.display='block';
            animate(ban2[j],{opacity:1})
            yuan1[j].style.background='rgba(241, 241, 241, 0.5)';
           for(let i=0;i<yuan1.length;i++){
           	if(i!=j){
           		//ban2[i].style.display='none';
           		animate(ban2[i],{opacity:0})
           		yuan1[i].style.background='rgba(162, 162, 162, 0.5)';
           	}
           }
           num=j;
       }
    } 
    function move(){
    	if(num==ban2.length){
    		num=0;
    	}
    	for(let i=0;i<ban2.length;i++){
    		//ban2[i].style.display='none';
    		animate(ban2[i],{opacity:0})
    		yuan1[i].style.background='rgba(162, 162, 162, 0.5)';
    	}
    		//ban2[num].style.display='block';
    		animate(ban2[num],{opacity:1})
    		yuan1[num].style.background='rgba(241, 241, 241, 0.5)';
         num++;   
    }
    
    let shangjia = $('.shangjia')[0];
    let d1d =  $('.d1d')[0];
    shangjia.onmouseover = function(){
      d1d.style.display = 'block';
    }
    shangjia.onmouseout = function(){
      d1d.style.display = 'none';
    }
    let dao = $('.dao')[0];
    let s1s = $('.s1s')[0];
    console.log(dao);
    console.log(s1s);
    dao.onmouseover=function(){
      s1s.style.display = 'block';
    }
    dao.onmouseout=function(){
      s1s.style.display = 'none';
    }
    
    let h1hh = document.querySelector('.h1hh');
    let win = window.innerHeight;
    
    window.onscroll = function(){
      let over = document.body.scrollTop;
      if(over>=win){
      h1hh.style.top = '0';
    }else{
      h1hh.style.top = '-50px';
    }

    }
    let jiaojiao = $('.jiaojiao');
    console.log(jiaojiao);
    let youshu1 = $('.youshu1');
    console.log(youshu1);

    for(let n = 0;n<youshu1.length;n++){
         youshu1[n].onmouseover = function(){
          
          jiaojiao[n].style.display='block';
          jiaojiao[n].style.left='-100px';
         }
         youshu1[n].onmouseout = function(){
          jiaojiao[n].style.left = '-120px';
          jiaojiao[n].style.display = 'none';
         }
    }
    let now = 0,next = 0;
    let xiaotu1 = $('.xiaotu1');
    let zuoz = $('.zuoz')[0];
    let youx =$('.youx')[0] ;
    console.log(zuoz);
    youx.onclick = function(){
       if(next<2){
        next++;
       animate(xiaotu1[next],{left:500});
       animate(xiaotu1[now],{left:-500});
       animate(xiaotu1[next],{left:0});
       now=next;
       }  
    }
    zuoz.onclick = function(){
       if(next>0){
       next--;
       animate(xiaotu1[next],{left:-500});
       animate(xiaotu1[now],{left:500});
       animate(xiaotu1[next],{left:0});
       now=next;
       }  
    }












