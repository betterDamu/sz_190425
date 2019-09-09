(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function common(){
	return "common";
}
module.exports = common;

},{}],2:[function(require,module,exports){
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



},{"./common/common.js":1}],3:[function(require,module,exports){
function A(){
	//require函数的返回值：define中的module.exports
	var common =  require('./common/common.js');
	console.log("A from hsp&"+ common());
}

function B(){
	var common =  require('./common/common.js');
	console.log("B from hsp&"+ common());
}

function C(){
	var common =  require('./common/common.js');
	console.log("C from hsp&"+ common());
}

module.exports = {
	A:A,
	B:B,
	C:C
}


},{"./common/common.js":1}],4:[function(require,module,exports){
window.onload=function(){
	var damu = require("./damu.js");
	var hsp = require("./hsp.js");
	var tg = require("./tg.js");
	
	damu.C();
	hsp.C();
	tg.C();
}

},{"./damu.js":2,"./hsp.js":3,"./tg.js":5}],5:[function(require,module,exports){
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


},{"./common/common.js":1}]},{},[4]);
