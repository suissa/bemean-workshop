$(function(){
/*-----------------------
	Debug
	-------------------*/
	
	/*var debug = function(to){
		if($('#debug').length == 0) {
  			$('body').append('<div id="debug"><p>Alert:</p></div>');
	}	
		$('#debug p').text('Alert: '+to);
		
	};*/
		
	// ! ---------
	TweenLite.to($('#main'), 0, {css:{'opacity':'0'}, ease:Power4.easeInOut});
	
	$(window).load(function(e) {
		$('#main').removeClass('alpha0');
		$('.loader').hide().remove();
        TweenLite.to($('#main'), 1, {css:{'opacity':'1'}, ease:Power4.easeInOut});
		// scroll_ev(0, 0);
	});
	var win = {h:window.innerHeight, w:window.innerWidth, ua:$.browser};
	var page = {h:$("body").css("height").substr(0, $("body").css("height").length-2), w:parseFloat($('body').width())};
	var video = false;
	var videoHeight = win.h-($('.logo').outerHeight(true)*2);
	var pathname = window.location.pathname;
	// var scroll_ev = function (a, t){
	// 	TweenLite.to(window, t, {scrollTo:{y: a, x:0}, ease:Power4.easeInOut, onComplete:update});
	// };
	var scrollNext = function (e){
		e.preventDefault();
		var to = $(this).attr('href');
		if(to!='#'){
			scroll_ev($(to).offset().top-70, 1);
		}else{
			scroll_ev(0, 1);
		}
	};
	function show(id,xo){
		TweenLite.to($(id),1, {css:{'opacity':'1', scaleX:1, scaleY:1}, ease:Power4.easeInOut, delay:xo});
	}
	if( Modernizr.touch){
	}else{
		TweenLite.to($('.apear'),0, {css:{'opacity':'0',scaleX:0.9, scaleY:0.9}});
		TweenLite.to($('footer'),0, {css:{'opacity':'0', 'top':'30px'}});
		$('#whatisbigdata .apear:eq(0)').waypoint(function() {show($('#whatisbigdata .apear:eq(0)'),0)}, { offset: '90%' });	
		$('#whatisbigdata .apear:eq(1)').waypoint(function() {show($('#whatisbigdata .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#whatisbigdata .apear:eq(2)').waypoint(function() {show($('#whatisbigdata .apear:eq(2)'),0)}, { offset: '80%' });	
		$('#whynow .apear:eq(0)').waypoint(function() {show($('#whynow .apear:eq(0)'),0)}, { offset: '90%' });
		$('#whynow .apear:eq(1)').waypoint(function() {show($('#whynow .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#whynow .apear:eq(2)').waypoint(function() {show($('#whynow .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#whynow .apear:eq(3)').waypoint(function() {show($('#whynow .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#howbig .apear:eq(0)').waypoint(function() {show($('#howbig .apear:eq(0)'),0)}, { offset: '90%' });
		$('#howbig .apear:eq(1)').waypoint(function() {show($('#howbig .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#howbig .apear:eq(2)').waypoint(function() {show($('#howbig .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#howbig .apear:eq(3)').waypoint(function() {show($('#howbig .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#howbig .apear:eq(4)').waypoint(function() {show($('#howbig .apear:eq(4)'),0.75)}, { offset: '80%' });	
		$('#howpeople .apear:eq(0)').waypoint(function() {show($('#howpeople .apear:eq(0)'),0)}, { offset: '90%' });
		$('#howpeople .apear:eq(1)').waypoint(function() {show($('#howpeople .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#howpeople .apear:eq(2)').waypoint(function() {show($('#howpeople .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#howpeople .apear:eq(3)').waypoint(function() {show($('#howpeople .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#howpeople .apear:eq(4)').waypoint(function() {show($('#howpeople .apear:eq(4)'),0.75)}, { offset: '80%' });
		$('#ourambition .apear:eq(0)').waypoint(function() {show($('#ourambition .apear:eq(0)'),0)}, { offset: '90%' });
		$('#ourambition .apear:eq(1)').waypoint(function() {show($('#ourambition .apear:eq(1)'),0)}, { offset: '80%' });	
		$('#ourambition .apear:eq(2)').waypoint(function() {show($('#ourambition .apear:eq(2)'),0.25)}, { offset: '80%' });	
		$('#ourambition .apear:eq(3)').waypoint(function() {show($('#ourambition .apear:eq(3)'),0.5)}, { offset: '80%' });	
		$('#ourambition .apear:eq(4)').waypoint(function() {show($('#ourambition .apear:eq(4)'),0.75)}, { offset: '80%' });
		$('footer').waypoint(function() {TweenLite.to($('footer'),0.5, {css:{'opacity':'1', 'top':'0px'}});}, { offset: '80%' });
	}
		$('footer').waypoint(function() {$('#main>.pagination>ul>li>a').css({'background':'#FFF'});}, { offset: '40%' }); // add white bg to the nav
		$('footer').waypoint(function() {$('#main>.pagination>ul>li>a').css({'background':''});}, { offset: '60%' }); // rremove white bg to the nav	
	var navSelector = function (page){
		$('.pagination a span').removeClass('navSelect');
		$('.pagination a[href='+'#'+page+'] span').addClass('navSelect');
	};
	navSelector('video')
$(window).scroll(function(e){
			var h = window.innerHeight;
			var perc = (win.h*0.01)*50;
			if($(window).scrollTop()<=$('#whatisbigdata').offset().top-perc){
				navSelector('video');
			}else if ($(window).scrollTop()<=$('#whynow').offset().top-perc){
				navSelector('whatisbigdata');
			}else if ($(window).scrollTop()<=$('#howbig').offset().top-perc){
				navSelector('whynow');
			}else if ($(window).scrollTop()<=$('#howpeople').offset().top-perc){
				navSelector('howbig');
			}else if ($(window).scrollTop()<=$('#ourambition').offset().top-perc){
				navSelector('howpeople');
			};
});
});