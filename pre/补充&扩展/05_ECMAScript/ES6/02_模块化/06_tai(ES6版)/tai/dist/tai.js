/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform_js__ = __webpack_require__(1);

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
		__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateZ",0);
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
				var index = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX")/document.documentElement.clientWidth;
				if(-index === 0){
					index = -pointslength;
				}else if(-index ==(arr.length-1)){
					index = -(pointslength-1)
				}
				__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX",index*document.documentElement.clientWidth)
			}
			
			
			
			startX=TouchC.clientX;
			startY=TouchC.clientY;
			elementX=__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX");
			elementY=__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateY");
			
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
		    
			__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX",elementX+disX);
		})
		carouselWrap.addEventListener("touchend",function(ev){
			ev=ev||event;
		    index = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX")/document.documentElement.clientWidth;
			index = Math.round(index);
			
			if(index>0){
				index=0;
			}else if(index<1-arr.length){
				index=1-arr.length;
			}
			
			xiaoyuandian(index);
			
			ulNode.style.transition=".5s transform";
			__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX",index*(document.documentElement.clientWidth));
			
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
					__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX",index*document.documentElement.clientWidth);
				}
				
				setTimeout(function(){
					index--;
					ulNode.style.transition="1s transform";
					xiaoyuandian(index);
					__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(ulNode,"translateX",index*document.documentElement.clientWidth);
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
		elementX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX");
		
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
			translateX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX") + pointDis*scale;
		}else if(translateX<minX){
			item.handMove = true;
			var over = minX - translateX;
			var scale = document.documentElement.clientWidth/((document.documentElement.clientWidth+over)*1.5);
			translateX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX") + pointDis*scale;
		}
		__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX",translateX);
	})
	
	wrap.addEventListener("touchend",function(ev){
		var translateX = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX");
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
			__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX",targetX);
		}else{
			//手动橡皮筋效果
			item.style.transition="1s transform";
			if(translateX>0){
				translateX=0;
				__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX",translateX);
			}else if(translateX<minX){
				translateX = minX;
				__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX",translateX);
			}
			
		}
	})
};
function vMove(wrap,callBack){
		//滑屏区域
		//滑屏元素
		var item = wrap.children[0];
		__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateZ",0.1);
		
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
			element.y = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY");
			element.x= __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateX");
			
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
				translateY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY") + pointDis*scale;
			}else if(translateY<minY){
				item.handMove = true;
				var over = minY - translateY;
				var scale = document.documentElement.clientHeight/((document.documentElement.clientHeight+over)*1.5);
				translateY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY") + pointDis*scale;
			}
			__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY",translateY);
			
			if(callBack&&typeof callBack["move"] === "function"){
				callBack["move"].call(item);
			}
		})
		
		wrap.addEventListener("touchend",function(ev){
			var translateY = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY");
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
					__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY",translateY);
				}else if(translateY<minY){
					translateY = minY;
					__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY",translateY);
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
			var b = __WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY");
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
				__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */].css(item,"translateY",point);
			},1000/60);
		}
	}

/* harmony default export */ __webpack_exports__["a"] = ({
    carousel,
    dragNav,
    vMove
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    css: function (node,type,val){
        if(typeof node ==="object" && typeof node["transform"] ==="undefined" ){
            node["transform"]={};
        }

        if(arguments.length>=3){
            //设置
            var text ="";
            node["transform"][type] = val;

            for( var item in node["transform"]){
                if(node["transform"].hasOwnProperty(item)){
                    switch (item){
                        case "translateX":
                        case "translateY":
                        case "translateZ":
                            text +=  item+"("+node["transform"][item]+"px)";
                            break;
                        case "scale":
                            text +=  item+"("+node["transform"][item]+")";
                            break;
                        case "rotate":
                            text +=  item+"("+node["transform"][item]+"deg)";
                            break;
                    }
                }
            }
            node.style.transform = node.style.webkitTransform = text;
        }else if(arguments.length==2){
            //读取
            val =node["transform"][type];
            if(typeof val === "undefined"){
                switch (type){
                    case "translateX":
                    case "translateY":
                    case "rotate":
                        val =0;
                        break;
                    case "scale":
                        val =1;
                        break;
                }
            }
            return val;
        }
    }
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function addClass(node,className){
    var reg=new RegExp("\\b"+className+"\\b");
    if(!reg.test(node.className)){
        node.className +=(" "+className);
    }
}

function removeClass(node,className) {
    if (node.className) {
        var reg = new RegExp("\\b" + className + "\\b");
        var classes = node.className;
        node.className = classes.replace(reg, "");
        if (/^\s*$/g.test(node.className)) {
            node.removeAttribute("class");
        }
    } else {
        node.removeAttribute("class");
    }
}

/* harmony default export */ __webpack_exports__["a"] = ({
	addClass,
	removeClass
});



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taiUiByDamu_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__taiUiByXfz_js__ = __webpack_require__(5);


__WEBPACK_IMPORTED_MODULE_0__taiUiByDamu_js__["a" /* default */].CMCFMenuBtn();
__WEBPACK_IMPORTED_MODULE_0__taiUiByDamu_js__["a" /* default */].changeFocus();
__WEBPACK_IMPORTED_MODULE_0__taiUiByDamu_js__["a" /* default */].drag();
__WEBPACK_IMPORTED_MODULE_0__taiUiByDamu_js__["a" /* default */].swiper();

__WEBPACK_IMPORTED_MODULE_1__taiUiByXfz_js__["a" /* default */].changeColor();
__WEBPACK_IMPORTED_MODULE_1__taiUiByXfz_js__["a" /* default */].tap();
__WEBPACK_IMPORTED_MODULE_1__taiUiByXfz_js__["a" /* default */].vMove();
__WEBPACK_IMPORTED_MODULE_1__taiUiByXfz_js__["a" /* default */].head();


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_damu_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_tools_js__ = __webpack_require__(2);



function swiper(){
	var arr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"]
	__WEBPACK_IMPORTED_MODULE_0__js_damu_js__["a" /* default */].carousel(arr);
};
function drag(){
	__WEBPACK_IMPORTED_MODULE_0__js_damu_js__["a" /* default */].dragNav();
};
function changeFocus(){
	var inputText = document.querySelector("#wrap .head .head-bottom form input[type='text']");
inputText.addEventListener("touchstart",function(ev){
	ev=ev||event;
	this.focus();
	ev.stopPropagation();
	ev.preventDefault();
})
document.addEventListener("touchstart",function(){
		inputText.blur();
	})
};
function CMCFMenuBtn(){
		var menuBtn = document.querySelector("#wrap .head .head-top .menuBtn");
	var mask = document.querySelector("#wrap .head .mask");
	//isXX:false  频道按钮
	//isXX:ture	  XX按钮
	var isXX=false;
	menuBtn.addEventListener("touchstart",function(ev){
		ev = ev||event;
		var touchC = ev.changedTouches[0];
		if(!isXX){
			__WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].addClass(menuBtn,"active");
			mask.style.display="block";
		}else{
			__WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].removeClass(menuBtn,"active");
			mask.style.display="none";
		}
		isXX=!isXX;
		ev.stopPropagation();
		ev.preventDefault();
	})
	
	document.addEventListener("touchstart",function(){
		if(isXX){
			__WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].removeClass(menuBtn,"active");
			mask.style.display="none";
			isXX=!isXX;
		}
	})
	
	mask.addEventListener("touchstart",function(ev){
		ev = ev||event;
		ev.stopPropagation();
		ev.preventDefault();
	})
}

/* harmony default export */ __webpack_exports__["a"] = ({
    swiper,
    drag,
    changeFocus,
    CMCFMenuBtn
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_transform_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_tools_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_damu_js__ = __webpack_require__(0);




function head(){
	var aNodes = document.querySelectorAll("#wrap .head .head-top .btns a");
	var headBottom = document.querySelector("#wrap .head .head-bottom");
	var bar = document.querySelector("#wrap .scrollBar");
	var head = document.querySelector("#wrap .head");
	var h = head.offsetHeight;
	var flag = true;
	aNodes[0].addEventListener("touchend",function(){
		//滚动条滚过头部高度时
		if(__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar,"translateY")>h){
			
			if(flag){
				headBottom.style.display="none";
			}else{
				headBottom.style.display="block";
			}
			flag=!flag;
		}
	})
}
function vMove(){
	var headBottom = document.querySelector("#wrap .head .head-bottom");
	var head = document.querySelector("#wrap .head");
	var h = head.offsetHeight;
	var content = document.querySelector("#wrap .content");
	var wrap = document.querySelector("#wrap .content > div");
	var bar = document.querySelector("#wrap .scrollBar");
	var scale = document.documentElement.clientHeight/(head.offsetHeight+wrap.offsetHeight);
	bar.style.height = document.documentElement.clientHeight*scale+"px";
	var callback={
		start:function(){
			bar.style.opacity=1;
		},
		move:function(){
			var scale = __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(this,"translateY")/(wrap.offsetHeight - content.clientHeight);
			//scale = 实时距离/最大距离
			__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar,"translateY",-scale*(document.documentElement.clientHeight -bar.offsetHeight ));
			
			if(__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar,"translateY")>h){
				headBottom.style.display="none";
				//flag = false;
			}else if(__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar,"translateY")<h){
				headBottom.style.display="block";
				//flag = true;
			}
		},
		autoMove:function(){
			var scale = __WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(this,"translateY")/(wrap.offsetHeight - content.clientHeight);
			//scale = 实时距离/最大距离
			__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(bar,"translateY",-scale*(document.documentElement.clientHeight -bar.offsetHeight ));
		},
		end:function(){
			bar.style.opacity=0;
		}
	}
	__WEBPACK_IMPORTED_MODULE_2__js_damu_js__["a" /* default */].vMove(content,callback);		
};
function tap(){
	var  wrap = document.querySelector("#wrap .content .tap-wrap");
	var  contentNodes = document.querySelectorAll("#wrap .content .tap-wrap .tap-content");
	//var  loadings =  document.querySelectorAll("#wrap .content .tap-wrap .tap-content .tap-loading");
	// var w = wrap.offsetWidth;
	var w = document.documentElement.clientWidth;
	for(var i=0;i<contentNodes.length;i++){
		move(contentNodes[i]);
	}
	
	
	function move(content){
		//抽象小绿的下标
		var  now = 0;
		var  smallG = content.parentNode.querySelector(".tap-nav .smallG");
		var  aNodes = content.parentNode.querySelectorAll(".tap-nav a");
		var  loadings =  content.querySelectorAll(".tap-loading");
		__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateX",-w);
		smallG.style.width=aNodes[0].offsetWidth+"px";
		//滑屏逻辑 content既是滑屏区域又是滑屏元素
		
		//var startPoint={x:0,y:0};
		var startPoint={};
		var elementPoint={x:0,y:0};
		var isX = true;
		var isFirst = true;
		
		
		//在1/2 跳转时  让整个jump逻辑干干净净的只触发一次
		var isOver =false;
		content.addEventListener("touchstart",function(ev){
			//isOver =false;
			
			
			if(isOver){
				return;
			}
			ev = ev||event;
			var touchC = ev.changedTouches[0];
			//快照
			//startPoint = {clientX:touchC.clientX,clientY:touchC.clientY};
			startPoint = touchC;
			elementPoint.x=__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateX");
			elementPoint.y=__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateY");
			
			isX = true;
			isFirst = true;
			
			
			content.style.transition = "none";
		})
		content.addEventListener("touchmove",function(ev){
			if(isOver){
				return;
			}
			if(!isX){
				return;
			}
			
			ev = ev||event;
			var touchC = ev.changedTouches[0];
			
			var nowPoint={};
			var dis ={x:0,y:0};
			nowPoint= touchC;
			dis.x = nowPoint.clientX - startPoint.clientX ;//0
			dis.y = nowPoint.clientY - startPoint.clientY ;//0
			
			if(isFirst){
				isFirst = false;
				if(Math.abs(dis.y) > Math.abs(dis.x)){
					isX = false;
					return;
				}
			}
			
			var translateX = elementPoint.x + dis.x;
			__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateX",translateX);
			
			
			jump(dis.x);
		})
		content.addEventListener("touchend",function(ev){
			if(isOver){
				return;
			}
			ev = ev||event;
			var touchC = ev.changedTouches[0];
			var nowPoint={};
			var dis ={x:0,y:0};
			nowPoint= touchC;
			dis.x = nowPoint.clientX - startPoint.clientX ;
			
			if( Math.abs(dis.x) <= w/2 ){
				content.style.transition = "1s transform";
				__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateX",-w);
			}
		})
		
		//1/2 跳转  ---> 请求
		function jump(disX){
			if(isOver){
				return;
			}
			if( Math.abs(disX) >w/2 ){
					isOver=true;
					content.style.transition = "1s transform";
					var targetX = disX>0?0:-2*w;
					__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateX",targetX);
					
					//请求一定要在动画执行完毕之后再发,
					content.addEventListener("transitionend",endFn);
					content.addEventListener("webkitTransitionEnd",endFn);
					
					function endFn(){
						/*
						 循环定时器   				回调函数的头部第一行清定时器
						DOM2 绑定 transitionend事件    回调函数的头部第一行解绑事件
						*/
						content.removeEventListener("transitionend",endFn);
						content.removeEventListener("webkitTransitionEnd",endFn);
						content.style.transition = "none";
						/*超过 1/2
						 * 1.一开始loading图是隐藏的,loading图需要出现（ 1/2跳转后  请求发送前）
						 * 2.发送请求  处理请求  完成数据的渲染
						 * 		必须动画（content去0 或者 -2w位置）完成之后，再去进行这一系列的逻辑
						 * 								----   content要回到-w的位置
						 * */
						for(var i=0;i<loadings.length;i++){
							loadings[i].style.opacity = 1;
						}
						
						//对now进行控制
						//往右滑 --   往左滑++
						disX>0?now--:now++;
						if(now<0){
							now = aNodes.length-1;
						}else if(now>aNodes.length-1){
							now = 0;
						}
						__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(smallG,"translateX",aNodes[now].offsetLeft);
						if(aNodes[now].offsetWidth != smallG.offsetWidth){
							smallG.style.width=aNodes[now].offsetWidth+"px";
						}
						
						//发ajax请求  去服务端拿数据（学完node之后来发一发）
						//优雅
						setTimeout(function(){
							//成功  content要回到-w的位置  loading图隐藏
							
							for(var i=0;i<loadings.length;i++){
								loadings[i].style.opacity = 0;
							}
							__WEBPACK_IMPORTED_MODULE_0__js_transform_js__["a" /* default */].css(content,"translateX",-w);
							
							//最后一步
								isOver =false;
							},2000)
						}
					}
			}
		}
};
function changeColor() {
		var list =  document.querySelector("#wrap .content .damu-nav-drag-wrapper .list");
	var aNodes =  document.querySelectorAll("#wrap .content .damu-nav-drag-wrapper .list>li a");
	
	list.addEventListener("touchstart",function(){
			this.isMove = false;
		})
	list.addEventListener("touchmove",function(){
		this.isMove = true;
	})
	
	list.addEventListener("touchend",function(ev){
		if(this.isMove){
			return;
		}
		ev=ev||event;
		var touchC = ev.changedTouches[0];
		for(var i=0;i<aNodes.length;i++){
			__WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].removeClass(aNodes[i],"active");
		}
		__WEBPACK_IMPORTED_MODULE_1__js_tools_js__["a" /* default */].addClass(touchC.target,"active");
	})
}

/* harmony default export */ __webpack_exports__["a"] = ({
    head,
    vMove,
    tap,
    changeColor
});

/***/ })
/******/ ]);