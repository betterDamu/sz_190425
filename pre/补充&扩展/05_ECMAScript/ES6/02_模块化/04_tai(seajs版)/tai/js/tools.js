define(function(require, exports, module) {
	
	module.exports={
		addClass:function (node,className){
			var reg=new RegExp("\\b"+className+"\\b");
			if(!reg.test(node.className)){
				node.className +=(" "+className); 
			}
		},
		removeClass:function (node,className){
			if(node.className){
				var reg=new RegExp("\\b"+className+"\\b");
				var classes = node.className;
				node.className=classes.replace(reg,"");
				if(/^\s*$/g.test(node.className)){
					node.removeAttribute("class");
				}
			}else{
				node.removeAttribute("class");
			}
		}
	}
	
	/*exports.addClass=function (node,className){
		var reg=new RegExp("\\b"+className+"\\b");
		if(!reg.test(node.className)){
			node.className +=(" "+className); 
		}
	};
	exports.removeClass=function (node,className){
		if(node.className){
			var reg=new RegExp("\\b"+className+"\\b");
			var classes = node.className;
			node.className=classes.replace(reg,"");
			if(/^\s*$/g.test(node.className)){
				node.removeAttribute("mine");
			}
		}else{
			node.removeAttribute("mine");
		}
	}*/
})



			