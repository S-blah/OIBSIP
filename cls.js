function clearscreen() {
    document.getElementById("result").value ="";
    }

    //this function displays values
    function display(value) {
    document.getElementById("result").value += value;
    }

    //this function is for assignment operator
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value =q;
    }
