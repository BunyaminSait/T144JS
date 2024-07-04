// Javada 3 adet degisken turu bulunur
// let  -  var  -  const olmak uzere
// const atandiktan sonra degistirilemez. Sabiti ifade eder orn: pi sayisi

/*
Javascript'de temelde 5 adet data tipi vardir
Bu data tipleri String,Number, Booleav, Null ve Undefined
Degisken olustururken data tipini belirtmeye gerek yoktur
*/

// String data tipi
let isim='Murat';
var soyisim='Babayigit';
console.log(isim+' '+soyisim)

console.log(' ----- ')

// Number data tipi
let yas=45;
var kilo=76.2;

console.log('Yas: '+yas+'\nKilo: '+kilo)
var sayi=4;
console.log(sayi+kilo)

const pi=3;
console.log(pi)
// pi=3.14; const olarak tanimlanan degiskene tekrar atama yapilamaz
console.log(pi)

// Boolean data tipi
const isHappy=true;
let isLearn=true;
var isLazy=false;

console.log(isHappy);
// isHappy=false;

// Null ve Undefined data tipi
let firstName='Rana';
var lastName='Ulker';
var itSalary=null;
let yearOfRetired=undefined;

console.log('Calisan Bilgileri:\n\t'+'firstname: '+firstName+'\n\tlastName: '+lastName+'\n\tIt Salary: '+itSalary+'\n\tYear Of Retired: '+yearOfRetired);
itSalary=3200;
console.log('Calisan Bilgileri:\n\t'+'firstname: '+firstName+'\n\tlastName: '+lastName+'\n\tIt Salary: '+itSalary+'\n\tYear Of Retired: '+yearOfRetired);


console.log(typeof firstName); // typeof komutu bize datanin turunu verir
let zam=100;
var zamMiktari=String(zam); // Data casting islemi ile number bir datayi string olarak tanimladik
console.log(typeof zam); // number
console.log(typeof zamMiktari); // string