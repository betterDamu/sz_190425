define(function () {
    // 获取元素
    var musicNode = document.querySelector('.music');
    var audioNode = document.querySelector('#audio');

    // 绑定事件
    musicNode.addEventListener('click', function(){
        if (audioNode.paused) {
            audioNode.play();  // 播放
            musicNode.classList.add('played');
        } else {
            audioNode.pause(); // 暂停
            musicNode.classList.remove('played');
        }
    });
})