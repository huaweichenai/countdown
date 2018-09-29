function countTime (time, spanHtml) {
            //获取当前时间
            var date = new Date();
            var now = date.getTime();
            //设置截止时间
            var endDate = new Date(time);
            var end = endDate.getTime();
            //时间差
            var leftTime = end-now;
            //定义变量 d,h,m,s保存倒计时的时间
            var d,h,m,s;
            if (leftTime>=0) {
                d = checkTime(Math.floor(leftTime/1000/60/60/24));
                h = checkTime(Math.floor(leftTime/1000/60/60%24));
                m = checkTime(Math.floor(leftTime/1000/60%60));
                s = checkTime(Math.floor(leftTime/1000%60));                  
            } else {
                d=checkTime(0);
                h=checkTime(0);
                m=checkTime(0);
                s=checkTime(0); 
            }
            //将倒计时赋值到div中
            spanHtml.html(d + "天" + h + "时" + m + "分"+ s + "秒");
    }
    function checkTime(i) { //将0-9的数字前面加上0，例1变为01
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }

     /*提示框定时*/
    function fade_notice(){
        $(".alert").fadeOut(2000);
        $(".cart-yz").fadeOut(5000);
    }