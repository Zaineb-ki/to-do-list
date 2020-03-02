var Conteur = 1;
function add(){
    var text = document.getElementById('text').value;
    var content = document.getElementById('content'); 
    content.innerHTML += '<div><input type="checkbox" name="" onclick="check(this)" id="'+Conteur+'"><label id="A'+Conteur+'">'+text+'</label><br></div>';
    Conteur ++;
}


function check(element){

	var id=element.id;
	if (document.getElementById(element.id).checked) {
		document.getElementById('A'+id).style='text-decoration: line-through';
	} else{
	    document.getElementById('A'+id).style='none';
	}
}
