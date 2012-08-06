
(function() {
	var
		 q = $('.b-qa__q')
		,open
		,openI
	;

	var slide = function(dom, side, scrollTo) {
		var
			 el = $(dom)
			,h
			,oldH
		;
		//console.log('side: ', side);
		if( side == 'in' ) {
			el.css({
				 display: 'block'
				,overflow: 'hidden'
			});
			h = el.height();
			//console.log('h: ', h);
			el.height(0);
		}
		else {
			oldH = el.height();
			h = 0;
		}

		el.animate({
			 height: h
		}
		,{
			step: function(a) {
				a = Math.ceil(a);
				el.height(a)
				//console.log('a: ', a);
			}
			,duration: 500
			,complete: function() {
				if( side == 'out' ) {
					el.css({
						 height: oldH
						,display: 'none'
					});
				}
				/*else if( scrollTo ) { //  && ( Math.abs(Math.abs($('html,body').offset().top) - scrollTo.offset().top) > ( $(window).height() - 200 ) )
					$('html,body').animate({
						scrollTop: scrollTo.offset().top
					}, 200);
				}*/
			}
		});
	}


	q.each(function(i, dom) {
		var
			 el = $(dom)
			,next = el.next()
		;
		el.wrapInner('<a href="#" class="b-local" />');
		el.children().click(function(e) {

			e.preventDefault();
			if( open ) {
				slide(open, 'out');
			}
			if( openI != i ) {
				slide(next, 'in', el);
				open = next;
				openI = i;
			}
			else {
				open = undefined;
				openI = undefined;
			}
		});


	});



})();
