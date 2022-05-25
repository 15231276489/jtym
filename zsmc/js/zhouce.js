/*******************************************************************************
 * 
 ******************************************************************************/
var wbas_config = {
    format: '#index#'
}

$(function () {

    // 禁用上下滑动
    document.addEventListener('touchstart', function (event) {
        if (event.cancelable && !event.defaultPrevented) {
            event.preventDefault();
        }
    }, false);

    $(".wbas_content>.wbas_axisside").each(function () {

        var imageCount = $(this).attr('imagecount') ? $(this).attr('imagecount') : 1;
        var imageFormat = $(this).attr('imageformat');

        wbasAxisSide( $(this), imageFormat, imageCount );
    });

});

function wbasAxisSide(jqContainer, imageFormat, imageCount) {
    

    var frames = new Array();
    var curFrame = 0;

    //跨函数辅助变量
    var readyShowing = true;

    loadFrames();

    runMobileEvent();

    runPCEvent();

    // 纠正显示窗口大小位置
    function loadFrames() {

        var loadedCount = 0;

        // // 加入加载中提示框架，加载完成会自动删掉
        jqContainer.append('<img class="wbas_loading"/>');

        jqContainer.append('<span class="wbas_axisside_loading">0%</span>');

        // 加载序列帧并嵌入到网页容器
        for( var i = 1; i <=imageCount; i++ ) {
            // 通过Image进行预加载
            var newImage = new Image();
            newImage.src = imageFormat.replace(wbas_config.format, i);
            frames.push(newImage);
            newImage.onload = function () {
                
                loadedCount++;

                jqContainer.children('.wbas_axisside_loading').text(Math.floor(loadedCount / imageCount * 100) + "%");
                
                if (loadedCount >= imageCount) {

                    var frameContainer = $('<div class="wbas_frames"></div>');
                    for( var j = 0; j < frames.length; j++ ) {
                        var image = $('<img>').attr('src', frames[j].src).appendTo(frameContainer);
                        frames[j] = image;
                    }
                    frameContainer.appendTo(jqContainer);

                    jqContainer.children('.wbas_loading').fadeOut("slow");
                    jqContainer.children(".wbas_axisside_loading").fadeOut("slow", function () {
                        frameContainer.fadeIn("slow");
                        // 加载完成刷新出来
                        var stopCount = imageCount;
                        var handleInterval = setInterval(function() {
                            stopCount--;
                            if ( stopCount > 0 && readyShowing ) {
                                frames[curFrame].hide();
                                curFrame = cycle(curFrame+1, imageCount);
                                frames[curFrame].show();
                            } else {
                                handleInterval = 0;
                                window.clearInterval(handleInterval);
                            }
                        }, 50);
                    });
                }
            };
             newImage.onerror = function () {
                 jqContainer.children('.wbas_loading').remove();
                 jqContainer.children('.wbas_axisside_loading').remove();
                 jqContainer.children('.wbas_axisside_loading_failed').remove();
                 jqContainer.append('<span class="wbas_axisside_loading_failed" style="font-size: 14px;">加载失败啦，请检查网络并刷新...</span>');
             };
        };
    }

    // 移动端控制消息
    function runMobileEvent() {
        // 缩放
        var curScale = 1;
        var fixedScale = 1;
        touch.on('.wbas_axisside', 'pinch', function (event) {
            curScale = fixedScale * event.scale;
            curScale = (curScale < 1 ? 1 : curScale);
            curScale = (curScale > 3 ? 3 : curScale);
            $('.wbas_axisside').css('transform', 'scale('+ curScale + ', ' + curScale + ')');
        });
        touch.on('.wbas_axisside', 'pinchend', function (event) {
            fixedScale = curScale;
        });
        // 滑动旋转
        var fixedFrame = 1;
        touch.on('.wbas_axisside', 'swipestart', function (event) {
            readyShowing = false;
            fixedFrame = curFrame;
        });
        touch.on('.wbas_axisside', 'swiping', function (event) {
            if('left' == event.direction || 'right' == event.direction) {
                frames[curFrame].hide();
                var distance = parseInt(event.distance / 10);
                distance = ( 'right' == event.direction ? -distance : distance );
                curFrame = cycle(fixedFrame + distance, imageCount);
                frames[curFrame].show();
            }
        });
        // 双击还原
        touch.on('.wbas_axisside', 'doubletap', function (event) {
            curScale = 1;
            fixedScale = 1;
            readyShowing = false;
            $('.wbas_axisside').css('transform', 'scale(1, 1)');
        });
    }
   
    // PC端控制消息
    function runPCEvent() {
        var slideStartX = 0;
        var onMoving = false;

        jqContainer.mousedown(function (event) {
            readyShowing = false;
            onMoving = true;
            slideStartX = (event.touches ? event.touches[0].clientX : event.clientX);
        });
        jqContainer.mousemove(function (event) {
            if ( onMoving ) {
                var slideMoveX = (event.touches ? event.touches[0].clientX : event.clientX);
                var distance = slideMoveX - slideStartX;
                if (distance > 8 || distance < -8) {
                    frames[curFrame].hide();
                    if (distance > 0) {
                        curFrame = cycle(curFrame - 1, imageCount);
                    } else {
                        curFrame = cycle(curFrame + 1, imageCount);
                    }
                    frames[curFrame].show();
                }
                slideStartX = slideMoveX;
            }
        });
        jqContainer.mouseup(function (event) {
            onMoving = false;
        });
        jqContainer.mouseleave(function (event) {
            onMoving = false;
        });
    }

    // 控制值范围
    function cycle(curValue, maxValue) {
        if (curValue < 0) {
            curValue = (-curValue) % maxValue;
            curValue = maxValue - curValue;
        } else if (curValue >= maxValue) {
            curValue = curValue % maxValue;
        }
        return curValue;
    }
}
