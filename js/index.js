$(function () {
    /*动态响应式轮播图*/
    banner();
    initTabs();
});
function banner() {
    var imgList = [
        {
            pcImg:'images/slide_01_2000x410.jpg',
            mImg:'images/slide_01_640x340.jpg'
        },
        {
            pcImg:'images/slide_02_2000x410.jpg',
            mImg:'images/slide_02_640x340.jpg'
        },
        {
            pcImg:'images/slide_03_2000x410.jpg',
            mImg:'images/slide_03_640x340.jpg'
        },
        {
            pcImg:'images/slide_04_2000x410.jpg',
            mImg:'images/slide_04_640x340.jpg'
        }
    ]
    /*渲染方法*/
    var renderHtml = function(){
        /*2.判断当前的设备*/
        var width = $(window).width();
        /*是不是移动端*/
        var isMobile = width >= 768 ? false:true;
        /*
         * 3.动态渲染轮播图
         * 3.1 准备数据
         * 3.2 把数据转化成html结构  （字符串拼接  模版引擎）
         * 3.3 页面渲染
         * */
        /*1.准备模版*/
        /*2.获取模版的字符串内容*/
        var pointStr = $("#point_template").html();
        var imageStr = $("#image_template").html();
        /*转换成模板方法*/
        var pointFuc = _.template(pointStr);
        var imageFuc = _.template(imageStr);
        /*解析成html 结构*/
        var pointHtml = pointFuc({model:imgList});
        var imageHtml = imageFuc({model:imgList,isMobile:isMobile});
        $(".carousel-indicators").html(pointHtml);
        $(".carousel-inner").html(imageHtml);
    }
    /*4.测试  页面尺寸改变的时候要求重新渲染*/
    $(window).on("resize", function () {
        renderHtml();
    }).trigger("resize");
}
function initTabs(){
    var ul=$(".wjs_product_box .nav-tabs");
    var lis=ul.find("li");
    var width=0;
    $.each(lis,function(i,o){
        width+=$(o).outerWidth(true);
    });
    ul.width(width);
    itcast.iScroll({
        swipeDom:$('.wjs_product_box').get(0),
        swipeType:'x',
        swipeDistance:50
    });
}