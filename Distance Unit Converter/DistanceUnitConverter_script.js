var value_inputAccess = document.getElementById.bind(document)



var fromDropDownAccess = document.getElementById.bind(document)
var toDropDownAccess = document.getElementById.bind(document)

var resultLabelAccess = document.getElementById.bind(document)

var operationLabelAccess = document.getElementById.bind(document)

var clear_function = function clear_func() {
    value_inputAccess("value_input").value = "";
    fromDropDownAccess("from_drop_down").selectedIndex = 0;
    toDropDownAccess("to_drop_down").selectedIndex = 0;
    operationLabelAccess("operationLabel").innerHTML = "Operation: ";
    resultLabelAccess("result_label").innerHTML = "Conversion result: ";
}



function convert() {

    // index 0 if statements //
    if (fromDropDownAccess("from_drop_down").selectedIndex == 0 && toDropDownAccess("to_drop_down").selectedIndex == 0) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 0 && toDropDownAccess("to_drop_down").selectedIndex == 1) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 0 && toDropDownAccess("to_drop_down").selectedIndex == 2) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 0 && toDropDownAccess("to_drop_down").selectedIndex == 3) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 0 && toDropDownAccess("to_drop_down").selectedIndex == 4) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 1 && toDropDownAccess("to_drop_down").selectedIndex == 0) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 2 && toDropDownAccess("to_drop_down").selectedIndex == 0) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 3 && toDropDownAccess("to_drop_down").selectedIndex == 0) {
        alert("Please choose unit.");
        clear_function.call()
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 4 && toDropDownAccess("to_drop_down").selectedIndex == 0) {
        alert("Please choose unit.");
        clear_function.call()
    }

    // -------------------------------------------------- //

    // to drop down index 1 if statements //

    if (fromDropDownAccess("from_drop_down").selectedIndex == 1 && toDropDownAccess("to_drop_down").selectedIndex == 1) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + value_inputAccess("value_input").value + " cm";

            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 1";
        } else {
            alert("Please enter value.")
        }
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 2 && toDropDownAccess("to_drop_down").selectedIndex == 1) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue * 2.54;
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " cm";
            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 2.54";
        } else {
            alert("Please enter value.")
        }
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 3 && toDropDownAccess("to_drop_down").selectedIndex == 1) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue * 100;

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " cm";
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 100";
		} else {
			alert("Please enter value.")
		}
	} else if (fromDropDownAccess("from_drop_down").selectedIndex == 4 && toDropDownAccess("to_drop_down").selectedIndex == 1) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue * 30.48;

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " cm";
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 30.48";
		} else {
			alert("Please enter value.")
}
}
	//to drop down index 2 statements
	if (fromDropDownAccess("from_drop_down").selectedIndex == 1 && toDropDownAccess("to_drop_down").selectedIndex == 2) {
        var inputValue = document.getElementById("value_input").value;
		var result = inputValue / 2.54;
        if (inputValue != "") {
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + ' " ';

            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " / 2.54";
        } else {
            alert("Please enter value.")
        }
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 2 && toDropDownAccess("to_drop_down").selectedIndex == 2) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + inputValue + ' " ';
            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 1";
        } else {
            alert("Please enter value.")
        }
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 3 && toDropDownAccess("to_drop_down").selectedIndex == 2) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue * 39.37;

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + ' " ';
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 39.37";
		} else {
			alert("Please enter value.")

}

	} else if (fromDropDownAccess("from_drop_down").selectedIndex == 4 && toDropDownAccess("to_drop_down").selectedIndex == 2) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue * 12;

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + ' " ';
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 12";
		} else {
			alert("Please enter value.")
}}


	// to drop down index 3 
	if (fromDropDownAccess("from_drop_down").selectedIndex == 1 && toDropDownAccess("to_drop_down").selectedIndex == 3) {
        var inputValue = document.getElementById("value_input").value;
		var result = inputValue / 100;
        if (inputValue != "") {
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " m";

            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " / 100";
        } else {
            alert("Please enter value.")
        }
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 2 && toDropDownAccess("to_drop_down").selectedIndex == 3) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue / 39.37;
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " m";
            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " / 39.37";
        } else {
            alert("Please enter value.")
        }
		
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 3 && toDropDownAccess("to_drop_down").selectedIndex == 3) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + inputValue + ' m ';
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 1";
		} else {
			alert("Please enter value.")

}
		
	} else if (fromDropDownAccess("from_drop_down").selectedIndex == 4 && toDropDownAccess("to_drop_down").selectedIndex == 3) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue / 3.281;

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + ' m ';
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " / 3.281";
		} else {
			alert("Please enter value.")
}}
		// to drop down 4
	if (fromDropDownAccess("from_drop_down").selectedIndex == 1 && toDropDownAccess("to_drop_down").selectedIndex == 4) {
        var inputValue = document.getElementById("value_input").value;
		var result = inputValue / 30.48;
        if (inputValue != "") {
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " ' ";

            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " / 30.48";
        } else {
            alert("Please enter value.")
        }
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 2 && toDropDownAccess("to_drop_down").selectedIndex == 4) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue / 12;
            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " ' ";
            operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " / 12";
        } else {
            alert("Please enter value.")
        }
		
    } else if (fromDropDownAccess("from_drop_down").selectedIndex == 3 && toDropDownAccess("to_drop_down").selectedIndex == 4) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            var result = inputValue * 3.281;

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + result.toFixed(2) + " ' ";
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 3.281";
		} else {
			alert("Please enter value.")

}
		
	} else if (fromDropDownAccess("from_drop_down").selectedIndex == 4 && toDropDownAccess("to_drop_down").selectedIndex == 4) {
        var inputValue = document.getElementById("value_input").value;
        if (inputValue != "") {
            

            resultLabelAccess("result_label").innerHTML = "Conversion result: " + inputValue + ' m ';
			operationLabelAccess("operationLabel").innerHTML = "Operation: " + inputValue + " * 1";
		} else {
			alert("Please enter value.")
}}


}