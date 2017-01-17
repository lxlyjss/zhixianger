
 function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
   var ua = navigator.userAgent;
   var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
   if (re.exec(ua) != null)
   rv = parseFloat(RegExp.$1);
  }
  return rv;
 } 
 function checkVersion() {
  ver = getInternetExplorerVersion();
  if (ver > -1)
   b_chk = 1;
  else
   b_chk = 2;
 }
checkVersion();

$(function(){
	var icobole=true;
	$(".news .item .titleWrap .btn-view a").click(function(){
		
		obj = $(this).parent().parent().parent().next();
		if(icobole){
			obj.parent().siblings().removeClass("on");
			obj.parent().addClass("on");
			obj.parent().siblings().find(".fold-contents").css("display","none");
			obj.slideDown();
			obj.parent().siblings().find(".btn-view a").html("<i class=\"iconfont icon-arrowdown\"></i>");
			$(this).html("<i class=\"iconfont icon-arrowup\"></i>");
			icobole=false;
		}else{
			obj.parent().removeClass("on");
			obj.slideUp();
			$(this).html("<i class=\"iconfont icon-arrowdown\"></i>");
			icobole=true;
		}
		position = obj.parent().offset();
		$("html,body");
		return false;
	});
	$(".news .item .box").click(function(){
		$(this).find(".titleWrap .btn-view a").click();
	});
	$(".news .item .fold-contents .btn-close a").click(function(){
		$(this).parent().parent().parent().parent().removeClass("on");
		$(this).parent().parent().parent().parent().find(".btn-view a").html("<i class=\"iconfont icon-arrowdown\"></i>");
		$(this).parent().parent().parent().slideUp();
		position = $(this).parent().parent().parent().parent().offset();
		$("html,body").animate({scrollTop:position.top},500);
		return false;
	});

});

