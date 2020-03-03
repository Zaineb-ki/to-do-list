var Conteur = 1;
function add(){
    var text = document.getElementById('text').value;
	var content = document.getElementById('content'); 
	

	var taskDiv = document.createElement('DIV')
	var task = document.createElement("INPUT")
	var taskLabel = document.createElement("LABEL")
	
	task.setAttribute("type", "checkbox")
	task.setAttribute("onclick", "check(this)")
	task.setAttribute("id", "task"+Conteur)
	taskLabel.innerHTML = text
	taskLabel.setAttribute("id", "Atask"+Conteur)

	taskDiv.appendChild(task)
	taskDiv.appendChild(taskLabel)
	content.appendChild(taskDiv)
//    content.innerHTML += '<input type="checkbox" onclick="check(this)" id="task'+Conteur+'"><label id="Atask'+Conteur+'">'+text+'</label><br>';
    Conteur ++;
}


function check(element){

	var test =element.id;
	console.log(document.getElementById(test).checked)
	if (document.getElementById(test).checked) {
		document.getElementById(test).checked = true;
		document.getElementById('A'+test).style='text-decoration: line-through';
	} else{
	    document.getElementById('A'+test).style='none';
	}
}

