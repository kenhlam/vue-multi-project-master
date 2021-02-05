export function addLoadEvent(){
            window.onload = roll(100);
        }
        var timer;

        function roll(t) {
            var ulbox = document.getElementById("review_box");
            ulbox.scrollTop = 0; // 开始无滚动时设为0
            timer = setInterval(rollStart, t); // 参数t越小，滚动速度越快
            ulbox.onmouseover = function () {
                clearInterval(timer);
            }
            ulbox.onmouseout = function () {
                timer = setInterval(rollStart, t);
            }
        }

        // 开始滚动函数
        function rollStart() {
            var ul1 = document.getElementById("comment1");
            var ulbox = document.getElementById("review_box");
            // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
            if (ulbox.scrollTop >= ul1.scrollHeight) {
                ulbox.scrollTop = 0;
            } else {
                ulbox.scrollTop++;
            }
        }
  
        export function stopScrollTop(){
            clearInterval(timer);
        }
