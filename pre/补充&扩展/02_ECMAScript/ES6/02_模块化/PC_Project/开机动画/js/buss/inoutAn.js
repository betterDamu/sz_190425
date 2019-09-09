define(function (require,exports,module) {
    // 获取元素
    var bootMask = document.querySelector('#bootMask');
    var bootMaskUp = bootMask.querySelector('.boot-mask-up');
    var bootMaskDown = bootMask.querySelector('.boot-mask-down');
    var bootProgress = bootMask.querySelector('.boot-progress');
    // 页面用到的图片
    var imgArr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
    var loaded = 0;  // 表示已经加载的图片
    var len = imgArr.length;  // 总的图片数量

    imgArr.forEach(function (imgSrc) {
        var imgNode = document.createElement('img');
        imgNode.src = 'img/'+imgSrc;

        imgNode.addEventListener('load', function(){
            loaded ++; // 已下载数量+1
            var scale = loaded / len;   // 计算已下载的比例
            // 设置进度条宽度
            bootProgress.style.width = scale * 100 + '%';
        });
    });

    // 监听 进度条过渡执行完毕
    bootProgress.addEventListener('transitionend', function () {
        if (loaded === len) {
            // 执行开场
            bootMaskDown.style.height = '0';
            bootMaskUp.style.height = '0';
            // 进度条消失
            bootProgress.remove();
        }
    });

    // 上下窗帘过渡执行完毕
    bootMaskDown.addEventListener('transitionend', function(){
        bootMask.remove();
    });
})