//百度分享
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"32"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

//头部导航
$('.xwg').hover(function () {
    $(this).find('div').stop(true,true).slideDown();
},function () {
    $(this).find('div').stop(true,true).slideUp();
});

//图片内容页切换控制
switchpic();
function switchpic(){
	var $num = 8;
	var $len = $('.dlList dl').length;
	var $iwidth = $('.dlList dl').width()+12;
	var $current_index = $(".dlList dl.on").index();
	var count;
	if ($len%$num==0) {
		count = $len/$num;
	} else {
		count = Math.ceil($len/$num);
	}
	var $drightleft = -(count-1)*($iwidth*$num)+'px';
	var $curent_len = Math.floor($current_index/$num);
	var $dleft;
	var $dright;
	$('.dlList').width($iwidth*$len);
	$('.dlList').css({'left':'-'+$curent_len*($num*$iwidth)+'px'});
	$('a.next').click(function(){
		$dleft = $('.dlList').css('left');
		if($(this).attr('class') !== 'next nexton'){
			$('.dlList').animate({'left':'-='+$num*$iwidth+'px'});
		}
		if($dleft==-(count-2)*($iwidth*$num)+'px'){
			$(this).addClass('nexton');
		}
		if($dleft>=0+'px'){
			$('a.prev').removeClass('prevon');
		}
	})
	$('a.prev').click(function(){
		$dleft = $('.dlList').css('left');
		if($(this).attr('class') !== 'prev prevon'){
			$('.dlList').animate({'left':'+='+$num*$iwidth+'px'});
		}
		if($dleft==-($num*$iwidth)+'px'){
			$('a.prev').addClass('prevon');
		} 
		if($dleft<=$drightleft){
			$('a.next').removeClass('nexton');
		}
	})
	$dleft = $('.dlList').css('left');
	if($dleft>=0+'px'){
		$('a.prev').addClass('prevon');
	} else {
		$('a.prev').removeClass('prevon');
	}
	if($dleft<=$drightleft){
		$('a.next').addClass('nexton');
	}else{
		$('a.next').removeClass('nexton');
	}
}

//热榜效果
$('.everyweek').each(function () {
var li = $(this).find('li');
 li.hover(function () {
     var other = $(this).siblings('li');
     $(this).addClass('change');
     other.removeClass('change');
     $(this).find('img').show();
     other.find('img').hide();
     $(this).find('div').show();
     other.find('div').hide();})
});
//友情链接
$('.link .tabtit span').each(function(i){
	$(this).click(function(){
		$(this).addClass('on').siblings('span').removeClass('on');
		$('.link .l_tab').eq(i).show().siblings('.l_tab').hide();
	})
})

$('.cat_re li').each(function (n) {
    $(this).hover(function () {
        $(this).addClass('select');
        $(this).siblings('li').removeClass('select');
        $('.cat_re_content').eq(n).show().siblings('.cat_re_content').hide();
    })
});

//AddFavorite
function AddFavorite(sURL, sTitle){
	try{window.external.addFavorite(sURL, sTitle);}
	catch (e){
		try{window.sidebar.addPanel(sTitle, sURL, "");}
		catch (e){alert("加入收藏失败，请使用Ctrl+D进行添加");}
	}
	}

//SetHome
function SetHome(obj,vrl){try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);}catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}catch (e) {alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");}var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref('browser.startup.homepage',vrl);}}}

//首页轮播
jQuery(".focusBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
/*SuperSlide图片切换*/
jQuery(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});
//首页图片版块滚动
jQuery(".smallScroll").slide({ mainCell:"ul",delayTime:100,vis:4,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext" });
//频道页栏目切换
$('.channel_catname li').each(function (n) {
    var a = $(this).find('a');
    $(this).hover(function () {
        a.addClass('select');
        $(this).siblings('li').find('a').removeClass('select');
        $('.newslist').eq(n).show().siblings('div').hide();
    })
});

//频道页栏目显示
var times = 0; 
$('.channel_catname span').click(function () {
    times++;
    $('.more_href').toggle();
    if(times % 2 != 0) {
        $(this).css('background','url('+theme+'/css/images/rup.png) no-repeat 90% 55% #fff');
    }
    else {
        $(this).css('background','url('+theme+'/css/images/rdown.png) no-repeat 90% 55% #F7F7F7');
    }
});
//图片频道页轮播
//大图切换
jQuery(".game163").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200});
//小图左滚动切换
jQuery(".game163 .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:4,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext" });

//当前导航状态
var $current_url = document.location.href;
var $hosturl = 'http://'+window.location.host+'/';
$('#singlenav li,#nav li').each(function(){
	var $_url = $(this).children('a').attr('href');
	if($current_url.indexOf($_url)!==-1&&$_url!==$hosturl){
		$(this).addClass('on');
	}
})

//gotop
var gotoTop = { fixed: "#costom", id: "#costom", clickMe : function(){ $('html,body').animate({scrollTop : '0px'},{ duration:500}); }, toggleMe : function() { if($(window).scrollTop() == 0) { $(this.fixed).stop().animate({'opacity': 0}, "slow"); } else { $(this.fixed).stop().animate({'opacity': 1}, "slow"); } }, init : function() { $(this.fixed).css('opacity', 0); $(this.id).click(function(){ gotoTop.clickMe(); return false; }); $(window).bind('scroll resize', function(){ gotoTop.toggleMe(); }); } }; gotoTop.init();

//频道页距离		
$('.channel_list ul li').eq(1).addClass('left15');
$('.channel_list ul li').eq(3).addClass('left15');

