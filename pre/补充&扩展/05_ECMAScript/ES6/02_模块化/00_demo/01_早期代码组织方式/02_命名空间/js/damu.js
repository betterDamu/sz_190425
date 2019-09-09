function damu(){
	function A(){
		var result = common();
		console.log("A from damu&"+ result);
	}
	
	function B(){
		var result = common();
		console.log("B from damu&"+ result);
	}
	
	function C(){
		var result = common();
		console.log("C from damu&"+ result);
	}
	
	return{
		A:A,
		B:B,
		C:C
	}
}
