// Main Javascipt Source
// Example class and DOMContentLoaded listener

/* global $
*/

class App {
	
	constructor(opts = {}) {
		// initialize side nav
		$(".button-collapse").sideNav({
			edge: 'right',
			menuWidth: 280
		});
		
		// initialize search modal
		$('#searchModal').modal({
			dismissible: true
		});
	}
	
	showSearch() {
		$('#searchModal').modal('open');
		$('#searchModal input[name="s"]').focus();
	}
	
	closeSearch() {
		$('#searchModal').modal('close');
	}
	
};

document.addEventListener("DOMContentLoaded", function(event) { 

	// create new App object
	let $app = new App();
	window.$app = $app;
	
});