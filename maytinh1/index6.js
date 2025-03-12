function phepcong() {
    sothunhat = parseFloat(document.getElementById("thefirst").value);
    sothuhai = parseFloat(document.getElementById("thesecond").value);
    let tong = sothunhat + sothuhai;
    document.getElementById("result").innerHTML = ("result: " + tong);
}

function pheptru() {
    sothunhat = parseFloat(document.getElementById("thefirst").value);
    sothuhai = parseFloat(document.getElementById("thesecond").value);
    let hieu = sothunhat - sothuhai;
    document.getElementById("result").innerHTML = "result :" + hieu;
}
function phepnhan() {
    sothunhat = parseFloat(document.getElementById("thefirst").value);
    sothuhai = parseFloat(document.getElementById("thesecond").value);
    let nhan = sothunhat * sothuhai;
    document.getElementById("result").innerHTML = "result :" + nhan;
}
function phepchia() {
    sothunhat = parseFloat(document.getElementById("thefirst").value);
    sothuhai = parseFloat(document.getElementById("thesecond").value);
   let  chia = sothunhat / sothuhai;
    document.getElementById("result").innerHTML = "result :" + chia;
}
// /* ghi chú */
// function pheptru {
//     sothunhat = document.getElementById("thefirst");
//     let varsothunhat = parseFloat().value;
//
// }