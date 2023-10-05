

function clearInput() {
    document.getElementById("field").value = "";
}

function num(value) {
    document.getElementById('field').value += value;
}

// This function evaluates the expression and returns result
function evalute() {
    var p = document.getElementById("field").value;
    var q = eval(p);
    document.getElementById("field").value = q;
}