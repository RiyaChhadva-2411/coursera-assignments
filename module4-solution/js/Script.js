(function(){

	var names=["John", "janvi","Riya","jaggu","Daniel","Krupa","jeena","jenny","Shruti","Jennifer","Jordan"];


	for(var i=0; i<names.length; i++){

		var firstletter= names[i].charAt(0).toLowerCase();

		if(firstletter === "j"){
             
             	byeSpeaker.speak(names[i]);
             }
             
         
             
           else{
           	 
           	 	helloSpeaker.speak(names[i]);
           	 	
           	 }
           	 
           
       }
      
})();