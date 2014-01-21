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
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " día" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hora" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minuto" + ( minutes==1 ? '':'s' ) + " y ";
			message += seconds + " segundo" + ( seconds==1 ? '':'s' ) + " ";
			
			if(newYear){
				message += "para el lanzamiento de votainteligente.cl!";
			}
			else {
				message += "para el lanzamiento de votainteligente.cl!";
			}
			
			note.html(message);
		}
	});
	
});
