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
