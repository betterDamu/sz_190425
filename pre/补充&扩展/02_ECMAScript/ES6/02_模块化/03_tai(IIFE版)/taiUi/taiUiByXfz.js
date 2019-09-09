(function(w){
	w.taiUiByXfz = {
		changeColor:function (){
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
					tools.removeClass(aNodes[i],"active");
				}
				tools.addClass(touchC.target,"active");
				/*if(touchC.target.nodeName.toUpperCase()==="A"){
					tools.addClass(touchC.target.parentNode,"active");
				}else if(touchC.target.nodeName.toUpperCase()==="LI"){
					tools.addClass(touchC.target,"active");
				}*/
				
			})
		},
		tap:function (){
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
				damu.css(content,"translateX",-w);
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
					elementPoint.x=damu.css(content,"translateX");
					elementPoint.y=damu.css(content,"translateY");
					
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
					damu.css(content,"translateX",translateX);
					
					
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
						damu.css(content,"translateX",-w);
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
							damu.css(content,"translateX",targetX);
							
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
								damu.css(smallG,"translateX",aNodes[now].offsetLeft);
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
									damu.css(content,"translateX",-w);
									
									//最后一步
									isOver =false;
								},2000)
							}
						}
				}
			}
		},
		vMove:function(){
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
					var scale = damu.css(this,"translateY")/(wrap.offsetHeight - content.clientHeight);
					//scale = 实时距离/最大距离
					damu.css(bar,"translateY",-scale*(document.documentElement.clientHeight -bar.offsetHeight ));
					
					if(damu.css(bar,"translateY")>h){
						headBottom.style.display="none";
						// flag = false;
					}else if(damu.css(bar,"translateY")<h){
						headBottom.style.display="block";
						// flag = true;
					}
				},
				autoMove:function(){
					var scale = damu.css(this,"translateY")/(wrap.offsetHeight - content.clientHeight);
					//scale = 实时距离/最大距离
					damu.css(bar,"translateY",-scale*(document.documentElement.clientHeight -bar.offsetHeight ));
				},
				end:function(){
					bar.style.opacity=0;
				}
			}
			damu.vMove(content,callback);		
		},
		head:function(){
			var aNodes = document.querySelectorAll("#wrap .head .head-top .btns a");
			var headBottom = document.querySelector("#wrap .head .head-bottom");
			var bar = document.querySelector("#wrap .scrollBar");
			var head = document.querySelector("#wrap .head");
			var h = head.offsetHeight;
			var flag = true;
			aNodes[0].addEventListener("touchend",function(){
				//滚动条滚过头部高度时
				if(damu.css(bar,"translateY")>h){
					
					if(flag){
						headBottom.style.display="none";
					}else{
						headBottom.style.display="block";
					}
					flag=!flag;
				}
			})
		}
	}
})(window)
