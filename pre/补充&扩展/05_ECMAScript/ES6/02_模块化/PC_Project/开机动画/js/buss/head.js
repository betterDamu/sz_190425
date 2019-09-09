define(function () {
        var header = document.querySelector('#header');
        var navItems = document.querySelectorAll('.nav-item'); // 获取所有的导航项目元素
        var arrow = document.querySelector('.arrow');
        var main = document.querySelector('#main');
        var contentItems = document.querySelectorAll('.content-item');
        var contentListNode = document.querySelector('.content-list');
        var menuItems = document.querySelectorAll('.menu-item'); // 获取侧边导航

        var contentHeight = window.innerHeight - header.offsetHeight;  // 计算主体内容高度
        var index = 0;  // 当前页面的索引
        var preIndex = 0;  // 标记上一次显示的 索引
        var timeId = null; // 定时器句柄（标记）

        // 定义数组 定义每一屏幕的出入场动画
        var animationList = [
            // 第一屏
            {
                inAnimation: function(){  // 入场动画
                    var playList = document.querySelector('.play-list');
                    var iconList = document.querySelector('.icon-list');

                    playList.style.transform = 'translateY(0)';
                    iconList.style.transform = 'translateY(0)';
                },
                outAnimation: function(){  // 退场动画
                    var playList = document.querySelector('.play-list');
                    var iconList = document.querySelector('.icon-list');

                    playList.style.transform = 'translateY(-200px)';
                    iconList.style.transform = 'translateY(200px)';
                }
            },
            // 第二屏
            {
                inAnimation: function(){  // 入场动画
                    var plane1 = document.querySelector('.plane1');
                    var plane2 = document.querySelector('.plane2');
                    var plane3 = document.querySelector('.plane3');

                    plane1.style.transform = 'translate(0, 0)';
                    plane2.style.transform = 'translate(0, 0)';
                    plane3.style.transform = 'translate(0, 0)';

                },
                outAnimation: function(){  // 退场动画
                    var plane1 = document.querySelector('.plane1');
                    var plane2 = document.querySelector('.plane2');
                    var plane3 = document.querySelector('.plane3');

                    plane1.style.transform = 'translate(-200px, -200px)';
                    plane2.style.transform = 'translate(-200px, 200px)';
                    plane3.style.transform = 'translate(200px, -200px)';
                }
            },
            // 第三屏
            {
                inAnimation: function(){  // 入场动画
                    var pencel1 = document.querySelector('.pencel1');
                    var pencel2 = document.querySelector('.pencel2');
                    var pencel3 = document.querySelector('.pencel3');

                    pencel1.style.transform = 'translate(0, 0)';
                    pencel2.style.transform = 'translate(0, 0)';
                    pencel3.style.transform = 'translate(0, 0)';

                },
                outAnimation: function(){  // 退场动画
                    var pencel1 = document.querySelector('.pencel1');
                    var pencel2 = document.querySelector('.pencel2');
                    var pencel3 = document.querySelector('.pencel3');

                    pencel1.style.transform = 'translate(0, -200px)';
                    pencel2.style.transform = 'translate(0, 200px)';
                    pencel3.style.transform = 'translate(200px, 200px)';
                }
            },
            // 第四屏
            {
                inAnimation: function(){  // 入场动画
                    var aboutItem1 = document.querySelector('.about3-item:nth-child(1)');
                    var aboutItem2 = document.querySelector('.about3-item:nth-child(2)');

                    aboutItem1.style.transform = 'rotate(0deg)';
                    aboutItem2.style.transform = 'rotate(0deg)';
                },
                outAnimation: function(){  // 退场动画
                    var aboutItem1 = document.querySelector('.about3-item:nth-child(1)');
                    var aboutItem2 = document.querySelector('.about3-item:nth-child(2)');

                    aboutItem1.style.transform = 'rotate(45deg)';
                    aboutItem2.style.transform = 'rotate(-45deg)';
                }
            },
            // 第五屏
            {
                inAnimation: function(){  // 入场动画
                    var team1 = document.querySelector('.team1');
                    var team2 = document.querySelector('.team2');

                    team1.style.transform = 'translateX(0)';
                    team2.style.transform = 'translateX(0)';
                },
                outAnimation: function(){  // 退场动画
                    var team1 = document.querySelector('.team1');
                    var team2 = document.querySelector('.team2');

                    team1.style.transform = 'translateX(-200px)';
                    team2.style.transform = 'translateX(200px)';
                }
            }
        ];

        // 设置主体和每个content-item的高度
        setPageHeight();

        // 设置每一屏都处于退场状态
        for (var i = 0; i < animationList.length; i ++) {
            animationList[i].outAnimation();
        }

        // 设置初始导航位置
        setCurrent(index);

        // 给每个导航项目绑定单击事件
        for (var i = 0; i < navItems.length; i ++) {
            navItems[i].index = i;  // 跟每个导航的dom元素 添加属性
            menuItems[i].index = i;  // 跟每个导航的dom元素 添加属性

            // 导航绑定事件
            navItems[i].addEventListener('click', function(){
                // 激活当前导航
                setCurrent(this.index);
            });

            // 侧边导航绑定事件
            menuItems[i].addEventListener('click', function () {
                //激活当前导航
                setCurrent(this.index);
            });
        }

        // 绑定滚轮事件
        // chrome / ie
        document.addEventListener('mousewheel', mouseScrollFn);
        // firfox
        document.addEventListener('DOMMouseScroll', mouseScrollFn);

        // 监听窗口大小发生改变 resize
        window.addEventListener('resize', function () {
            console.log('resize');
            // 重新计算主体的高度
            contentHeight = window.innerHeight - header.offsetHeight;
            // 重新设置 主体高度和每个content-item的高度
            setPageHeight();
            // 设置导航
            setCurrent(index);

        });

        /**
         * 滚轮事件触发的函数
         */
        function mouseScrollFn(event){
            if (timeId !== null) {
                clearTimeout(timeId); // 清除定时
            }

            // 开启个定时
            timeId = setTimeout(function(){
                var tag = '';  // 标志变量
                if (event.wheelDelta) {  // ie chrome
                    if (event.wheelDelta > 0) {
                        tag = 'up';
                    } else {
                        tag = 'down';
                    }
                } else if (event.detail) { // firefox
                    if (event.detail < 0) {
                        tag = 'up';
                    } else {
                        tag = 'down';
                    }
                }

                // 根据向上向下 做出相应的操作
                if (tag === 'up') {
                    // 向上 上一页
                    if (index > 0) {
                        index --;
                    }
                    // 设置页面 导航 三角
                    setCurrent(index);
                } else if (tag === 'down') {
                    // 向下 下一页
                    if (index < contentItems.length - 1) {
                        index ++;
                    }

                    // 设置页面 导航 三角
                    setCurrent(index);
                }
            }, 300);
        }

        /**
         * 设置主体和每个content-item的高度
         */
        function setPageHeight() {
            // 设置主体内容的高度
            main.style.height = contentHeight + 'px';

            // 给每个页面 content-item 设置高度
            contentItems.forEach(function (contentItem) {
                contentItem.style.height = contentHeight + 'px';
            });
        }

        /**
         * 激活导航和三角位置
         * @param index 当前需要被激活的导航的索引值
         */
        function setCurrent(index) {
            // 其他的导航失去激活
            navItems.forEach(function (navItem, index) {
                navItem.classList.remove('active');
                menuItems[index].classList.remove('active');
            });

            // 当前的导航激活
            navItems[index].classList.add('active');
            menuItems[index].classList.add('active');

            // 设置三角的位置
            arrow.style.left = navItems[index].offsetLeft + (navItems[index].offsetWidth - arrow.offsetWidth) / 2 + 'px';

            // 设置主体内容滚动的距离
            contentListNode.style.top = -contentHeight * index + 'px';

            // 上一个显示的离场动画
            animationList[preIndex].outAnimation();

            // 当前显示入场动画
            animationList[index].inAnimation();

            // 重新设置 preIndex
            preIndex = index;
        }
})