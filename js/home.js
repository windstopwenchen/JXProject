$(function(){
	//左侧菜单收缩效果
	$(".menu_wrap dt").click(function(){
		$(this).siblings().toggle();
		$(this).find("b").toggleClass("off");
	});
})