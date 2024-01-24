$(document).ready(function($) {

	$('.line_grouped_cross').click(function(){
			$(this).toggleClass('open');
			$('#menu_open').toggleClass('active');		
	});	

	//----- Changing images -------- //
	//
    let imagesW = ['w1w.png', 'w2w.png', 'w3w.png', 'w4w.png'];
    let imagesP = ['p1w.png', 'p3w.png', 'p5w.png', 'p6w.png'];
    
    $('<img id="let_w" class="letter" src="img/' + imagesW[Math.floor(Math.random() * imagesW.length)] + '">').appendTo('#w');    
    $('<img id="let_p" class="letter" src="img/' + imagesP[Math.floor(Math.random() * imagesP.length)] + '">').appendTo('#p');    

	// ----- Parallax Effect ------- //

	let titre = document.getElementById('titre');
    let signature = document.getElementById('signature');
    titre.homePos = { x: titre.offsetLeft, y: titre.offsetTop };
    signature.homePos = { x: signature.offsetLeft, y: signature.offsetTop };
    
    $('#intro').mousemove(function (e) {
        parallax(e, document.getElementById('titre'), 20);
        parallax(e, document.getElementById('signature'), 30);
    });

	// ----------------------------- //
	resizeGrid();
	// ----- Parallax gradient ----- //

	let $win = $(window),
    w = 0,h = 0,
    opacity = 1,

    getWidth = function() {
        w = $win.width();
        h = $win.height();
    	};

    $win.mousemove(function(e) {
        getWidth();
        opacity = (e.pageX/w * 0.5) + (e.pageY/h * 0.5);

        $('#yellow').css('opacity',opacity);

    	});

	// ----------------------------- //

});	



	// ----- Parallax Function ----- //
	
	function parallax(e, target, layer) {
    let x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    let y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    $(target).offset({ top: y ,left : x });
	};
	
	// ----------------------------- //	

$(window).resize(function() {

	function resizeGrid(){

		$('#grid-number').html('');

		let size = $('#rocco').width();
		let largeur_colonne = size / 4;
		let originX = 0;

		// Grid and places...

		$('#grid-number').width(size);
		$('.nav_wrap').width(largeur_colonne);
		
		for ( i=0 ; i<4 ; i++ ) {
			$('#grid-number').append(
				'<div class="line line_h" style="left:'+originX+'px;" >&nbsp;'+originX+'</div>');
				if (i == 1) {
				var posix = originX;
				}

				originX += largeur_colonne;
		}
	}	

	resizeGrid();

});