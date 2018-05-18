$().ready(function() {
	$('.dv1').Drags({
		handler: '.handler',
		onMove: function(e) {
			$('.content').html('Текущее положение:(Слева:' + e.pageX + ' ,Сверху:' + e.pageY + ')');
		},
		onDrop: function(e){
			$('.content').html('текст исчезает при перетаскивании! <br />Текущее положение:(Слева:<strong>' + e.pageX + '</strong> ,Сверху:<strong>' + e.pageY + '</strong>)');
		}
	});

	$('.dv2').Drags({
		handler: '.gb',                
		zIndex:200,
		opacity:.9
	});
});