define(function(require, exports, module) {

	function A(){
		//require函数的返回值：define中的module.exports
		var common =  require('./common/common.js');
		console.log("A from damu&"+ common());
	}
	
	function B(){
		var common =  require('./common/common.js');
		console.log("B from damu&"+ common());
	}
	
	function C(){
		var common =  require('./common/common.js');
		console.log("C from damu&"+ common());
	}

	exports.A =A;
	exports.B =B;
	exports.C =C
	/*
	 * 天坑！！！
	 * exports = {
  		A:A,
  		B:B,
  		C:C
  	}*/
  	/*module.exports = {
  		A:A,
  		B:B,
  		C:C
  	}*/
})

