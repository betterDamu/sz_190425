// 模块化相关的api中 是不可能自动加./的
// 如果模块化相关的api中出现路径相关的标识符  ./  参照于当前路径
var colors = require('colors');

console.log(colors)

/*console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass

console.log(module.paths)*/

/*
node 第三方包的查找规则:
    1. 循环module.paths 找到对应的包目录
    2. 找包的配置文件 package.json
    3. 找package.json的main字段
    4. 如果3不成功 那继续找当前包底下的index.js index.json
    5. 如果 3 4 都没成功 直接报错
*/

/*
webpack 第三方包的查找规则:
    1. 要么去 resolve.alias 中找别名

    1.要么去 resolve.modules 中找对应的目录
    2. 找包的配置文件 package.json
    3. 找package.json的字段  ( resolve.mainFields指定的字段)
    4. 如果3不成功 那继续找当前包底下的    resolve.mainFiles.resolve.extensions
    5. 如果 3 4 都没成功 直接报错
*/

