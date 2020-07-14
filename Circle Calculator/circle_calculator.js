const dropDownAcc = document.getElementById.bind(document)
const unitLabAcc = document.getElementById.bind(document)

const resultLabAcc = document.getElementById.bind(document)

const radInputAcc = document.getElementById.bind(document)
const diamInputAcc = document.getElementById.bind(document)
const cirInputAcc = document.getElementById.bind(document)
const areaInputAcc = document.getElementById.bind(document)


const radius_find_function = function find_radius(){
	
	// display unit if statements
	if (dropDownAcc("drop_down").selectedIndex == 0){
		unitLabAcc("unit_label").innerHTML = "cm";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 1){
		unitLabAcc("unit_label").innerHTML = '  " ';
		
	} else if (dropDownAcc("drop_down").selectedIndex == 2){
		unitLabAcc("unit_label").innerHTML = "  m ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 3){
		unitLabAcc("unit_label").innerHTML = "  ' "; 
		
	} else if (dropDownAcc("drop_down").selectedIndex == 4){
		unitLabAcc("unit_label").innerHTML = "  yd ";
	
	} else if (dropDownAcc("drop_down").selectedIndex == 5){
		unitLabAcc("unit_label").innerHTML = " miles  ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 6){
		unitLabAcc("unit_label").innerHTML = "  km ";
	}
    	
	// input if statements
		// if all are empty
	if(radInputAcc("radius_input").value == "" && diamInputAcc("diameter_input").value == "" && cirInputAcc("circumfrence_input").value == "" && areaInputAcc("area_input").value == ""){
		alert("Please enter a value")
	}
		// if others have input
	if (radInputAcc("radius_input").value != ""){
		alert("No reason to find radius with radius.")
		window.location.reload();
		
	} else if (diamInputAcc("diameter_input").value != ""){
		var result = diamInputAcc("diameter_input").value /2;
		resultLabAcc("result_label").innerHTML = `Result: radius ≈ ${result.toFixed(2)}`;
		
	} else if (cirInputAcc("circumfrence_input").value != ""){
		var result = cirInputAcc("circumfrence_input").value / 3.14 / 2;
		resultLabAcc("result_label").innerHTML = `Result: radius ≈ ${result.toFixed(2)}`;
		
	} else if (areaInputAcc("area_input").value != ""){
		var result = Math.sqrt(areaInputAcc("area_input").value / 3.14) ;
		resultLabAcc("result_label").innerHTML = `Result: radius ≈ ${result.toFixed(2)}`;
		
	} 
}


const diameter_find_function = function find_diameter(){
	
	// display unit if statements
	if (dropDownAcc("drop_down").selectedIndex == 0){
		unitLabAcc("unit_label").innerHTML = "cm";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 1){
		unitLabAcc("unit_label").innerHTML = '  " ';
		
	} else if (dropDownAcc("drop_down").selectedIndex == 2){
		unitLabAcc("unit_label").innerHTML = "  m ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 3){
		unitLabAcc("unit_label").innerHTML = "  ' "; 
		
	} else if (dropDownAcc("drop_down").selectedIndex == 4){
		unitLabAcc("unit_label").innerHTML = "  yd ";
	
	} else if (dropDownAcc("drop_down").selectedIndex == 5){
		unitLabAcc("unit_label").innerHTML = " miles  ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 6){
		unitLabAcc("unit_label").innerHTML = "  km ";
	}
	// input if statements
		// if all are empty
	if(radInputAcc("radius_input").value == "" && diamInputAcc("diameter_input").value == "" && cirInputAcc("circumfrence_input").value == "" && areaInputAcc("area_input").value == ""){
		alert("Please enter a value")
	}
		// if others have input
	if (radInputAcc("radius_input").value != ""){
		var result = radInputAcc("radius_input").value * 2;
		resultLabAcc("result_label").innerHTML = `Result: diameter ≈ ${result.toFixed(2)}`;
		
	} else if (diamInputAcc("diameter_input").value != ""){
		alert("No reason to find diameter with diameter.")
		window.location.reload();
		
	} else if (cirInputAcc("circumfrence_input").value != ""){
		var result = cirInputAcc("circumfrence_input").value / 3.14 ;
		resultLabAcc("result_label").innerHTML = `Result: diameter ≈ ${result.toFixed(2)}`;
		
	} else if (areaInputAcc("area_input").value != ""){
		var result = 2 * Math.sqrt(areaInputAcc("area_input").value / 3.14) ;
		resultLabAcc("result_label").innerHTML = `Result: diameter ≈ ${result.toFixed(2)}`;
		
	} 
}

const circumfrence_find_function = function(){
	
	// display unit if statements
	if (dropDownAcc("drop_down").selectedIndex == 0){
		unitLabAcc("unit_label").innerHTML = "cm";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 1){
		unitLabAcc("unit_label").innerHTML = '  " ';
		
	} else if (dropDownAcc("drop_down").selectedIndex == 2){
		unitLabAcc("unit_label").innerHTML = "  m ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 3){
		unitLabAcc("unit_label").innerHTML = "  ' "; 
		
	} else if (dropDownAcc("drop_down").selectedIndex == 4){
		unitLabAcc("unit_label").innerHTML = "  yd ";
	
	} else if (dropDownAcc("drop_down").selectedIndex == 5){
		unitLabAcc("unit_label").innerHTML = " miles  ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 6){
		unitLabAcc("unit_label").innerHTML = "  km ";
	}
	
	// input if statements
		// if all are empty
	if(radInputAcc("radius_input").value == "" && diamInputAcc("diameter_input").value == "" && cirInputAcc("circumfrence_input").value == "" && areaInputAcc("area_input").value == ""){
		alert("Please enter a value")
	}
		// if others have input
	if (radInputAcc("radius_input").value != ""){
		var result = radInputAcc("radius_input").value * 2 * 3.14;
		resultLabAcc("result_label").innerHTML = `Result: circumfrence ≈ ${result.toFixed(2)}`;
		
	} else if (diamInputAcc("diameter_input").value != ""){
		var result = diamInputAcc("diameter_input").value * 3.14;
		resultLabAcc("result_label").innerHTML = `Result: circumfrence ≈ ${result.toFixed(2)}`;
		
	} else if (cirInputAcc("circumfrence_input").value != ""){
		alert("No reason to find circumfrence with circumfrence.")
		window.location.reload();
		
	} else if (areaInputAcc("area_input").value != ""){
		var result = 2 * Math.sqrt(areaInputAcc("area_input").value * 3.14) ;
		resultLabAcc("result_label").innerHTML = `Result: circumfrence ≈ ${result.toFixed(2)}`;
		
	}
}

const area_find_function = function(){
	
	// display unit if statements
	if (dropDownAcc("drop_down").selectedIndex == 0){
		unitLabAcc("unit_label").innerHTML = "cm²";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 1){
		unitLabAcc("unit_label").innerHTML = '  " ²';
		
	} else if (dropDownAcc("drop_down").selectedIndex == 2){
		unitLabAcc("unit_label").innerHTML = "  m² ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 3){
		unitLabAcc("unit_label").innerHTML = "  ' ²"; 
		
	} else if (dropDownAcc("drop_down").selectedIndex == 4){
		unitLabAcc("unit_label").innerHTML = "  yd² ";
	
	} else if (dropDownAcc("drop_down").selectedIndex == 5){
		unitLabAcc("unit_label").innerHTML = " miles²  ";
		
	} else if (dropDownAcc("drop_down").selectedIndex == 6){
		unitLabAcc("unit_label").innerHTML = "  km² ";
	}
	
	// input if statements
		// if all are empty
	if(radInputAcc("radius_input").value == "" && diamInputAcc("diameter_input").value == "" && cirInputAcc("circumfrence_input").value == "" && areaInputAcc("area_input").value == ""){
		alert("Please enter a value")
	}
		// if others have input
	if (radInputAcc("radius_input").value != ""){
		var result = radInputAcc("radius_input").value * radInputAcc("radius_input").value * 3.14 ;
		resultLabAcc("result_label").innerHTML = `Result: area ≈ ${result.toFixed(2)}`;
		
	} else if (diamInputAcc("diameter_input").value != ""){
		var result = diamInputAcc("diameter_input").value / 2  * diamInputAcc("diameter_input").value / 2  * 3.14;
		resultLabAcc("result_label").innerHTML = `Result: area ≈ ${result.toFixed(2)}`;
		
	} else if (cirInputAcc("circumfrence_input").value != ""){
		var result = 3.14 * cirInputAcc("circumfrence_input").value / (2 * 3.14) * cirInputAcc("circumfrence_input").value / (2 * 3.14) ;
		resultLabAcc("result_label").innerHTML = `Result: area ≈ ${result.toFixed(2)}`;
		
	} else if (areaInputAcc("area_input").value != ""){
		alert("No reason to find circumfrence with circumfrence.")
		window.location.reload();
		
	}
	
	
}
