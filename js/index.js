/**
 * Created by Danny on 2017-05-26.
 */
~function (desw) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desw * 100 + 'px'
}(640);


var mySwiper=new Swiper(".swiper-container",{
    //setting 配置的参数
    direction:'vertical', //默认是水平方向滑动,规定方向:垂直方向滑动
    loop:true, //无缝循环滚动
    onTransitionEnd:function(swiper){
        //回调函数 onSlideChangeEnd 从一个slide结束到能另一个slide执行
        //swiper.activeIndex 获取当前滑块的索引值
        var slideAry=swiper.slides; //获取所有滑块的总数
        var curIndex=swiper.activeIndex; //获取滑块当前的索引值
        var targetId='page0';
        var total=slideAry.length;
        //动态获取id值  0 新数组的倒数第2个  length-1  新数组的第1个
        switch(curIndex){
            case 0:
                targetId+=total-2; //第一张
                break;
            case total-1:
                targetId+=1;  //最后一张
                break;
            default:
                targetId+=curIndex
        }
        //循环数组的每一项
        [].forEach.call(slideAry, function (item,index) {
            if(curIndex === index){ //让当前屏加上id  其他屏id为null
                item.id=targetId
            }else{
                item.id=null;
            }
        })

    }
});


//music  要操作谁  先获取谁 用定时器让音乐播放器有一个延迟的时间
var musicBox=document.querySelector('#musicBox'),
    musicAudio=document.querySelector('#musicAudio');
window.setTimeout(function(){
    //音乐播放器播放 有声音 跟没有声音的情况
    musicAudio.play();
    //事件监听 canplay 动画效果起作用
    musicAudio.addEventListener('canplay',function(){
        musicBox.className='music musicMove';
    },false);
},1000);
musicBox.addEventListener('click',function(){
    //paused 暂停状态
    //音乐播放 动画开启
    //否则 音乐暂停 动画关闭
    if(musicAudio.paused){
        musicAudio.play();
        musicBox.className='music musicMove';
    }else{
        musicAudio.pause();
        musicBox.className='music';
        musicBox.style.opacity=1;
    }
},false);

console.log('解决bug')