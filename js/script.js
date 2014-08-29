$(function(){
	
	var note = $('#note'),
		ts = new Date(2013, 0, 1),
		newYear = false;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date(2014,10,28,0,0,0));
		newYear = true;
	};


	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " día" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hora" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minuto" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " segundo" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "para la entrada en vigencia de la ley del lobby";
			}
			else {
				message += "para la entrada en vigencia de la ley del lobby2";
			}
			
			note.html(message);
		}
	});


	
});
