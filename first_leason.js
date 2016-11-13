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

    if (firstNumber > secondNumber) {
        TheBiggerNumber = firstNumber
    }

    var resultTB = document.getElementById("result-tb");
    resultTB.value = "The biggest number is:" + TheBiggerNumber;
}

//switch- case: при повече от 3 случая

function display_case() {
    var num = document.getElementById('number').value;
    var day = "You select day Invalid Weekday";
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", " Friday", "Saturday"];
    // switch (parseInt(num)) {
    //
    //     case 1:
    //         day = "Sunday";
    //         break;
    //
    //     case 2:
    //         day = "Monday";
    //         break;
    //
    //     case 3:
    //         day = "Tuesday";
    //         break;
    //
    //     case 4:
    //         day = "Wednesday";
    //         break;
    //
    //     case 5:
    //         day = "Thusday";
    //         break;
    //
    //     case 6:
    //         day = " Friday";
    //         break;
    //
    //     case 7:
    //         day = "Saturday";
    //         break;
    //
    // }
    day = num > 0 && num <= 7 ? days[num - 1] : day
    document.getElementById("result").innerHTML = day;
}
