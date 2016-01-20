// Blastdoors
var $firstBlast = $(".blastdoors:nth-child(1)");
var $secondBlast = $(".blastdoors:nth-child(2)");
var $blastWidth = $firstBlast.width();
var $closed = $firstBlast.hasClass("closed");
// Blastdoors text
var $firstBlastText = $(".blastdoorsText:nth-child(1)");
var $secondBlastText = $(".blastdoorsText:nth-child(2)");
var $blastWidthText = $firstBlastText.width();
var $closedText = $firstBlastText.hasClass("closed");
// Layers
var $layer3r = $("img.layer3r");
var $layer3e = $("img.layer3e");
var $layer3or = $("img.layer3or");
var $layer3s = $("img.layer3s");
var $layer3 = $("img.layer3");
// Logos
var $rebelLogo = $("#rebelLogo");
var $empireLogo = $("#empireLogo");
var $orLogo = $("#orLogo");
var $sLogo = $("#sLogo");
var $main = $(".main");
//Fields
var $info = $("#info");
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
var openText = function() {
	$firstBlastText.animate({
			left: -$blastWidthText
		}, 1500);
	$secondBlastText.animate({
		right: -$blastWidthText
	}, 1500);
	$firstBlastText.removeClass("closed");
}
var closeText = function(event) {
	$firstBlastText.animate({
			left: "0px"
		}, 1500);
	$secondBlastText.animate({
			right: "0px"
		}, 1500);
	$firstBlastText.addClass("closed");
	if (event.target.className != "factionLogo") {
		openText();
	}
}
// Script
$rebelLogo.on("click", function(event) {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3r.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3r.delay(1000).fadeIn(3000);
	}
	closeText(event);
});
$empireLogo.on("click", function(event) {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3e.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3e.delay(1000).fadeIn(3000);
	}
	closeText(event);
});
$orLogo.on("click", function(event) {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3or.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3or.delay(1000).fadeIn(3000);
	}
	closeText(event);
});
$sLogo.on("click", function(event) {
	$closed = $firstBlast.hasClass("closed");
	if($closed) {
		$layer3s.fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$layer3s.delay(1000).fadeIn(3000);
	}
	closeText(event);
});
// Mousover 
$layer3.hover(function() {
	classToggle = this.classList[0]; //This has to be [0] element, as i put all the marking element of the side as a first one
	classToggle = "." + classToggle;
	$(this).siblings(classToggle).css("display", "inline");
}, function() {
	$(this).siblings(classToggle).css("display", "none");
}); 
// Ajax
$layer3.on('click', function() {
	var whatPartToLoad = this.id;
	var whatFileToLoad = "ajax.html"
	var stringMe = whatFileToLoad + " #" + whatPartToLoad;
	$("#info").fadeOut(2000, function() {
		$info.load(stringMe);
	});
})
$(document).ajaxComplete(function(event) {
	$closedText = $firstBlastText.hasClass("closed");
	if ($closedText) {
		$("#info").delay(1000).fadeIn(4000);
		openText();
	} else {
		$("#info").delay(1000).fadeIn(4000);
		closeText(event);
	}
	
})