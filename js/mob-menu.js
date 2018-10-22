(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
		$(".button").addClass("active1");
	    
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	function closeNav(){
		open = false;
		$(".button").removeClass("active1");
		
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
	}
	document.addEventListener('click', closeNav);


	function mob_menu_toggle(){
		open = false;
		
$(".button").removeClass("active1");
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper, 'opened-nav');

    }

    /*menu click*/
    $('#menu a').on('click', function (){

        mob_menu_toggle();

    });


})();

