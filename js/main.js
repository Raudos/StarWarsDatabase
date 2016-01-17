// Blastdoors
var $firstBlast = $(".blastdoors:nth-child(1)");
var $secondBlast = $(".blastdoors:nth-child(2)");
var $blastWidth = $firstBlast.width();
var $closed = $firstBlast.hasClass("closed");
// Layers
var $layer3r = $(".layer3r");
var $layer3e = $(".layer3e");
var $layer3or = $(".layer3or");
var $layer3s = $(".layer3s");
var $layer3 = $(".layer3");
// Logos
var $rebelLogo = $("#rebelLogo");
var $empireLogo = $("#empireLogo");
var $orLogo = $("#orLogo");
var $sLogo = $("#sLogo");
var $main = $(".main");
// Functions
var open = function() {
	$firstBlast.animate({
			left: -$blastWidth
		}, 1500);
	$secondBlast.animate({
		right: -$blastWidth
	}, 1500);
	$firstBlast.removeClass("closed");
}
var close = function() {
	$firstBlast.animate({
			left: "0px"
		}, 1500);
	$secondBlast.animate({
			right: "0px"
		}, 1500);
	$firstBlast.addClass("closed");
	open();
}

// Script
$rebelLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3r.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3r.delay(1000).fadeIn(3000);
	}
});
$empireLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3e.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3e.delay(1000).fadeIn(3000);
	}
});
$orLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3or.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3or.delay(1000).fadeIn(3000);
	}
});
$sLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3s.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3s.delay(1000).fadeIn(3000);
	}
});
// Mousover 
$layer3.hover(function() {
	$(this).siblings(".tooltip").css("display", "inline");
}, function() {
	$(this).siblings(".tooltip").css("display", "none");
}); 