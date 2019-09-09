import {common} from "./common/common.js";

export function A(){
	//require函数的返回值：define中的module.exports
	console.log("A from hsp&"+ common());
}

export function B(){
	console.log("B from hsp&"+ common());
}

export function C(){
	console.log("C from hsp&"+ common());
}



