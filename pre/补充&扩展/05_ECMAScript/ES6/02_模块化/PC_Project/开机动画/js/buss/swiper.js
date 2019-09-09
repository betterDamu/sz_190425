define(function () {
        // 获取元素
        var iconItems = document.querySelectorAll('.icon-list .icon-item');  //所有的按钮
        var playItems = document.querySelectorAll('.play-list .play-item'); // 所有的大图
        var index = 0;  // 表示正处在激活状态的索引
        var isAnimated = false;  // 是否正在执行动画

        // 设置自动轮播
        setInterval(function () {
            var nextIndex = index < playItems.length - 1 ? index + 1 : 0;
            setPlay(nextIndex, true);
        }, 3000);

        // 给每个按钮绑定事件
        iconItems.forEach(function (iconItem, iconIndex) {
            iconItem.addEventListener('click', function () {
                setPlay(iconIndex);
            });
        });

        /**
         * 实现轮播图切换
         * @param iconIndex 即将要显示的轮播项目的索引
         * @param isAuto是否是自动播放 默认false
         */
        function setPlay(iconIndex, isAuto = false) {
            // 判断是否执行动画
            if (isAnimated) {
                return;
            }

            // 设置正在执行动画
            isAnimated = true;

            // 动画执行结束后
            setTimeout(function () {
                isAnimated = false;
            }, 2000);


            // 所有的按钮失活
            iconItems.forEach(function (iconItem) {
                iconItem.classList.remove('active');
            });

            // 当前按钮激活
            iconItems[iconIndex].classList.add('active');

            if (iconIndex > index || isAuto) {  //按钮索引大于当前索引，  右边显示，左边隐藏
                playItems[iconIndex].className = 'play-item right-show'; // 显示
                playItems[index].className = 'play-item left-hide';
            } else if (iconIndex < index) {  // 按钮所以小于当前索引，  左边显示， 右边隐藏
                playItems[iconIndex].className = 'play-item left-show'; // 显示
                playItems[index].className = 'play-item right-hide';
            }


            // 重置赋值 index 的值
            index = iconIndex;
        }
})