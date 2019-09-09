export default{
    css: function (node,type,val){
        if(typeof node ==="object" && typeof node["transform"] ==="undefined" ){
            node["transform"]={};
        }

        if(arguments.length>=3){
            //设置
            var text ="";
            node["transform"][type] = val;

            for( var item in node["transform"]){
                if(node["transform"].hasOwnProperty(item)){
                    switch (item){
                        case "translateX":
                        case "translateY":
                        case "translateZ":
                            text +=  item+"("+node["transform"][item]+"px)";
                            break;
                        case "scale":
                            text +=  item+"("+node["transform"][item]+")";
                            break;
                        case "rotate":
                            text +=  item+"("+node["transform"][item]+"deg)";
                            break;
                    }
                }
            }
            node.style.transform = node.style.webkitTransform = text;
        }else if(arguments.length==2){
            //读取
            val =node["transform"][type];
            if(typeof val === "undefined"){
                switch (type){
                    case "translateX":
                    case "translateY":
                    case "rotate":
                        val =0;
                        break;
                    case "scale":
                        val =1;
                        break;
                }
            }
            return val;
        }
    }
}
