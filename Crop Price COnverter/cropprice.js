

var convert = function Convert(){
	//if both are checked
	if (document.getElementById("btot").checked == false && document.getElementById("ttob").checked == false){
		alert("Please check one of the boxes.")}
	
	if (document.getElementById("btot").checked && document.getElementById("ttob").checked){
		document.getElementById("btot").checked = false;
		document.getElementById("ttob").checked = false;}
		
	// if none are checked
	
	// if nothing is selected
	if(document.getElementById("drop_down").value == "Choose your crop"){
			alert("Please choose a crop.")
		}
		
	//if btot is checked
	if (document.getElementById("btot").checked){
		
		if(document.getElementById("drop_down").value == "wheat"){
			var result = document.getElementById("value_input").value * 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "oats"){
			var result = document.getElementById("value_input").value * 64.8420;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "barley"){
			var result = document.getElementById("value_input").value * 45.9300;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "rye"){
			var result = document.getElementById("value_input").value * 39.3680;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "flaxseed"){
			var result = document.getElementById("value_input").value * 39.3680;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "canola/rapeseed"){
			var result = document.getElementById("value_input").value * 44.0920;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "corn"){
			var result = document.getElementById("value_input").value * 39.3680;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "flaba beans 2"){
			var result = document.getElementById("value_input").value * 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "soybeans"){
			var result = document.getElementById("value_input").value * 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "peas"){
			var result = document.getElementById("value_input").value * 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "buckwheat"){
			var result = document.getElementById("value_input").value * 45.9300;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "mustard seed"){
			var result = document.getElementById("value_input").value * 44.0920;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "canary seed"){
			var result = document.getElementById("value_input").value * 44.0920;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "sunflower seed"){
			var result = document.getElementById("value_input").value * 73.4870;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "triticale 1"){
			var result = document.getElementById("value_input").value * 42.3960;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
			
		if(document.getElementById("drop_down").value == "beans (white) 2"){
			var result = document.getElementById("value_input").value * 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/tonne";}
	}
			
	// if ttob is checked
	if(document.getElementById("ttob").checked){
		if(document.getElementById("drop_down").value == "wheat"){
			var result = document.getElementById("value_input").value / 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "oats"){
			var result = document.getElementById("value_input").value / 64.8420;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "barley"){
			var result = document.getElementById("value_input").value / 45.9300;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "rye"){
			var result = document.getElementById("value_input").value / 39.3680;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "flaxseed"){
			var result = document.getElementById("value_input").value / 39.3680;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "canola/rapeseed"){
			var result = document.getElementById("value_input").value / 44.0920;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "corn"){
			var result = document.getElementById("value_input").value / 39.3680;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "flaba beans 2"){
			var result = document.getElementById("value_input").value / 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "soybeans"){
			var result = document.getElementById("value_input").value / 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "peas"){
			var result = document.getElementById("value_input").value / 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "buckwheat"){
			var result = document.getElementById("value_input").value / 45.9300;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "mustard seed"){
			var result = document.getElementById("value_input").value / 44.0920;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "canary seed"){
			var result = document.getElementById("value_input").value / 44.0920;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "sunflower seed"){
			var result = document.getElementById("value_input").value / 73.4870;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "triticale 1"){
			var result = document.getElementById("value_input").value / 42.3960;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}
			
		if(document.getElementById("drop_down").value == "beans (white) 2"){
			var result = document.getElementById("value_input").value / 36.7440;
			document.getElementById("result_label").innerHTML = "Result: $" + result.toFixed(2) + "/bushel";}



	}// ttob end
					
}// function end











