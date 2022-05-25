

$(function() {
	var vW = $(window).width();
	var vH = $(window).height() - 60;

	$('.vr').css({
		width: vW + 'px',
		height: vH + 'px'
	})
	$('.datu').css({
		width: vW + 'px',
		height: vH + 'px'
	})
	
	 $('footer').css({
        width: vW + 'px',

    })

	$('footer a').click(function() {
		$(this).addClass('footer-a-on').siblings().removeClass('footer-a-on')
	})

	$(".navItem1 div").off("click").on("click", function() {
		var index = $(this).index();
		$(this).addClass("navItem-on").siblings().removeClass("navItem-on");
		$(".navTex1 img").eq(index).addClass("navTex-on").siblings().removeClass("navTex-on");
	});
	$(".navItem2 div").off("click").on("click", function() {
		var index = $(this).index();
		$(this).addClass("navItem-on").siblings().removeClass("navItem-on");
		$(".navTex2 img").eq(index).addClass("navTex-on").siblings().removeClass("navTex-on");
	});
	$(".navItem3 div").off("click").on("click", function() {
		var index = $(this).index();
		$(this).addClass("navItem-on").siblings().removeClass("navItem-on");
		$(".navTex3 img").eq(index).addClass("navTex-on").siblings().removeClass("navTex-on");
	});
	$(".navItem4 div").off("click").on("click", function() {
		var index = $(this).index();
		$(this).addClass("navItem-on").siblings().removeClass("navItem-on");
		$(".navTex4 img").eq(index).addClass("navTex-on").siblings().removeClass("navTex-on");
	});
})