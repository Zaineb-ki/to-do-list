var Conteur = 1;
function add(){
    var text = document.getElementById('text').value;
    var content = document.getElementById('content'); 
    content.innerHTML += '<div><input type="checkbox" name="" onclick="check(this)" id="'+Conteur+'"><label id="l'+Conteur+'">'+text+'</label><br></div>';
    Conteur ++;
}


function check(element){

	var id=element.id;
	if (document.getElementById(element.id).checked) {
		document.getElementById('l'+id).style='text-decoration: line-through';
	} else{
	    document.getElementById('l'+id).style='none';
	}
}
