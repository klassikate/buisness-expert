$(document).ready(function(){
		$(".b-mobile-menu").on("click", function(){
		$(".active-mobile-menu").css("display","block");
		$(".b-mobile-exit").css("display","block");
		$(".b-logo").css("display","none");
		$(".b-mobile-menu").css("display","none");
	});

	$(".b-mobile-exit").on("click", function(){
		$(".active-mobile-menu").css("display","none");
		$(".b-mobile-exit").css("display","none");
		$(".b-logo").css("display","block");
		$(".b-mobile-menu").css("display","block");
	});
	if(screen.width  > 576){
		$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$(".b-1").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>600){
			$(".b-2").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>1000){
			$(".b-3").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>1500){
			$(".b-4").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>1800){
			$(".b-5").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>2000){
			$(".b-6").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>2200){
			$(".b-7").addClass("fadeInDown active");
			$(".spincrement").spincrement({
				from: 0, 
				to: false,
				decimalPlaces: 0,
				decimalPoint: ".",
				thousandSeparator: "",
				duration: 2000
			});
		};
		if($(window).scrollTop()>2800){
			$(".b-8").addClass("fadeInDown active");
		};
		if($(window).scrollTop()>3100){
			$(".b-9").addClass("fadeInDown active");
		};
	});
	}

});
