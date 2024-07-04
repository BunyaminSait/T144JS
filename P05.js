// Array icerisinde data barindiran bir dizidir

let meyveler=['elma','muz','kayisi','kavun']

console.log(meyveler);
console.log(meyveler[3]);

// push metodu: array sonuna yeni eleman ekliyor
meyveler.push('portakal')
console.log(meyveler);

// pop metodu: dizinin sonundaki ogeyi kaldirip console icine yazdirilirsa kaldirdigi ogeyi yazdirir

console.log(meyveler.pop());

console.log(meyveler);

// shift(): dizinin basindaki elemani kaldirir. console icine yazilirsa kaldirdigi elemani yazdirir

console.log(meyveler.shift());
console.log(meyveler)

// unshift(): dizinin basina eleman ekler

meyveler.unshift('uzum');
console.log(meyveler)

// splice(): 
meyveler.splice(0,1,'avakado','kiraz')
console.log(meyveler);

var arabalar=['Renault','Tofas','Opel']

console.log(meyveler.concat(arabalar));