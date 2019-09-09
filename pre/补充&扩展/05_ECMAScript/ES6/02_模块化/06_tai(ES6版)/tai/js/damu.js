import transform from "./transform.js";
function carousel (arr){
	//布局
	var carouselWrap = document.querySelector(".carousel-wrap");
	if(carouselWrap){
		var pointslength = arr.length;
		
		//无缝
		var needCarousel = carouselWrap.getAttribute("needCarousel");
		needCarousel = needCarousel == null?false:true;
		if(needCarousel){
			arr=arr.concat(arr);
		}
		
		
		var ulNode = document.createElement("ul");
		transform.css(ulNode,"translateZ",0);
		var styleNode = document.createElement("style");
		ulNode.classList.add("list");
		for(var i=0;i<arr.length;i++){
			ulNode.innerHTML+='<li><a href="javascript:;"><img src="'+arr[i]+'"/></a></li>';
		}
		styleNode.innerHTML=".carousel-wrap > .list > li{width: "+(1/arr.length*100)+"%;}.carousel-wrap > .list{width: "+arr.length+"00%}";
		carouselWrap.appendChild(ulNode);
		document.head.appendChild(styleNode);
		
		var imgNodes = document.querySelector(".carousel-wrap > .list > li > a >img");
		setTimeout(function(){
			carouselWrap.style.height=imgNodes.offsetHeight+"px";
		},100)
		
		var pointsWrap = document.querySelector(".carousel-wrap > .points-wrap");
		if(pointsWrap){
			for(var i=0;i<pointslength;i++){
				if(i==0){
					pointsWrap.innerHTML+='<span mine="active"></span>';
				}else{
					pointsWrap.innerHTML+='<span></span>';
				}
			}
			var pointsSpan = document.querySelectorAll(".carousel-wrap > .points-wrap > span");
		}
		
		
		
		/*滑屏
		 * 	1.拿到元素一开始的位置
		 * 	2.拿到手指一开始点击的位置
		 * 	3.拿到手指move的实时距离
		 * 	4.将手指移动的距离加给元素
		 * */
		/*
		 * 防抖动
		 * 
		 * 1.判断用户首次滑屏的方向
		 * 2.如果是x轴
		 * 		以后不管用户怎么滑都会抖动
		 * 3.如果是y轴
		 * 		以后不管用户怎么滑都不会抖动	
		 * */
		var index =0;
		//手指一开始的位置
		var startX = 0;
		var startY = 0;
		//元素一开始的位置
		var elementX = 0;
		var elementY = 0;
		//var translateX =0;
		
		//首次滑屏的方向
		var isX = true;
		var isFirst = true;
		
		carouselWrap.addEventListener("touchstart",function(ev){
			ev=ev||event;
			var TouchC = ev.changedTouches[0];
			ulNode.style.transition="none";
			
			//无缝
			if(needCarousel){
				var index = transform.css(ulNode,"translateX")/document.documentElement.clientWidth;
				if(-index === 0){
					index = -pointslength;
				}else if(-index ==(arr.length-1)){
					index = -(pointslength-1)
				}
				transform.css(ulNode,"translateX",index*document.documentElement.clientWidth)
			}
			
			
			
			startX=TouchC.clientX;
			startY=TouchC.clientY;
			elementX=transform.css(ulNode,"translateX");
			elementY=transform.css(ulNode,"translateY");
			
			//清楚定时器
			clearInterval(timer);
			
			isX = true;
			isFirst = true;
		})
		carouselWrap.addEventListener("touchmove",function(ev){
			//看门狗  二次以后的防抖动
			if(!isX){
				//咬住
				return;
			}
			ev=ev||event;
			var TouchC = ev.changedTouches[0];
			var nowX = TouchC.clientX;
			var nowY = TouchC.clientY;
		    var disX = nowX - startX;
		    var disY = nowY - startY;
		    
		    //首次判断用户的华东方向
		    if(isFirst){
		    	isFirst = false;
		    	//判断用户的滑动方向
		    	//x ---> 放行
		    	//y ---> 首次狠狠的咬住，并且告诉兄弟 下次也给我咬住
		    	if(Math.abs(disY)>Math.abs(disX)){
			    	//y轴上滑
			    	isX = false;
			    	//首次防抖动
			    	return;
			    }
		    }
		    
			transform.css(ulNode,"translateX",elementX+disX);
		})
		carouselWrap.addEventListener("touchend",function(ev){
			ev=ev||event;
		    index = transform.css(ulNode,"translateX")/document.documentElement.clientWidth;
			index = Math.round(index);
			
			if(index>0){
				index=0;
			}else if(index<1-arr.length){
				index=1-arr.length;
			}
			
			xiaoyuandian(index);
			
			ulNode.style.transition=".5s transform";
			transform.css(ulNode,"translateX",index*(document.documentElement.clientWidth));
			
			if(needAuto){
				auto();
			}
		})
	
		//自动轮播
		var timer =0;
		var needAuto = carouselWrap.getAttribute("needAuto");
		needAuto = needAuto == null?false:true;
		if(needAuto){
			auto();
		}
		function auto(){
			clearInterval(timer);
			timer=setInterval(function(){
				if(index == 1-arr.length){
					ulNode.style.transition="none";
					index = 1-arr.length/2;
					transform.css(ulNode,"translateX",index*document.documentElement.clientWidth);
				}
				
				setTimeout(function(){
					index--;
					ulNode.style.transition="1s transform";
					xiaoyuandian(index);
					transform.css(ulNode,"translateX",index*document.documentElement.clientWidth);
				},50)
			},2000)
		}
		
		function xiaoyuandian(index){
			if(!pointsWrap){
				return;
			}
			for(var i=0;i<pointsSpan.length;i++){
				pointsSpan[i].classList.remove("active");
			}
			pointsSpan[-index%pointslength].classList.add("active");
		}
	}
};
function dragNav(){
	//滑屏区域
	var wrap = document.querySelector(".damu-nav-drag-wrapper");
	//滑屏元素
	var item = document.querySelector(".damu-nav-drag-wrapper .list");
	
	//元素一开始的位置  手指一开始的位置
	var startX=0;
	var elementX =0;
	var minX = wrap.clientWidth - item.offsetWidth;
	//快速滑屏的必要参数
	var lastTime =0;
	var lastPoint =0;
	var timeDis =1 ;
	var pointDis =0;
	wrap.addEventListener("touchstart",function(ev){
		ev=ev||event;
		var touchC = ev.changedTouches[0];
		
		startX = touchC.clientX;
		elementX = transform.css(item,"translateX");
		
		item.style.transition="none";
		
		lastTime = new Date().getTime();
		lastPoint = touchC.clientX;
		//lastPoint = transform.css(item,"translateX");
		
		//清除速度的残留
		pointDis=0;
		item.handMove = false;
	})
	
	wrap.addEventListener("touchmove",function(ev){
		ev=ev||event;
		var touchC = ev.changedTouches[0];
		var nowX = touchC.clientX;
		var disX = nowX - startX;
		var translateX = elementX+disX;
		
		
		var nowTime =new Date().getTime();
		var nowPoint = touchC.clientX;
		timeDis = nowTime - lastTime;
		pointDis = nowPoint - lastPoint;
		
		lastTime = nowTime;
		lastPoint = nowPoint;
		
		/*手动橡皮筋效果
		 * 
		 * 在move的过程中，每一次手指touchmove真正的有效距离慢慢变小，元素的滑动距离还是在变大
		 * 
		 * pointDis：整个手指touchmove真正的有效距
		 * 
		 * translateX = transform.css(item,"translateX") + pointDis*scale;!!!
		 * 
		 * */
		if(translateX>0){
			item.handMove = true;
			var scale = document.documentElement.clientWidth/((document.documentElement.clientWidth+translateX)*1.5);
			translateX = transform.css(item,"translateX") + pointDis*scale;
		}else if(translateX<minX){
			item.handMove = true;
			var over = minX - translateX;
			var scale = document.documentElement.clientWidth/((document.documentElement.clientWidth+over)*1.5);
			translateX = transform.css(item,"translateX") + pointDis*scale;
		}
		transform.css(item,"translateX",translateX);
	})
	
	wrap.addEventListener("touchend",function(ev){
		var translateX = transform.css(item,"translateX");
		if(!item.handMove){
			//快速滑屏
			//速度越大  位移越远
			var speed = pointDis/timeDis;
			speed = Math.abs(speed)<0.5?0:speed;
			var targetX = translateX + speed*200;
			var time = Math.abs(speed)*0.2;
			time = time<0.8?0.8:time;
			time = time>2?2:time;
			//快速滑屏的橡皮筋效果
			var bsr="";
			if(targetX>0){
				targetX=0;
				bsr = "cubic-bezier(.26,1.51,.68,1.54)";
			}else if(targetX<minX){
				targetX = minX;
				bsr = "cubic-bezier(.26,1.51,.68,1.54)";
			}
			item.style.transition=time+"s "+bsr+" transform";
			transform.css(item,"translateX",targetX);
		}else{
			//手动橡皮筋效果
			item.style.transition="1s transform";
			if(translateX>0){
				translateX=0;
				transform.css(item,"translateX",translateX);
			}else if(translateX<minX){
				translateX = minX;
				transform.css(item,"translateX",translateX);
			}
			
		}
	})
};
function vMove(wrap,callBack){
		//滑屏区域
		//滑屏元素
		var item = wrap.children[0];
		transform.css(item,"translateZ",0.1);
		
		//元素一开始的位置  手指一开始的位置
		var start={};
		var element ={};
		var minY = wrap.clientHeight - item.offsetHeight;
		
		//快速滑屏的必要参数
		var lastTime =0;
		var lastPoint =0;
		var timeDis =1 ;
		var pointDis =0;
		
		var isY =true;
		var isFirst = true;
		
		//即点即停
		var cleartime =0;
		var Tween = {
			Linear: function(t,b,c,d){ return c*t/d + b; },
			back: function(t,b,c,d,s){
	            if (s == undefined) s = 1.70158;
	            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        	}
		}
		wrap.addEventListener("touchstart",function(ev){
			ev=ev||event;
			var touchC = ev.changedTouches[0];
			
			//重置minY!!
			minY = wrap.clientHeight - item.offsetHeight;
			
			start = {clientX:touchC.clientX,clientY:touchC.clientY};
			element.y = transform.css(item,"translateY");
			element.x= transform.css(item,"translateX");
			
			item.style.transition="none";
			
			lastTime = new Date().getTime();
			lastPoint = touchC.clientY;
			//lastPoint = transform.css(item,"translateY");
			
			//清除速度的残留
			pointDis=0;
			item.handMove = false;
			
			
			isY =true;
			isFirst = true;
			
			//即点即停
			clearInterval(cleartime);
			
			
			if(callBack&&typeof callBack["start"] === "function"){
				callBack["start"].call(item);
			}
		})
		
		wrap.addEventListener("touchmove",function(ev){
			if(!isY){
				return;
			}
			
			ev=ev||event;
			var touchC = ev.changedTouches[0];
			/*var nowY = touchC.clientY;
			var disY = nowY - startY;
			var translateY = elementY+disY;*/
			var now = touchC;
			var dis = {};
			dis.y = now.clientY - start.clientY;
			dis.x = now.clientX - start.clientX;
			var translateY = element.y+dis.y;
			
			if(isFirst){
				isFirst = false;
				if(Math.abs(dis.x)>Math.abs(dis.y)){
					isY = false;
					return;
				}
			}
			
			
			
			var nowTime =new Date().getTime();
			var nowPoint = touchC.clientY;
			timeDis = nowTime - lastTime;
			pointDis = nowPoint - lastPoint;
			
			lastTime = nowTime;
			lastPoint = nowPoint;
			
			/*手动橡皮筋效果
			 * 
			 * 在move的过程中，每一次手指touchmove真正的有效距离慢慢变小，元素的滑动距离还是在变大
			 * 
			 * pointDis：整个手指touchmove真正的有效距
			 * 
			 * translateY = transform.css(item,"translateY") + pointDis*scale;!!!
			 * 
			 * */
			if(translateY>0){
				item.handMove = true;
				var scale = document.documentElement.clientHeight/((document.documentElement.clientHeight+translateY)*1.5);
				translateY = transform.css(item,"translateY") + pointDis*scale;
			}else if(translateY<minY){
				item.handMove = true;
				var over = minY - translateY;
				var scale = document.documentElement.clientHeight/((document.documentElement.clientHeight+over)*1.5);
				translateY = transform.css(item,"translateY") + pointDis*scale;
			}
			transform.css(item,"translateY",translateY);
			
			if(callBack&&typeof callBack["move"] === "function"){
				callBack["move"].call(item);
			}
		})
		
		wrap.addEventListener("touchend",function(ev){
			var translateY = transform.css(item,"translateY");
			if(!item.handMove){
				//快速滑屏
				//速度越大  位移越远
				var speed = pointDis/timeDis;
				speed = Math.abs(speed)<0.5?0:speed;
				var targetY = translateY + speed*200;
				var time = Math.abs(speed)*0.2;
				time = time<0.8?0.8:time;
				time = time>2?2:time;
				//快速滑屏的橡皮筋效果
				//var bsr="";
				var type = "Linear";
				if(targetY>0){
					targetY=0;
					type = "back";
					//bsr = "cubic-bezier(.26,1.51,.68,1.54)";
				}else if(targetY<minY){
					targetY = minY;
					type = "back";
					//bsr = "cubic-bezier(.26,1.51,.68,1.54)";
				}
				/*item.style.transition=time+"s "+bsr+" transform";
				transform.css(item,"translateY",targetY);*/
				bsr(type,targetY,time);
			}else{
				//手动橡皮筋效果
				item.style.transition="1s transform";
				if(translateY>0){
					translateY=0;
					transform.css(item,"translateY",translateY);
				}else if(translateY<minY){
					translateY = minY;
					transform.css(item,"translateY",translateY);
				}
				
				if(callBack&&typeof callBack["end"] === "function"){
					callBack["end"].call(item);
				}
			}
		})
		
		
		function bsr(type,targetY,time){
			clearInterval(cleartime);
			//当前次数
			var t=0;
			//初始位置
			var b = transform.css(item,"translateY");
			//最终位置 - 初始位置
			var c = targetY -b;
			//总次数
			var d = time*1000 / (1000/60);
			cleartime = setInterval(function(){
				t++;
				
				if(callBack&&typeof callBack["autoMove"] === "function"){
					callBack["move"].call(item);
				}
				
				if(t>d){
					clearInterval(cleartime);
					
					if(callBack&&typeof callBack["end"] === "function"){
						callBack["end"].call(item);
					}
				}
				var point = Tween[type](t,b,c,d);
				transform.css(item,"translateY",point);
			},1000/60);
		}
	}

export default {
    carousel,
    dragNav,
    vMove
}