(function(){

var names= ["John", "janvi","Riya", "jaggu","Daniel","Krupa","jeena","jenny","Shruti","Jennifer","Jordan"];

console.log("***********************************************");
console.log("Names that are stored in an array");
for(var i=0; i<names.length; i++){
    
	
	console.log(names[i]);

}
console.log("***********************************************");
console.log("The actual problem statement's output:");

for(var i=0; i<names.length ; i++){
	
	var firstletter= names[i].charAt(0).toLowerCase();

	if(firstletter === "j"){
		console.log("Goodbye" + "\t" + names[i]);
        }
	else{
		console.log("Hello" + "\t" + names[i]);
	}
	
}
})();

