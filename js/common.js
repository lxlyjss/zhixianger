//滑到顶部固定
jQuery(function($) {
	$(document).ready(function() {
		//enabling stickUp on the '.navbar-wrapper' class
		$('.navbar-wrapper').stickUp({
			itemClass: 'menuItem',
			itemHover: 'active'
		});
	});
});
new UISearch(document.getElementById('sb-search'));
//公司简介	
var mySwiper = new Swiper('.swiper .swiper-container', {
	pagination: '.pagination',
	loop: true,
	grabCursor: true,
	paginationClickable: true,
	autoplayDisableOnInteraction:false,

});
var mySwiper = new Swiper('.swiper2 .swiper-container', {
	pagination: '.pagination2',
	loop: true,
	grabCursor: true,
	paginationClickable: true,
	autoplayDisableOnInteraction:false,
	autoplay: 4000,
});
$(document).ready(function() {
	$(".showabout_btn").click(function() {
		var h = document.body.clientHeight;
		if (document.body.scrollWidth < 768) {
			$(".showabout").css({
				top: 0,
				width: 320,
				height: 150,
				right: -2
			});
			$(".showabout").show(1000);
		} else {
			$(".showabout").css({
				top: 0,
				width: 650,
				height: 500,
				right: -2
			});
			$(".showabout").show(1000);
		}
		$(".showabout_btn").css({
			display: "none"
		});

		$(".closeup").css({
			display: "block"
		});
	});
	$(".closeup").click(function() {

		$(".showabout").css({
			top: 0,
			right: -2
		});
		$(".showabout").hide(1000);
		$(".showabout_btn").css({
			display: "block"
		});
		$(".closeup").css({
			display: "none"
		});
	});
});

$("img").load(function() {
	reHeight();
	if (location.hash) {
		main(index);
	}
})
$(window).resize(function() {
	reHeight();
})

function reHeight() {
		$("#home").height($("#heisw").height());
		$(".bg_left img").height($("#middle li img").eq(0).height());
		$(".bg_right img").height($("#middle li img").eq(0).height());
	}
	//案例滚动
$(function() {
	//初始化
	$("#middle ul").eq(1).html($("#middle ul").eq(0).html());
	$("#con li").eq(0).show();
	if (document.body.scrollWidth < 768) {
		$("#middle li").width($("#application_box").width() / 2);
	} else {
		$("#middle li").width($("#application_box").width() / 3);
	};
	var index = 0;
	var picLength = $("#con li").length;
	var picWidth = $("#middle li").width();
	setInterval(function() {

		index++;
		if (index > picLength) {
			index = 0;
			$("#con li").hide();
			$("#con li").eq(1).show();
			$("#middle").css({
				left: -index * picWidth
			});
			index++;
		} else {
			$("#con li").hide();
			$("#con li").eq(index).show();
		}
		if (index > picLength - 1) {
			$("#con li").hide();
			$("#con li").eq(0).show();
		}
		$("#middle").animate({
			left: -index * picWidth
		});
	}, 4000);
});