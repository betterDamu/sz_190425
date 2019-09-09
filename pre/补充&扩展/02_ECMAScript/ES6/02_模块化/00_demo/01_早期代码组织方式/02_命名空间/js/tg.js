function tg(){
	function A(){
		var result = common();
		console.log("A from tg&"+ result);
	}
	
	function B(){
		var result = common();
		console.log("B from tg&"+ result);
	}
	
	function C(){
		var result = common();
		console.log("C from tg&"+ result);
	}
	
	return {
		A:A,
		B:B,
		C:C
	}
}