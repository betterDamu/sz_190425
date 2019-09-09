
define(function(require, exports, module) {

	function A(){
		//require函数的返回值：define中的module.exports
		var common =  require('./common/common.js');
		console.log("A from tg&"+ common());
	}
	
	function B(){
		var common =  require('./common/common.js');
		console.log("B from tg&"+ common());
	}
	
	function C(){
		var common =  require('./common/common.js');
		console.log("C from tg&"+ common());
	}

  	module.exports = {
  		A:A,
  		B:B,
  		C:C
  	}
})

