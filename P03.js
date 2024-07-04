// Concatenation + operatörü kullanılarak yapılan bir birleştirme işlemidir
console.log('---------- CONCATENATION ----------')
let isim='Murat';
var soyisim='Babayiğit';
console.log(isim+' '+soyisim)

console.log('')
console.log('---------- INTERPOLATION  ----------')
let yas=44;
var message= `My name is ${isim} ${soyisim}. I am ${yas} years old.`
console.log(message)
isim='Berk';
soyisim='Yiğit';
yas=18;
message= `My name is ${isim} ${soyisim}. I am ${yas} years old.`
console.log(message)