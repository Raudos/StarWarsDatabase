// Blastdoors
var $firstBlast = $(".blastdoors:nth-child(5)");
var $secondBlast = $(".blastdoors:nth-child(6)");
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
			left: "-100px"
		}, 2000);
	$secondBlast.animate({
		right: "-100px"
	}, 2000);
	$firstBlast.removeClass("closed");
}
var close = function() {
	$firstBlast.animate({
			left: "0px"
		}, 2000);
	$secondBlast.animate({
			right: "0px"
		}, 2000);
	$firstBlast.addClass("closed");
	open();
}

// Script
$rebelLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3.fadeOut(0);
		$layer3r.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3r.fadeIn(5000);
	}
});
$empireLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3.fadeOut(0);
		$layer3e.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3e.fadeIn(5000);
	}
});
$orLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3.fadeOut(0);
		$layer3or.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3or.fadeIn(5000);
	}
});
$sLogo.on("click", function() {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3.fadeOut(0);
		$layer3s.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3s.fadeIn(5000);
	}
});