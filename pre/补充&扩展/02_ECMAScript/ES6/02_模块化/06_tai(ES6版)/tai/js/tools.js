function addClass(node,className){
    var reg=new RegExp("\\b"+className+"\\b");
    if(!reg.test(node.className)){
        node.className +=(" "+className);
    }
}

function removeClass(node,className) {
    if (node.className) {
        var reg = new RegExp("\\b" + className + "\\b");
        var classes = node.className;
        node.className = classes.replace(reg, "");
        if (/^\s*$/g.test(node.className)) {
            node.removeAttribute("class");
        }
    } else {
        node.removeAttribute("class");
    }
}

export default {
	addClass,
	removeClass
}

