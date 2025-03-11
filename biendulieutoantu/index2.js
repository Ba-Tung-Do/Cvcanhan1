function chuyendoi(){
 nhapvao = document.getElementById('celsius').value;

 let doC = parseInt(nhapvao)
let doF = doC * 9 / 5 + 32;
document.getElementById('resulf').innerHTML = ('Do F =' + doF);
}