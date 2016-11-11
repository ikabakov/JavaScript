function Myclick(message) {
    alert(message)
}

function timerfunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.getElementById("clock").value =
       hour + ":" + min + ":" + sec;

}

setInterval('timerfunc()', 1000);


function getBiggerNumber() {
    var firstNumber = parseInt(document.getElementById("first-tb").value);
    var secondNumber = parseInt(document.getElementById("second-tb").value);

    var TheBiggerNumber = secondNumber;

    if (firstNumber>secondNumber){
        TheBiggerNumber = firstNumber
    }

    var resultTB = document.getElementById("result-tb");
    resultTB.value = "The biggest number is:" + TheBiggerNumber;
}