jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	
	grax_tm_hero_title();

	
	
	jQuery(window).load('body', function(){
		grax_tm_my_load();
	});
	
});


function grax_tm_my_load(){
	
	"use strict";
	setTimeout(function(){grax_tm_preloader();},1000);
	setTimeout(function(){grax_tm_hero_title_fade();},3000);
}

function grax_tm_hero_title(){
	
	"use strict";
	
	var heroText 		= jQuery('.fn_animation');
	
	heroText.each(function(){
		var element 	= $(this);
		var	start	 	= '<span class="word">';
		var	char	 	= '<span class="character">';
		var end			= '</span>';
		var space 		= '&nbsp;';
		var allHTML 	= '';
		$.each(element.text().split(' '), function(i,e){
			if(i !== 0){
				allHTML += char + space + end;
			}
			allHTML += start;
			$.each(e.split(''), function (ii, ee) {
				allHTML += char + ee + end;
			});
			allHTML += end;
		});
		element.html(allHTML).addClass('ready');
	 });
}

function grax_tm_hero_title_fade(){
	"use strict";
	
	var mySpan	= jQuery('.fn_animation .character');
	var a 		= 0;
	var speed 	= 30;
	var wait	= 500;
	mySpan.each(function(i){
		var element = jQuery(this);
		setTimeout(function(){element.addClass('opened');},i*speed);
		a		= i*speed;
	});
	setTimeout(function(){
		jQuery('.grax_tm_topbar').addClass('opened');
		jQuery('.grax_tm_down').addClass('opened');
	},a+wait);
}

function grax_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}