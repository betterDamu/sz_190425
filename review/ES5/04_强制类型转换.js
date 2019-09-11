/*
强制类型转换 (基本数据类型 --> 基本数据类型)
    1. 最终都是装成基本数据类型的值
    2. 强制类型转换 总共有三个规则
            toString
                null 转换为 "null" ，
                undefined 转换为 "undefined" ，
                true 转换为 "true" ；false转换为 "false"
                数字的字符串化则遵循通用规则
            toNumber
                Null==>0  ;  undefined==>NaN
			    Boolean：true==>1	false==>0
                字符串
                    就是把字符串两边的空白字符去掉，然后把两边的引号去掉，
                    看它能否组成一个合法的数字。如果是，转化结果就是这个数字；
                    否则，结果是NaN。当然也有例外，比如空白字符串转化为数字的结果是0。
            toBoolean
                它负责非布尔化为布尔
                    假值 --->false
                    真值 ---> true
                以下这些是假值：
                    Undefined ; null ; false ; +0  ; -0 和 NaN ; ""
                真值就是假值列表之外的值。

 */


/*
强制类型转换 (引用数据类型 --> 基本数据类型)
    1.toString
        ToPrimitive  直接调toString方法
    2. toNumber
        ToPrimitive   先调valueof 再调 toString
    3. toBoolean
        只看真假值
 */

/*
    ==: 数据类型分为以下两种
        1. String、Number、Boolean和Object(有)
        2. Undefined和Null(无)

        有 和 无之间做比较永远返回false
        无 和 无之间做比较永远返回true
        有 和 有之间做比较
            NaN 永远 不等于 NaN
            obj 和 obj之间永远看地址值
            其他都趋于数字化
 */