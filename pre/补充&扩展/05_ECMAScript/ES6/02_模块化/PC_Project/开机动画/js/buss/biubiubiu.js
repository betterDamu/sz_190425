define(function () {
        // 获取元素
        var teamItems = document.querySelectorAll('.team3-item');

        //创建canvas元素
        var canvas = createCanvas();

        // 绑定鼠标事件
        teamItems.forEach(function (teamItem) {
            teamItem.addEventListener('mouseenter', function () {
                this.appendChild(canvas);
            });
            teamItem.addEventListener('mouseleave', function(){
                this.removeChild(canvas);
            });
        });



        // 创建canvas
        function createCanvas() {
            // 创建元素
            var canvasNode = document.createElement('canvas');
            // 设置画布大小
            canvasNode.width = 236;
            canvasNode.height = 448;
            // 获取绘图上下文
            var ctx = canvasNode.getContext('2d');


            // 定义变量 存放绘制好的圆
            var circleArr = [];

            // 绘制气泡
            setInterval(function () {
                // 清除画布
                ctx.clearRect(0, 0, canvasNode.width, canvasNode.height);

                // 遍历数组
                for (var i = 0; i < circleArr.length; i ++) {
                    // 气泡位置变化
                    circleArr[i].deg += .3;
                    circleArr[i].y -= circleArr[i].deg;
                    circleArr[i].x += Math.sin(circleArr[i].deg) * circleArr[i].scale;

                    // 判断
                    if (circleArr[i].y <  circleArr[i].r) {
                        circleArr.splice(i, 1);
                        continue;
                    }

                    // 绘制
                    ctx.beginPath();
                    ctx.arc(circleArr[i].x, circleArr[i].y, circleArr[i].r, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba('+circleArr[i].red+', '+circleArr[i].green+', '+circleArr[i].blue+', '+circleArr[i].opacity+')';
                    ctx.fill();
                }

            }, 100);

            // 生成气泡的 数据
            setInterval(function () {
                // 定义变量
                var circle = {};

                // 圆的初始设置
                circle.r = Math.floor(Math.random()* 9) + 2; // 圆的半径
                circle.x = circle.r + Math.floor(Math.random() * (canvasNode.width - 2 * circle.r));  // 计算圆心x坐标
                circle.y = canvasNode.height - circle.r;  // 计算圆心y坐标

                // 颜色的基本设置
                circle.red = Math.floor(Math.random() * 256);
                circle.green = Math.floor(Math.random() * 256);
                circle.blue = Math.floor(Math.random() * 256);
                circle.opacity = 1;

                // 其他设置
                circle.deg = 0;  // y值变化的增量
                circle.scale = Math.floor(Math.random()* 6) + 10;

                // 添加到数组
                circleArr.push(circle);
            }, 50);

            // 返回
            return canvasNode;
        }
})