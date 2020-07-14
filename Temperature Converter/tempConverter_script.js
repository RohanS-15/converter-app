function convert(){

    if (document.getElementById("tempConverterCheckboxCtoF").checked && document.getElementById("tempConverterCheckboxFtoC").checked){
        document.getElementById("tempConverterCheckboxCtoF").checked = false;
        document.getElementById("tempConverterCheckboxFtoC").checked = false;
        document.getElementById("temp_input").value = ""
    }

    if(document.getElementById("tempConverterCheckboxCtoF").checked){
        
        var inputValue = document.getElementById("temp_input").value

        var CtoF_result = inputValue * 1.8 + 32

        document.getElementById("resultLabel").innerHTML = "Conversion result: " + CtoF_result.toFixed(2)+" F";

    }
    if(document.getElementById("tempConverterCheckboxFtoC").checked){
        var inputValue = document.getElementById("temp_input").value

        var FtoC_result = (inputValue -32) / 1.8

        document.getElementById("resultLabel").innerHTML = "Conversion result: " + FtoC_result.toFixed(2)+" C";
    }
}