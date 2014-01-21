$(function(){
	
	var note = $('#note'),
		ts = new Date(2013, 0, 1),
		newYear = false;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date(2014,0,21,16,0,0));
		newYear = true;
	}
	
});
