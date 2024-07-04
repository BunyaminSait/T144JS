// Operatorler

let x=235;
let y=13;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

console.log('------------------');

console.log(x==y); // false
console.log(x!=y); // true
console.log(x>y); // true
console.log(x<y); // false
console.log(x<=y); // false
console.log(x>=y); // true

let sayi1=100;
let sayi2=String(100)

console.log(sayi1==sayi2); // true == operatoru sadece degere bakar turu ile ilgilenmez
console.log(sayi1===sayi2); // false === operatoru degerin ayni olmasi yetmez tur ayni degilse false verir

let a=10;
console.log(a); // 10
a+=4;
console.log(a); // 14
a-=5;
console.log(a); // 9
a+=1;
a*=3;
console.log(a); // 30
a-=200;
console.log(a); // -170
a/=-2;
console.log(a); // 85
a%=6;
console.log(a); // 1