
import {common} from "./common/common.js";
 function A(){
	//require函数的返回值：define中的module.exports
	console.log("A from tg&"+ common());
}

 function B(){
	console.log("B from tg&"+ common());
}

 function C(){
	console.log("C from tg&"+ common());
}

export {
	A,
	B,
	C
}

