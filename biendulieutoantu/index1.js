diemly = prompt('diem ly')
diemhoa = prompt('diem hoa')
diemsinh = prompt('diem sinh')

let ly = parseInt(diemly)
let hoa = parseInt(diemhoa)
let sinh = parseInt(diemsinh)

let tong = ly + hoa + sinh;
let diemtrungbinh = tong / 3
document.write( 'tong  la: ' + tong);
document.write('diemtrungbinh la: ' + diemtrungbinh);