function hsp(){
	function A(){
		var result = common();
		console.log("A from hsp&"+ result);
	}
	
	function B(){
		var result = common();
		console.log("B from hsp&"+ result);
	}
	
	function C(){
		var result = common();
		console.log("C from hsp&"+ result);
	}
	
	return {
		A:A,
		B:B,
		C:C
	}
}
