var count,
    bar = $('.bar'),
    percent = $('<span class="counter" />');
    percent.appendTo(bar);
		
var loaderInterval = setInterval(function() {
	count = Math.round((bar.width() / bar.parent().width()) * 100);
	var counter = $('.counter');
	$(counter).text(count + '%');
	if (count == 99) {
		clearInterval(loaderInterval);
		$(counter).remove();
	}
}, 100);


/*

HTML:
<div class="progress-bar main"></div>

CSS:
.counter {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 9;
	cursor: pointer;
}
*/
